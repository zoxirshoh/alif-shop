// redux/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const index = state.findIndex(item => item.id === id);
      if (index >= 0) {
        state.splice(index, 1); // remove from favorites
      } else {
        state.push({ id }); // add to favorites
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
