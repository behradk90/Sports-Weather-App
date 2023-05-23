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
        <div className="space-y-4">
            <h1 className="p-4 mb-4 text-3xl text-center text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                Stadium Weather App
            </h1>
            <div className="flex space-x-10">
                <CitiesSelect onCityChange={handleCityChange} />
                <TempratureRange />
                <Conditions onConditionChange={handleConditionChange} />
            </div>
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