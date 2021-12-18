import {
 SET_IMCOMING_REQUESTS,
 SET_ACCEPTED_REQUESTS
} from "../actions";
import { initialState } from "../store";

const requestReducer = (state = initialState.requests, action) => {
  switch (action.type) {
    case SET_IMCOMING_REQUESTS:
      return {
        ...state,
        incoming: [action.payload],
      };
    case SET_ACCEPTED_REQUESTS:
      return {
        ...state,
        accepted: [action.payload],
      };
    default:
      return state;
  }
};
export default requestReducer