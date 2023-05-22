import React, { useState } from "react";

function TemperatureRange() {
    const [temperatureRange, setTemperatureRange] = useState("");

    const handleRangeChange = (event) => {
        setTemperatureRange(event.target.value);
    };

    return (
        <div>
            <label htmlFor="temperature-range">Select Temperature Range:</label>
            <input
                type="range"
                id="temperature-range"
                min="0"
                max="40"
                step="1"
                value={temperatureRange}
                onChange={handleRangeChange}
            />
            <span>{temperatureRange}°C</span>
        </div>
    );
}

export default TemperatureRange;