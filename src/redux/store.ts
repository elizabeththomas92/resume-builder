import { combineReducers } from "redux";
import { educationReducer } from "./reducers/educationReducer";
import { experienceReducer } from "./reducers/experienceReducer";
import { introductionReducer } from "./reducers/introductionReducer";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  educationReducer,
  experienceReducer,
  introductionReducer,
});

const store = configureStore({
  reducer,
});
export default store;
