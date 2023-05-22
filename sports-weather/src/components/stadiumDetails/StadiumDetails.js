import React from "react";
import { useParams } from "react-router-dom";

import ukFootballStadiums from "../../APIs/stadiumAPI";

import { Link } from "react-router-dom";

import StadiumInfo from './stadium/StadiumInfo'
import CurrentWind from './weather/CurrentWind'
// import CurrentForecast from './weather/CurrentForecast'
import CurrentCondition from './weather/CurrentCondition'
import CurrentTemp from './weather/CurrentTemp'
import Recommendation from "./Recommendation";

function StadiumDetails() {
    const { id } = useParams()

    const stadium = ukFootballStadiums.find(stadium => stadium.id === Number(id));

    const { name, imageUrl, location } = stadium;

    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                <h1 className="p-4 mb-4 text-3xl text-center text-gray-900 dark:text-white md:text-5xl lg:text-4xl">{name}</h1>
                <Link to={'/'} className="mb-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 self-center">Search</Link>
            </div>
            <div className="flex space-x-4 mt-2">
                <StadiumInfo image={imageUrl} name={name} location={location} />
                <CurrentTemp location={location} />
                {/* <CurrentForecast location={location} /> */}
                <CurrentWind location={location} />
                <CurrentCondition location={location} />
            </div>
            <div>
                <Recommendation />
            </div>
        </div>
    )
}

export default StadiumDetails;