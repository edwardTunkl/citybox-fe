import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";
import itemReducer from "../reducers/itemReducer";
import requestReducer from '../reducers/requestReducer' 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  user: {
    _id: "",
    name: "",
    surname: "",
    email: "",
    street: "",
    number: "",
    postcode: "",
    city: "",
    rating: "",
    schedule: {
      MoStH: "",
      MoStM: "",
      MoEH: "",
      MoEM: "",
      TuStH: "",
      TuStM: "",
      TuEH: "",
      TuEM: "",
      WeStH: "",
      WeStM: "",
      WeEH: "",
      WeEM: "",
      ThStH: "",
      ThStM: "",
      ThEH: "",
      ThEM: "",
      FrStH: "",
      FrStM: "",
      FrEH: "",
      FrEM: "",
      SaStH: "",
      SaStM: "",
      SaEH: "",
      SaEM: "",
      SuStH: "",
      SuStM: "",
      SuEH: "",
      SuEM: "",
    },
    connectedUsers: [],
    requests: [],
  },
  items: {
    query: "",
    loading: false,
    userItems:[],
    results: []
  },
  requests:{
    incoming: [],
    accepted: []
  }
};

const bigReducer = combineReducers({
  user: userReducer,
  items: itemReducer,
  requests: requestReducer
});


const configureStore = createStore(
  bigReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore