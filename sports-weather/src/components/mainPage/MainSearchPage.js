import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setConditionData } from "../../redux/features/weatherSlice";

import TempratureRange from "./TempratureRange";
import CitiesSelect from "./CitiesSelect";
import Conditions from "./Conditions";
import StadiumList from "./StadiumList";

function MainSearchPage() {
    const [selectedCity, setSelectedCity] = useState('');
    const [condition, setCondtion] = useState('');
    const dispatch = useDispatch();

    const handleCityChange = city => {
        setSelectedCity(city);
    };

    const handleConditionChange = condition => {
        setCondtion(condition)
    }


    return (
        <div>
            <CitiesSelect onCityChange={handleCityChange} />
            <TempratureRange />
            <Conditions onConditionChange={handleConditionChange} />
            <StadiumList
                selectedCity={selectedCity}
            // condition={condition}
            />
            <section>
            </section>
        </div>
    )
}

export default MainSearchPage;