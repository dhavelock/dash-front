import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import storage from "redux-persist/lib/storage";

import * as type from "../actions"

import TodoReducer from "./reducer-todo";
import AuthReducer from "./reducer-auth";
import AccountReducer from "./reducer-account";

// export default combineReducers({
//   form: formReducer,
//   todo: TodoReducer,
//   auth: AuthReducer,
//   account: AccountReducer
// });

const appReducer = combineReducers({
  form: formReducer,
  todo: TodoReducer,
  auth: AuthReducer,
  account: AccountReducer
})

export const rootReducer = (state, action) => {
  if (action.type === type.AUTH_LOGOUT) {
    storage.removeItem('persist:root')
    state = undefined;
}

  return appReducer(state, action)
}