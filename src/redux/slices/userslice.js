import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../../utils/userMockData";

const initialState = {
  userdata: userData,
};

const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(state);
    },
  },
});

export default userslice.reducer;
