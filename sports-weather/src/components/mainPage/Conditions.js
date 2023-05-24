import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../redux/features/weatherSlice';
import ukFootballStadiums from '../../APIs/stadiumAPI';

function Conditions({ onConditionChange }) {
    const conditions = ['sunny', 'partly cloudy', 'cloudy', 'raining'];

    const dispatch = useDispatch();
    const cities = [...new Set(ukFootballStadiums.map(stadium => stadium.location))];
    const weatherData = useSelector((state) => state.weather);
    const [conditionChange, setConditionChange] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        cities.forEach((location) => {
            dispatch(fetchWeatherData(location));
        });
    };

    const conditionChanger = () => {
        console.log(conditionChange);
    };

    const handleConditionChange = (event) => {
        setConditionChange(event.target.value);
    };

    useEffect(() => {
        conditionChanger();
    }, [conditionChange]);

    return (
        <div className="flex items-center mb-4">
            <select
                id="conditions"
                className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-white-700 dark:bg-gray-800 dark:border-white-700 dark:focus:ring-gray-700"
                onChange={handleConditionChange}
            >
                <option value="">Conditions</option>
                {conditions.map((condition) => (
                    <option key={condition} value={condition}>
                        {condition}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Conditions;