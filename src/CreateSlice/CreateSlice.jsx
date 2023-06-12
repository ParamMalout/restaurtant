import { createSlice, current } from "@reduxjs/toolkit";
export const countValue = createSlice({
  name: "counter",
  initialState: { value: [] },
  reducers: {
    ValueUpdate: (state, action) => {
      return {
        ...state,
        value: [...state.value, action.payload],
      };
    },
    FilterConditions: (state, action) => {
      let newArr = state.value.filter((ele, i) => i !== action.payload);
      return {
        ...state,
        value: newArr,
      };
    },
  },
});
export const { ValueUpdate, FilterConditions } = countValue.actions;
export default countValue.reducer;
