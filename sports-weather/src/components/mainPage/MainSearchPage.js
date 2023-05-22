import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCondition } from "../../redux/features/weatherSlice";

import TempratureRange from "./TempratureRange";
import CitiesSelect from "./CitiesSelect";
import Conditions from "./Conditions";
import StadiumList from "./StadiumList";

function MainSearchPage() {
    const [selectedCity, setSelectedCity] = useState('');
    const dispatch = useDispatch();

    const handleCityChange = city => {
        setSelectedCity(city);
    };

    const handleConditionChange = (condition) => {
        dispatch(setCondition(condition));
    };


    return (
        <div>
            <CitiesSelect onCityChange={handleCityChange} />
            <Conditions onConditionChange={handleConditionChange} />
            <StadiumList selectedCity={selectedCity} />
            <section>
            </section>
        </div>
    )
}

export default MainSearchPage;