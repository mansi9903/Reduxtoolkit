import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {},
};
export const UserinfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    postUserInfo: (state, {payload}) => {
    //   console.log("action",payload);
      state.data=payload
    },
  },
});

export const { postUserInfo } = UserinfoSlice.actions;

export default UserinfoSlice.reducer;
