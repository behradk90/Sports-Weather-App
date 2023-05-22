import React from 'react';
import ukFootballStadiums from '../../APIs/stadiumAPI';
import StadiumCard from './StadiumCard';

function StadiumList({ selectedCity }) {
    const filteredStadiums = selectedCity
        ? ukFootballStadiums.filter(stadium => stadium.location === selectedCity)
        : ukFootballStadiums;

    return (
        <div className="stadium-list">
            {filteredStadiums.map(stadium => (
                <StadiumCard key={stadium.name} stadium={stadium} />
            ))}
        </div>
    );
}

export default StadiumList;