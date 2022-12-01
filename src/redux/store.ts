import { combineReducers } from "redux";
import { educationReducer } from "./reducers/educationReducer";
import { experienceReducer } from "./reducers/experienceReducer";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({ educationReducer, experienceReducer });

const store = configureStore({
  reducer,
});
export default store;
