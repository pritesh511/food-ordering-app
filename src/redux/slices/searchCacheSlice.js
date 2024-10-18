import { createSlice } from "@reduxjs/toolkit";

const data = {};

const searchCacheSlice = createSlice({
  name: "searchcahce",
  initialState: data,
  reducers: {
    cacheSearchResult: (state, actions) => {
      state = Object.assign(state, actions.payload);
    },
    setEmptySearchResult: (_state, actions) => {
      return actions.payload;
    },
  },
});

export const { cacheSearchResult, setEmptySearchResult } = searchCacheSlice.actions;
export default searchCacheSlice.reducer;
