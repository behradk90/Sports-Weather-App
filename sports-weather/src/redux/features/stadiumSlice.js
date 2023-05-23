import { createSlice } from '@reduxjs/toolkit';

const stadiumSlice = createSlice({
    name: 'stadiums',
    initialState: [],
    reducers: {
        addTemperatureData(state, action) {
            const { stadiumId, temperatureData } = action.payload;
            const stadium = state.find((stadium) => stadium.id === stadiumId);
            if (stadium) {
                stadium.temperatureData = temperatureData;
            }
        },
        addWeatherCondition(state, action) {
            const { stadiumId, weatherCondition } = action.payload;
            const stadium = state.find((stadium) => stadium.id === stadiumId);
            if (stadium) {
                stadium.weatherCondition = weatherCondition;
            }
        },
    },
});

export const { addTemperatureData, addWeatherCondition } = stadiumSlice.actions;
export default stadiumSlice.reducer;