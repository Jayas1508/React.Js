import { applyMiddleware, compose, createStore } from "redux";
import {thunk} from "redux-thunk";
import reducer from "./servis/reduser";
const storeapi = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, storeapi(applyMiddleware(thunk)));
export default store;