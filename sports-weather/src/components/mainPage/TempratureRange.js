import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherData } from "../../redux/features/weatherSlice";
import ukFootballStadiums from "../../APIs/stadiumAPI";

function TemperatureRange({ onTemperatureChange }) {
    const dispatch = useDispatch();
    const cities = [...new Set(ukFootballStadiums.map(stadium => stadium.location))];
    const weatherData = useSelector((state) => state.weather);
    // console logging weatherData here will provide me with a full list
    // of weather objects fetched from the slice. However calling weatherData
    // within the function tempRangeFinder only returns a single object
    // Main reason for hitting the wall on this feature
    // console.log(weatherData)
    const [temperatureRange, setTemperatureRange] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        cities.forEach((location) => {
            dispatch(fetchWeatherData(location));
        });
    };

    // Key function for filtering by temprature range
    const tempRangeFinder = () => {
        console.log(temperatureRange);
        // Empty array to fill with locations that meet the conditional
        let results = [];
        // Loop over weatherData
        for (let i = 0; i < weatherData.length; i++) {
            // create a variable from the weatherData.temprature field
            const temperature = weatherData[i].temperature;
            // Conditional for filter criteria, anything equal to
            // or less than tempratureRange state
            if (temperature <= temperatureRange) {
                console.log(weatherData[i]);
                // Push the weatherData item to the results array
                results.push(weatherData[i].location);
            }
        }
        // produces an empty array
        return results;
        // console.log(results);
        // use the array of results to then filter the 
        // ukFootballStadiums array

    };

    const handleRangeChange = (event) => {
        setTemperatureRange(event.target.value);
    };

    useEffect(() => {
        tempRangeFinder();
    }, [temperatureRange]);

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