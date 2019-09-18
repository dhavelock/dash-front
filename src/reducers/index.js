import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form'

import TodoReducer from "./reducer-todo";

export default combineReducers({
  form: formReducer,
  todo: TodoReducer
});
