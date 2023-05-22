import React from "react";
import { useState } from "react";

import TempratureRange from "./TempratureRange";
import CitiesSelect from "./CitiesSelect";
import Conditions from "./Conditions";
import StadiumList from "./StadiumList";

function MainSearchPage() {
    const [selectedCity, setSelectedCity] = useState('');

    const handleCityChange = city => {
        setSelectedCity(city);
    };

    return (
        <div>
            <CitiesSelect onCityChange={handleCityChange} />
            <StadiumList selectedCity={selectedCity} />
            <section>
            </section>
        </div>
    )
}

export default MainSearchPage;