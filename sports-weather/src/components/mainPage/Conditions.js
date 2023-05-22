import React from 'react';
import { setConditionData } from '../../redux/features/weatherSlice';
import ukFootballStadiums from '../../APIs/stadiumAPI';

function Conditions({ onConditionChange }) {
    const conditions = ['sunny', 'partly cloudy', 'cloudy', 'raining'];


    return (
        <div className="flex items-center mb-4">
            <select id="conditions" className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-white-700 dark:bg-gray-800 dark:border-white-700 dark:focus:ring-gray-700">
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