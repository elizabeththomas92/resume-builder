import { combineReducers } from "redux";
import { educationReducer } from "./reducers/educationReducer";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({ educationReducer });

const store = configureStore({
  reducer,
});
export default store;
