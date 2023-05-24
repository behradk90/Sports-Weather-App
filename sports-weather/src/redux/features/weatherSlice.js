import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        temperature: null,
        forecast: null,
        windVelocity: null,
        conditionText: null,
        conditionIcon: null,
    },
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setTemperature: (state, action) => {
            state.temperature = action.payload;
        },
        setForecast: (state, action) => {
            state.forecast = action.payload;
        },
        setWindVelocity: (state, action) => {
            state.windVelocity = action.payload;
        },
        setConditionData: (state, action) => {
            const { text, icon } = action.payload;
            state.conditionText = text;
            state.conditionIcon = icon;
        },
    },
});

export const fetchWeatherData = (location) => async (dispatch) => {
    try {
        const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const weatherResponse = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${location}&aqi=no`);
        const forecastResponse = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${location}&days=2&aqi=no&alerts=no`)

        const { current } = weatherResponse.data;
        const { forecast } = forecastResponse.data;

        dispatch(setLocation(current.location));
        dispatch(setForecast(forecast.forecastday[1]));
        dispatch(setTemperature(current.temp_c));
        dispatch(setConditionData({
            text: current.condition.text,
            icon: current.condition.icon,
        }));
        dispatch(setWindVelocity(current.wind_mph));
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
};

export const {
    setLocation,
    setTemperature,
    setForecast,
    setWindVelocity,
    setConditionData,
} = weatherSlice.actions;

export default weatherSlice.reducer;