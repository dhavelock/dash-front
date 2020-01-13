import axios from "axios";
import * as type from "./index";

const ROOT_URL = window.location.href.includes("dashtable.herokuapp.com")
  ? "https://dashtable-core.herokuapp.com"
  : "http://127.0.0.1:8000";

export const authStart = () => {
  return {
    type: type.AUTH_START
  };
};

export const authSuccess = token => {
  return {
    type: type.AUTH_SUCCESS,
    payload: token
  };
};

export const authFail = error => {
  return {
    type: type.AUTH_FAIL,
    payload: error
  };
};

export const authLogin = (username, password) => dispatch => {
  dispatch(authStart());
  const request = axios({
    method: "POST",
    url: `${ROOT_URL}/rest-auth/login/`,
    data: {
      username: username,
      password: password
    },
    headers: {}
  });

  return request
    .then(response => {
      const token = response.data.key;
      dispatch(authSuccess(token));
    })
    .catch(error => {
      dispatch(authFail(error));
    });
};

export const authLogout = () => dispatch => {
  dispatch({
    type: type.AUTH_LOGOUT
  });
};

export const authSignup = (
  username,
  password1,
  password2
) => dispatch => {
  dispatch(authStart());
  const request = axios({
    method: "POST",
    url: `${ROOT_URL}/rest-auth/registration/`,
    data: {
      username: username,
      email: username,
      password1: password1,
      password2: password2
    },
    headers: {}
  });

  return request
    .then(response => {
      const token = response.data.key;

      // Create in backend Profile
      const request = axios({
        method: "POST",
        url: `${ROOT_URL}/account/profile/`,
        data: {},
        headers: {
          Authorization: `Token ${token}`
        }
      });

      return request
        .then(res => {
          dispatch(authSuccess(token));
        })
        .catch(err => {
          dispatch(authFail(err));
        });
    })
    .catch(error => {
      dispatch(authFail(error));
    });
};
