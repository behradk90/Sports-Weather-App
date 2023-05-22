import React from "react";
import { useParams } from "react-router-dom";

import ukFootballStadiums from "../../APIs/stadiumAPI";

import { Link } from "react-router-dom";

import StadiumPicture from './stadium/StadiumPicture'
import CurrentWind from './weather/CurrentWind'
import CurrentForecast from './weather/CurrentForecast'
import CurrentCondition from './weather/CurrentCondition'
import CurrentTemp from './weather/CurrentTemp'

function StadiumDetails() {
    const { id } = useParams()

    const stadium = ukFootballStadiums.find(stadium => stadium.id === Number(id));

    const { name, imageUrl, location } = stadium;

    return (
        <div>
            <Link to={'/'} >Search</Link>
            <StadiumPicture image={imageUrl} name={name} />
            <CurrentTemp location={location} />
            <CurrentForecast location={location} />
            <CurrentWind location={location} />
            <CurrentCondition location={location} />
        </div>
    )
}

export default StadiumDetails;