import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './messageSlice';

export default configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});
