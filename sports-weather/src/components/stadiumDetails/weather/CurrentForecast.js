import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../../redux/features/weatherSlice';


// Component left until I can discern what amount of forecast the challenge required
function CurrentForecast({ location }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeatherData(location));
    }, [dispatch, location]);

    const forecast = useSelector((state) => state.weather.forecast);

    return (
        <div>
            <h1>{forecast}</h1>
            <h2>Forecast</h2>
        </div>
    )
}

export default CurrentForecast;