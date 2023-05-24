import React from 'react';
import ukFootballStadiums from '../../APIs/stadiumAPI';
import StadiumCard from './StadiumCard';

function StadiumList({ selectedCity, condition, temperature }) {
    const filteredStadiums = selectedCity
        ? ukFootballStadiums.filter(stadium => stadium.location === selectedCity)
        : ukFootballStadiums;

    const filteredStadiumsWithCondition = condition
        ? filteredStadiums.filter(stadium => stadium.condition === condition)
        : filteredStadiums;

    const filteredStadiumsWithTemperature = temperature
        ? filteredStadiumsWithCondition.filter(stadium => stadium.temperature === temperature)
        : filteredStadiumsWithCondition;

    return (
        <div className="grid grid-cols-3 gap-4">
            {filteredStadiumsWithTemperature.map(stadium => (
                <StadiumCard key={stadium.name} stadium={stadium} />
            ))}
        </div>
    );
}

export default StadiumList;