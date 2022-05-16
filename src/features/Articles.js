import { createSlice } from "@reduxjs/toolkit";
import { articlesData } from "../data";

export const articleSlice = createSlice({
  name: "articles",
  initialState: { value: articlesData.articles },
  reducers: {
    addArticle: (state, action) => {
      state.value.push(action.payload);
    },
    deleteArticle: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addArticle, deleteArticle } = articleSlice.actions;
export default articleSlice.reducer;
