import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        temperature: null,
        forecast: null,
        windVelocity: null,
        condition: null,
    },
    reducers: {
        setTemperature: (state, action) => {
            state.temperature = action.payload;
        },
        setForecast: (state, action) => {
            state.forecast = action.payload;
        },
        setWindVelocity: (state, action) => {
            state.windVelocity = action.payload;
        },
        setCondition: (state, action) => {
            state.condition = action.payload;
        },
    },
});

export const {
    setTemperature,
    setForecast,
    setWindVelocity,
    setCondition,
} = weatherSlice.actions;

export const fetchWeatherData = () => async (dispatch) => {
    try {
        const response = await axios.get('https://api.weatherapi.com/v1/e2aca790b1144612b83110848232105');
        const { temperature, forecast, wind_velocity, condition } = response.data;

        dispatch(setTemperature(temperature));
        dispatch(setForecast(forecast));
        dispatch(setWindVelocity(wind_velocity));
        dispatch(setCondition(condition));
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
};

export default weatherSlice.reducer;