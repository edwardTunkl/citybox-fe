import {
  SEARCH_CLEANUP,
  SEARCH_LOADING,
  SET_SEARCH,
  SET_SEARCH_ITEMS,
  SET_USER_ITEMS,
} from "../actions";
import { initialState } from "../store";

const itemReducer = (state = initialState.items, action) => {
  switch (action.type) {
    case SET_USER_ITEMS:
      return {
        ...state,
        userItems: [action.payload],
      };
    case SET_SEARCH_ITEMS:
      return {
        ...state,
        results: [action.payload],
      };
    case SET_SEARCH:
      return {
        ...state,
        query: action.payload,
      };
    case SEARCH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SEARCH_CLEANUP:
      return {
        ...state,
        query: "",
        results: [],
      };
    default:
      return state;
  }
};

export default itemReducer;
