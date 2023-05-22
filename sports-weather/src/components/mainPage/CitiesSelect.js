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
        <div>
            <label htmlFor="city">Select City:</label>
            <select id="city" onChange={handleCityChange}>
                <option value="">All</option>
                {cities.map(city => (
                    <option key={city} value={city}>
                        {city}
                        {getStadiumCount(city)}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CitySelect;