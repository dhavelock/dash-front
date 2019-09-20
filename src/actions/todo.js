import axios from "axios";
import * as type from "./index";

const ROOT_URL = window.location.href.includes("dashtable.herokuapp.com")
  ? "https://dashtable-core.herokuapp.com"
  : "http://127.0.0.1:8000";

export const fetchLists = values => dispatch => {
  const request = axios({
    method: "GET",
    url: `${ROOT_URL}/todo/lists/`,
    data: values,
    headers: {}
  });

  return request
    .then(response => {
      dispatch({
        type: type.FETCH_LISTS,
        payload: response.data.lists
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const addTodoItem = values => dispatch => {
  const request = axios({
    method: "POST",
    url: `${ROOT_URL}/todo/item/`,
    data: values,
    headers: {}
  });

  return request
    .then(response => {
      console.log(response.data);
      dispatch({
        type: type.ADD_TODO_ITEM,
        payload: response.data.item
      });
      dispatch({
        type: type.HIDE_ADD_LIST_MODAL
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const deleteTodoItem = values => dispatch => {
  const request = axios({
    method: "DELETE",
    url: `${ROOT_URL}/todo/item/`,
    data: values,
    headers: {}
  });

  return request
    .then(response => {
      dispatch({
        type: type.DELETE_TODO_ITEM,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const showAddListModal = () => dispatch => {
  dispatch({
    type: type.SHOW_ADD_LIST_MODAL
  });
};

export const hideAddListModal = () => dispatch => {
  dispatch({
    type: type.HIDE_ADD_LIST_MODAL
  });
};

export const toggleView = () => dispatch => {
  dispatch({
    type: type.TOGGLE_VIEW
  });
};

