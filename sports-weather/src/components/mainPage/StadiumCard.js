import React from 'react';
import { Link } from "react-router-dom";


function StadiumCard({ stadium }) {
    const { name, imageUrl } = stadium;

    return (
        <div className="stadium-card">
            <Link to={`/stadium/${stadium.id}/${stadium.name.replace(/ /g, '_')}`}>
                <img src={imageUrl} alt={name} />
                <h3>{name}</h3>
            </Link>
        </div>
    );
}

export default StadiumCard;