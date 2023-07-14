import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export default createAsyncThunk(
  'greetings/setGreetings',
  async (name, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get('http://127.0.0.1:3000/api/messages');
      console.log(data);
      return fulfillWithValue(data.greeting);
    } catch (error) {
      return rejectWithValue({ ...error.response.data.error });
    }
  },
);
