import React from "react";
import { useParams } from "react-router-dom";

import ukFootballStadiums from "../../APIs/stadiumAPI";

import { Link } from "react-router-dom";

import StadiumPicture from './stadium/StadiumInfo'
import CurrentWind from './weather/CurrentWind'
import CurrentForecast from './weather/CurrentForecast'
import CurrentCondition from './weather/CurrentCondition'
import CurrentTemp from './weather/CurrentTemp'

function StadiumDetails() {
    const { id } = useParams()

    const stadium = ukFootballStadiums.find(stadium => stadium.id === Number(id));

    const { name, imageUrl, location } = stadium;

    return (
        <div className="p-4">
            <div className="flex justify-end">
                <Link to={'/'} class="mb-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" >Search</Link>
            </div>
            <div className="flex space-x-4 mt-12">
                <StadiumPicture image={imageUrl} name={name} />
                <CurrentTemp location={location} />
                {/* <CurrentForecast location={location} /> */}
                <CurrentWind location={location} />
                <CurrentCondition location={location} />
            </div>
        </div>
    )
}

export default StadiumDetails;