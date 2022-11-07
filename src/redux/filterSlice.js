import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: filterInitialState,
  },
  reducers: {
    updFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { updFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
