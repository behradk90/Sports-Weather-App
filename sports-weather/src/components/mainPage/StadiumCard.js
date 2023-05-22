import React from 'react';

function StadiumCard({ stadium }) {
    const { name, location, imageUrl } = stadium;

    return (
        <div className="stadium-card">
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
        </div>
    );
}

export default StadiumCard;