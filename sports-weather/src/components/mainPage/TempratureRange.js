import React, { useState } from "react";
import { useSelectorm, useDispatch } from "react-redux";
import { addTemperatureData, addWeatherCondition } from "../../redux/features/stadiumSlice";
import { fetchWeatherData } from "../../redux/features/weatherSlice";

import ukFootballStadiums from "../../APIs/stadiumAPI";

function TemperatureRange() {
    const [temperatureRange, setTemperatureRange] = useState("");

    const handleRangeChange = (event) => {
        setTemperatureRange(event.target.value);
    };

    return (
        <div className="flex items-center mb-4">
            <label htmlFor="temperature-range" className="mr-2 text-gray-700 dark:text-gray-300">
                Temperature:
            </label>
            <input
                type="range"
                id="temperature-range"
                min="0"
                max="50"
                step="1"
                value={temperatureRange}
                onChange={handleRangeChange}
                className="w-full"
            />
            <span className="ml-2 text-gray-700 dark:text-gray-300">{temperatureRange}°C</span>
        </div>
    );
}

export default TemperatureRange;