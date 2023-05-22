import React from "react";
import { useParams } from "react-router-dom";

import ukFootballStadiums from "../../APIs/stadiumAPI";

import { Link } from "react-router-dom";

import StadiumName from "./stadium/StadiumName";
import StadiumPicture from './stadium/StadiumPicture'
import CurrentWind from './weather/CurrentWind'
import CurrentForecast from './weather/CurrentForecast'
import CurrentCondition from './weather/CurrentCondition'
import CurrentTemp from './weather/CurrentTemp'

function StadiumDetails() {
    const { id } = useParams()

    const stadium = ukFootballStadiums.find(stadium => stadium.id === Number(id));

    const { name, imageUrl, location } = stadium;

    console.log(id)
    return (
        <div>
            <Link to={'/'}>Back to Search</Link>
            <StadiumName name={name} />
            <StadiumPicture image={imageUrl} />
            <CurrentTemp location={location} />
            <CurrentForecast location={location} />
            <CurrentWind location={location} />
            <CurrentCondition location={location} />
        </div>
    )
}

export default StadiumDetails;