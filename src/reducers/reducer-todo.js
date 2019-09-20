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
      const newListsAdd = [...state.lists];
      for (var i = 0; i < newListsAdd.length; i++) {
        if (newListsAdd[i].id === action.payload.todolist) {
          newListsAdd[i].items.push(action.payload);
          break;
        }
      }
      return {
        ...state,
        lists: newListsAdd
      };

    case type.SHOW_ADD_LIST_MODAL:
      return {
        ...state,
        addListModal: true
      };

    case type.DELETE_TODO_ITEM:
      const newListsDel = [...state.lists];
      for (var j = 0; j < newListsDel.length; j++) {
        if (newListsDel[j].id === action.payload.list.id) {
          newListsDel[j] = action.payload.list;
          break;
        }
      }
      return {
        ...state,
        lists: newListsDel
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
