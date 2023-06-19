import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nameHotel: '',
  bookedHotel: [],
};

export const bookedSlide = createSlice({
  name: 'booking',
  initialState: initialState,
  reducers: {
    addHotel: (state, action) => {
      state.bookedHotel.unshift(action.payload);
    },
    addNameHotel: (state, action) => {
      state.nameHotel = action.payload;
    },
  },
});

export const { addHotel, addNameHotel } = bookedSlide.actions;

export default bookedSlide.reducer;
