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

export const fetchWeatherData = (location) => async (dispatch) => {
    try {
        const weatherResponse = await axios.get(`https://api.weatherapi.com/v1/current.json?key=e2aca790b1144612b83110848232105&q=${location}&aqi=no`);
        const forecastResponse = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=e2aca790b1144612b83110848232105&q=${location}&days=1&aqi=no&alerts=no`)

        const { current, location: { name } } = weatherResponse.data;
        const { forecast } = forecastResponse.data;

        dispatch(setForecast(current.));
        dispatch(setTemperature(current.temp_c));
        dispatch(setCondition(current.condition.text));
        dispatch(setWindVelocity(current.wind_kph));
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
};

export const {
    setTemperature,
    setForecast,
    setWindVelocity,
    setCondition,
} = weatherSlice.actions;

export default weatherSlice.reducer;