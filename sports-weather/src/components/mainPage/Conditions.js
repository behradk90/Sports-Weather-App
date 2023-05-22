import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCondition } from '../../redux/features/weatherSlice';
import ukFootballStadiums from '../../APIs/stadiumAPI';

function Conditions({ onConditionChange }) {
    const conditions = ['sunny', 'partly cloudy', 'cloudy', 'raining'];
    const currentWeatherCondition = useSelector((state) => state.weather.condition);
    const dispatch = useDispatch();

    const handleConditionChange = (event) => {
        const selectedCondition = event.target.value;
        onConditionChange(selectedCondition);
    };

    const filterStadiumsByCondition = () => {
        // Perform any additional actions with the selected condition
        console.log(currentWeatherCondition);
        // You can dispatch an action to update the condition in the weatherSlice
        dispatch(setCondition(currentWeatherCondition));
    };

    return (
        <div>
            <label htmlFor="conditions">Select Conditions:</label>
            <select id="conditions" onChange={handleConditionChange}>
                <option value="">All</option>
                {conditions.map((condition) => (
                    <option key={condition} value={condition}>
                        {condition}
                    </option>
                ))}
            </select>
            <button onClick={filterStadiumsByCondition}>Filter</button>
        </div>
    );
}

export default Conditions;