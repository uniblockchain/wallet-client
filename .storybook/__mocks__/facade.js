export const storiesOf = function storiesOf() {
  var api = {};
  api.add = (name, func) => {
    func();
    return api;
  };
  api.addWithInfo = (name, func) => {
    func();
    return api;
  };
  api.addDecorator = () => {
    return api;
  };
  return api;
};
export const action = () => {};

export const linkTo = () => {};

export const specs = spec => {
  spec();
};

export const select = () => {};
export const boolean = () => {};

export const describe = jasmine.currentEnv_.describe;
export const it = jasmine.currentEnv_.it;
export const beforeEach = jasmine.currentEnv_.beforeEach;
