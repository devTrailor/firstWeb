import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import { projectReducer } from "./projectReduer";

export const store = configureStore({ reducer: projectReducer });