import axios from "axios";
import * as type from "./index";

const ROOT_URL = window.location.href.includes("dashtable.herokuapp.com")
  ? "https://dashtable-core.herokuapp.com"
  : "http://127.0.0.1:8000";

export const fetchCalendarUrl = () => (dispatch, getState) => {
  const { token } = getState().auth;

  const request = axios({
    method: "GET",
    url: `${ROOT_URL}/account/calendar/`,
    headers: {
      Authorization: `Token ${token}`
    }
  });

  return request
    .then(res => {
      dispatch({
        type: type.SET_CALENDAR_URL,
        payload: res.data.calendar_url
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const setCalendarUrl = calendar => (dispatch, getState) => {
  const { token } = getState().auth;

  const request = axios({
    method: "POST",
    url: `${ROOT_URL}/account/calendar/`,
    data: {
      calendar_url: calendar
    },
    headers: {
      Authorization: `Token ${token}`
    }
  });

  return request
    .then(res => {
      dispatch({
        type: type.SET_CALENDAR_URL,
        payload: res.data.calendar_url
      });
    })
    .catch(err => {
      console.log(err);
    });
};