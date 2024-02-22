import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    filterByName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { filterByName } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
