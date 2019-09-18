import * as type from "../actions/index";

const initialState = {
  lists: [],
  addListModal: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_LISTS:
      return {
        ...state,
        lists: action.payload
      };

    case type.FETCH_LIST:
      return {
        ...state
      };

    case type.ADD_TODO_ITEM:
      return {
        ...state,
      }

    case type.SHOW_ADD_LIST_MODAL:
      return {
        ...state,
        addListModal: true
      };

    case type.HIDE_ADD_LIST_MODAL:
      return {
        ...state,
        addListModal: false
      };

    default:
      return state;
  }
}
