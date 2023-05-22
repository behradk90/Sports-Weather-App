import React from 'react';
import ukFootballStadiums from '../../APIs/stadiumAPI';

function CitySelect({ onCityChange }) {
    const cities = [...new Set(ukFootballStadiums.map(stadium => stadium.location))];

    const handleCityChange = event => {
        const selectedCity = event.target.value;
        onCityChange(selectedCity);
    };

    const getStadiumCount = (city) => {
        const count = ukFootballStadiums.filter(stadium => stadium.location === city).length;
        return count > 0 ? ` (${count})` : '';
    };

    return (
        <div className="flex items-center mb-4">
            <select
                id="city"
                onChange={handleCityChange}
                className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-white-700 dark:bg-gray-800 dark:border-white-700 dark:focus:ring-gray-700"
            >
                <option value="">City</option>
                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                        {/* Add additional content here if needed */}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CitySelect;