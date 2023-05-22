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

        const { current } = weatherResponse.data;
        const { forecast } = forecastResponse.data;

        setTimeout(() => {
            dispatch(setForecast(forecast));
        }, 3 * 60 * 60 * 1000);
        setTimeout(() => {
            dispatch(setTemperature(current.temp_c));
        }, 5 * 60 * 1000);
        setTimeout(() => {
            dispatch(setWindVelocity(current.wind_mph));
        }, 5 * 60 * 1000);
        setTimeout(() => {
            dispatch(setCondition(current.condition.text));
        }, 30 * 60 * 1000);

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