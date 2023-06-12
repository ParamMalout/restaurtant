import { combineReducers } from "@reduxjs/toolkit";
import countValue from "../CreateSlice/CreateSlice";
const rootReducer = combineReducers({
  countValue,
});
export default rootReducer;
