import { createSlice } from '@reduxjs/toolkit';
import getGreetings from './messageThunk';

const initialState = {
  greeting: '',
  loading: false,
  error: null,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGreetings.pending, (state) => ({ ...state, loading: true }))
      .addCase(getGreetings.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        error: null,
        greeting: action.payload,
      }))
      .addCase(getGreetings.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default greetingsSlice.reducer;
