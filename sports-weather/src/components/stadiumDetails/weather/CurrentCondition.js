import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../../redux/features/weatherSlice';

function CurrentTemperature({ location }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeatherData(location));
    }, [dispatch, location]);

    const conditionText = useSelector((state) => state.weather.conditionText);
    const conditionIcon = useSelector((state) => state.weather.conditionIcon);

    return (
        <div>
            <h1>{conditionText}</h1>
            <img src={conditionIcon} alt={conditionText} />
            <h2>Current Condition</h2>
        </div>
    );
}

export default CurrentTemperature;