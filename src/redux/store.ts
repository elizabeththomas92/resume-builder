import { combineReducers } from "redux";
import { educationReducer } from "./reducers/educationReducer";
import { experienceReducer } from "./reducers/experienceReducer";
import { introductionReducer } from "./reducers/introductionReducer";
import { resumeReducer } from "./reducers/resumeReducer";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  educationReducer,
  experienceReducer,
  introductionReducer,
  resumeReducer,
});

const store = configureStore({
  reducer,
});
export default store;
