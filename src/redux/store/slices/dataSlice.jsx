// src/features/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action to fetch data from API
export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products'); 
    const data = await response.json();
    return data;
  }
);

// Create a slice
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; 
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
