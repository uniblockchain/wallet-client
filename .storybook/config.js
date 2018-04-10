import { addDecorator, configure } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';
import { configure as viewportConfigure } from '@storybook/addon-viewport';
import { configure as enzymeConfigure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import enzymeMatchers from 'enzyme-matchers';
import 'change-bootstrap/dist/css/bootstrap-material-design.css';
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
  url: 'https://getchange.com',
  downPanelInRight: true,
});

addDecorator(withKnobs);
addDecorator(centered);

viewportConfigure({ defaultViewport: 'iphone6' });

const req = require.context('../src', true, /\.story\.spec\.js$/);

function loadStories() {
  require('../src/stories');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
