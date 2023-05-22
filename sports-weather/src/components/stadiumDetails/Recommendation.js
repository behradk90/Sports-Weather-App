import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../redux/features/weatherSlice';

function Recommendation({ location }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeatherData(location));
    }, [dispatch, location]);

    const { temperature, conditionText, windVelocity } = useSelector((state) => state.weather);

    const recommendationConditions = (t, c, w) => {
        if (
            t > 25 &&
            w > 10 &&
            w < 15 &&
            (c.toLowerCase() === 'sunny' || c.toLowerCase() === 'clear')
        ) {
            return 'T Shirt';
        }
        if (
            t > 17 &&
            t < 25 &&
            w > 10 &&
            (c.toLowerCase() === 'partly cloudy' || c.toLowerCase() === 'cloudy')
        ) {
            return 'Light Jacket';
        }
        if (
            t > 5 &&
            t < 17 &&
            w > 10 &&
            (c.toLowerCase() === 'partly cloudy' || c.toLowerCase() === 'cloudy')
        ) {
            return 'Heavy Jacket';
        }
        if (t > 5 &&
            t < 17 &&
            w > 10 &&
            c.toLowerCase() === 'raining'
        ) {
            return 'Heavy Jacket With Umbrella';
        }
        return 'Light Jacket'
    };


    return (
        <div className=' block text-center max-w-x4 w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col mt-6'>
            <div className='mt-auto'>
                <h2 className='font-normal text-gray-700 dark:text-gray-400'>Recommended Clothing</h2>
                <h1 className='mb-2 text-8xl tracking-tight text-gray-900 dark:text-white'>{recommendationConditions(temperature, conditionText, windVelocity)}</h1>
            </div>
        </div>
    )
}

export default Recommendation;