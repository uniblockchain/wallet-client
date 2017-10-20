import Login from './Login';
import loginReducer from './loginReducer';
import loginSagas from './loginSagas';

export { default as Login } from './Login';
export { default as loginReducer } from './loginReducer';
export { default as loginSagas } from './loginSagas';

export default { Login, loginReducer, loginSagas };
