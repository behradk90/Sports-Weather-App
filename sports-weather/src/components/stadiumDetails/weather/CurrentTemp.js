import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../../redux/features/weatherSlice';

function CurrentTemprature() {
    const dispatch = useDispatch();
    const location = 'london'

    useEffect(() => {
        dispatch(fetchWeatherData(location));
    }, [dispatch, location]);

    const temperature = useSelector((state) => state.weather.temperature);

    return (
        <div>
            <h1>{temperature}</h1>
            <h2>Current Temperature</h2>
        </div>
    )
}

export default CurrentTemprature;