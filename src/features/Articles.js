import { createSlice } from "@reduxjs/toolkit";
import { articlesData } from "../data";

export const articleSlice = createSlice({
  name: "articles",
  initialState: { value: articlesData.articles },
  reducers: {
    addArticle: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addArticle } = articleSlice.actions;
export default articleSlice.reducer;
