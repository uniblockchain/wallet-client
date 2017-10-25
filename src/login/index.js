import Login from './Login';
import loginReducer from './loginReducer';
import loginSagas from './loginSagas';
import loginActions from './loginActions';

export { default as Login } from './Login';
export { default as loginReducer } from './loginReducer';
export { default as loginSagas } from './loginSagas';
export { default as loginActions } from './loginActions';

export default { Login, loginReducer, loginSagas, loginActions };
