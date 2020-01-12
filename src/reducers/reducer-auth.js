import * as type from "../actions/index";

const initialState = {
  token: null,
  error: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case type.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true
      };

    case type.AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null,
        loading: false
      };

    case type.AUTH_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case type.AUTH_LOGOUT:
      return {
        ...state,
        token: null
      };

    default:
      return state;
  }
}
