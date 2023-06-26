import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../../utils/userMockData";

const initialState = {
  userdata: userData,
  currentLoginUser: null,
};

const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userdata.push(action?.payload);
    },
    setCurrentUser: (state, action) => {
      const userIndex = state?.userdata?.findIndex(
        (user) => user?.email === action?.payload?.email
      );
      state.currentLoginUser = state?.userdata[userIndex];
    },
  },
});

export const { addUser, setCurrentUser } = userslice.actions;

export default userslice.reducer;
