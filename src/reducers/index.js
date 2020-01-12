import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import TodoReducer from "./reducer-todo";
import AuthReducer from "./reducer-auth";
import AccountReducer from "./reducer-account";

export default combineReducers({
  form: formReducer,
  todo: TodoReducer,
  auth: AuthReducer,
  account: AccountReducer
});
