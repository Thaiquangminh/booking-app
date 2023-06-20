import { configureStore } from '@reduxjs/toolkit';
import bookedSlice from '../redux/bookedHotel/bookedSlice';
import favoriteSlice from '../redux/favoriteHotel/favoriteSlice';

export const store = configureStore({
  reducer: {
    booking: bookedSlice,
    favorite: favoriteSlice,
  },
});
