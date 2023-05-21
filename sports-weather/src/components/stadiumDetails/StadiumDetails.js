import React from "react";

import StadiumName from "./stadium/StadiumName";
import StadiumPicture from './stadium/StadiumPicture'
import CurrentWind from './weather/CurrentWind'
import CurrentForecast from './weather/CurrentForecast'
import CurrentCondition from './weather/CurrentCondition'
import CurrentTemp from './weather/CurrentTemp'

function StadiumDetails() {
    return (
        <div>
            <StadiumName />
            <StadiumPicture />
            <CurrentTemp />
            <CurrentForecast />
            <CurrentWind />
            <CurrentCondition />
        </div>
    )
}

export default StadiumDetails;