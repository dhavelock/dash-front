import * as type from "../actions/index";

const initialState = {
  lists: []
};

export default function(state = initialState, action) {
  switch (action.type) {

    case type.FETCH_LISTS:
      return {
        ...state,
        lists: action.payload
      }

    case type.FETCH_LIST:
      return {
        ...state
      }

    default:
      return state
  }
}