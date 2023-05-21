import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
    data: null,
    isLoading: false,
    error: null,
};

// Create an asynchronous thunk for fetching weather data
export const fetchWeatherData = createAsyncThunk(
    'weather/fetchWeatherData',
    async (city) => {
        try {
            const response = await axios.get(
                `https://api.weatherapi.com/v1/current.json?key=e2aca790b1144612b83110848232105&q=${city}`
            );
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch weather data');
        }
    }
);

// Create the weather slice
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchWeatherData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default weatherSlice.reducer;