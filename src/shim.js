// get rid of warnings in in "react-scripts": "1.0.14"
// TODO: remove after "react-scripts": "1.0.14"
global.requestAnimationFrame = cb => {
  setTimeout(cb, 0);
};
