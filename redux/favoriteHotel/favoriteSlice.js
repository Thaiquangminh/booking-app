import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteHotels: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialState,
  reducers: {
    addFavoriteHotel: (state, action) => {
      state.favoriteHotels.unshift(action.payload);
    },
    removeFavoriteHotel: (state, action) => {
      state.favoriteHotels = state.favoriteHotels.filter(
        (hotel) => hotel.id !== action.payload
      );
    },
  },
});

export const { addFavoriteHotel, removeFavoriteHotel } = favoriteSlice.actions;
export default favoriteSlice.reducer;
