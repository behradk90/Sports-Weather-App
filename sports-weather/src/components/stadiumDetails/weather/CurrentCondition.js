import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../../redux/features/weatherSlice';

function CurrentTemprature({ location }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeatherData(location));
    }, [dispatch, location]);

    const condition = useSelector((state) => state.weather.condition);

    return (
        <div>
            <h1>{condition}</h1>
            <h2>Current Condtion</h2>
        </div>
    )
}

export default CurrentTemprature;