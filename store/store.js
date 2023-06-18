import { configureStore } from '@reduxjs/toolkit';
import bookedSlice from '../redux/bookedHotel/bookedSlice';

export const store = configureStore({
  reducer: {
    booking: bookedSlice,
  },
});
