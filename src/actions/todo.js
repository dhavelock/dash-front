import axios from "axios";
import * as type from "./index";

const ROOT_URL =
  window.location.href === "dashtable.herokuapp.com"
    ? "https://dashtable-core.herokuapp.com/"
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
