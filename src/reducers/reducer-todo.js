import * as type from "../actions/index";

const initialState = {
  lists: [],
  addListModal: 0,
  view: false
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

    case type.ADD_LIST:
      var newList = [...state.lists];
      newList.push(action.payload.list);

      return {
        ...state,
        lists: newList
      };

    case type.DELETE_LIST:
      var delList = [...state.lists];
      for (var k = 0; k < delList.length; k++) {
        if (delList[k].id === action.payload) {
          delList.splice(k, 1);
          break;
        }
      }

      return {
        ...state,
        lists: delList
      }
      
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
        addListModal: action.payload
      };

    case type.DELETE_TODO_ITEM:
      var newListsDel = [...state.lists];

      for (var j = 0; j < state.lists.length; j++) {
        if (newListsDel[j].id === action.payload.list.id) {
          newListsDel[j].items = action.payload.list.items.slice();
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
        addListModal: 0
      };

    case type.TOGGLE_VIEW:
      return {
        ...state,
        view: !state.view
      };

    default:
      return state;
  }
}
