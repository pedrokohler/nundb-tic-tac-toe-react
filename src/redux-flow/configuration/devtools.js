/* eslint-disable no-underscore-dangle */
const devtools = () => (window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x);
/* eslint-enable */

export default devtools;
