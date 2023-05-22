import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../../redux/features/weatherSlice';

function Recommendation({ location }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeatherData(location));
    }, [dispatch, location]);

    const { temperature, conditionText, windVelocity } = useSelector((state) => state.weather);



    return (
        <div className='block text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col'>
            <div className='mt-auto'>
                <h1 className='mb-2 text-9xl tracking-tight text-gray-900 dark:text-white'>{temperature}</h1>
                <h2 className='font-normal text-gray-700 dark:text-gray-400'>Recommended Clothing</h2>
            </div>
        </div>
    )
}

export default Recommendation;