import * as type from "../actions/index";

const initialState = {
  calendarUrl: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case type.SET_CALENDAR_URL:
      return {
        ...state,
        calendarUrl: action.payload
      };

    default:
      return state;
  }
}