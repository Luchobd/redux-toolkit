import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    characters: [],
    detail: {},
  },
  reducers: {
    getAllCharacters: (state, action) => {
      state.characters = action.payload;
    },
    getCharacterById: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { getAllCharacters, getCharacterById } = characterSlice.actions;

export default characterSlice.reducer;
