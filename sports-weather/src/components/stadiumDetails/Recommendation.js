import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../redux/features/weatherSlice';

import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

function Recommendation({ location }) {
    const dispatch = useDispatch();
    const gf = new GiphyFetch('B9X0Gl3rxJ97pVSevIvVxAtDbdlv5DzZ');


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

    const recommended = recommendationConditions(temperature, conditionText, windVelocity)
    const fetchGifs = (offset) => gf.search(recommended, { offset: 0, limit: 1 })

    return (
        <div className=' block text-center max-w-x4 w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center mt-6'>
            <div className='mt-auto'>
                <h2 className='font-normal text-gray-700 dark:text-gray-400'>Recommended Clothing</h2>
                <h1 className='mb-2 text-8xl tracking-tight text-gray-900 dark:text-white'>{recommended}</h1>
                <div className="mt-14">
                    <Grid className='' width={800} columns={1} gutter={10} fetchGifs={fetchGifs} key={recommended} />
                </div>
            </div>
        </div>
    )
}

export default Recommendation;