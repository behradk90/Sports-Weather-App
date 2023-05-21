import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './slices/weatherSlice';
import stadiumSlice from './slices/stadiumSlice'

const store = configureStore({
    reducer: {
        weather: weatherSlice,
        stadium: stadiumSlice
    },
});

export default store;