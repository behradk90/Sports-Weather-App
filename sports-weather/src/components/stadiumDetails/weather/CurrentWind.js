import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../../redux/features/weatherSlice';

function CurrentWind() {
    const dispatch = useDispatch();
    const location = 'london'

    useEffect(() => {
        dispatch(fetchWeatherData(location));
    }, [dispatch, location]);

    const windVelocity = useSelector((state) => state.weather.windVelocity);

    return (
        <div>
            <h1>{windVelocity}</h1>
            <h2>Wind (mph)</h2>
        </div>
    )
}

export default CurrentWind;