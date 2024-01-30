import {
  GET_MENU_ITEMS,
  GET_MENUS,
  DELETE_MENU_ITEM,
  GET_MENU_ITEM,
} from "../actions/types";

const initialState = {
  menuItems: [],
  menuItem: {},
};

export default function MenuItemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MENU_ITEMS:
      return {
        ...state,
        menuItems: action.payload,
      };
    case GET_MENU_ITEM:
      return {
        ...state,
        menuItem: action.payload,
      };
    case DELETE_MENU_ITEM:
      return {
        ...state,
        menuItems: state.menuItems.filter((menuItem) => menuItem.id !== action.payload),
      };
    default:
      return state;
  }
}
