import React from 'react';
import { Link } from "react-router-dom";


function StadiumCard({ stadium }) {
    const { name, location, imageUrl } = stadium;

    return (
        <Link to={`/stadium/${stadium.id}/${stadium.name.replace(/ /g, '_')}`}>
            <div className="stadium-card">
                <img src={imageUrl} alt={name} />
                <h3>{name}</h3>
            </div>
        </Link>
    );
}

export default StadiumCard;