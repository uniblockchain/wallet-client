import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';
import backgrounds from '@storybook/addon-backgrounds';
import { setOptions } from '@storybook/addon-options';
import { configure as enzymeConfigure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import enzymeMatchers from 'enzyme-matchers';
import 'change-bootstrap/dist/css/bootstrap-material-design.css';
import themeDecorator from './themeDecorator';
import '../src/index.css';

// jest-enzyme doesn't work in the browser so configuring matchers manually
const matchers = {};

Object.keys(enzymeMatchers).forEach(matcherKey => {
  const matcher = {
    [matcherKey](wrapper, ...args) {
      const result = enzymeMatchers[matcherKey].call(this, wrapper, ...args);

      let message = this.isNot ? result.negatedMessage : result.message;

      if (result.contextualInformation.expected) {
        message += `\n${this.utils.RECEIVED_COLOR(
          result.contextualInformation.expected,
        )}`;
      }

      if (result.contextualInformation.actual) {
        message += `\n${this.utils.EXPECTED_COLOR(
          result.contextualInformation.actual,
        )}`;
      }

      return {
        ...result,
        message: () => message,
      };
    },
  }[matcherKey];

  matchers[matcherKey] = matcher;
});

expect.extend(matchers);

enzymeConfigure({ adapter: new Adapter() });

setOptions({
  name: 'Change',
  url: 'http://change.producement.com',
  downPanelInRight: true,
});

addDecorator(withKnobs);
addDecorator(centered);
addDecorator(themeDecorator);

addDecorator(
  backgrounds([
    { name: 'White', value: '#ffffff', default: true },
    { name: 'Green', value: '#e5f9f3' },
    { name: 'Blue', value: '#083b70' },
    { name: 'Gradient', value: 'linear-gradient(151deg, #19c3ed, #8bf2d3)' },
  ]),
);

const req = require.context('../src', true, /\.story\.spec\.js$/);

function loadStories() {
  require('../src/stories');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
