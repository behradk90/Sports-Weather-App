import React from 'react';
import ukFootballStadiums from '../../APIs/stadiumAPI';
import StadiumCard from './StadiumCard';

function StadiumList({ selectedCity, condition }) {
    const filteredStadiums = selectedCity
        ? ukFootballStadiums.filter(stadium => stadium.location === selectedCity)
        : ukFootballStadiums;

    const filteredStadiumsWithCondition = condition
        ? filteredStadiums.filter(stadium => stadium.condition === condition)
        : filteredStadiums;

    return (
        <div className="stadium-list">
            {filteredStadiumsWithCondition.map(stadium => (
                <StadiumCard key={stadium.name} stadium={stadium} />
            ))}
        </div>
    );
}

export default StadiumList;