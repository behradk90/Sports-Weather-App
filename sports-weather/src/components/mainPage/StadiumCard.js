import React from 'react';
import { Link } from "react-router-dom";


function StadiumCard({ stadium }) {
    const { name, imageUrl } = stadium;
    const placeholderImage = 'https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1';

    return (
        <div className="min-h-[200px] max-w-sm w-48 hover:bg-gray-100 dark:hover:bg-gray-700 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center flex flex-col">
            <Link className='flex flex-col h-full' to={`/stadium/${stadium.id}/${stadium.name.replace(/ /g, '_')}`}>
                <img className='p-2' src={imageUrl || placeholderImage} alt={name} />
                <h3 className="mt-auto p-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
            </Link>
        </div >
    );
}

export default StadiumCard;