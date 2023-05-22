import React from 'react';
import { setConditionData } from '../../redux/features/weatherSlice';
import ukFootballStadiums from '../../APIs/stadiumAPI';

function Conditions({ onConditionChange }) {
    const conditions = ['sunny', 'partly cloudy', 'cloudy', 'raining'];


    return (
        <div>
            <label htmlFor="conditions">Select Conditions:</label>
            <select id="conditions" >
                <option value="">All</option>
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