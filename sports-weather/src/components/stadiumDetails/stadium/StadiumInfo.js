import React from 'react';

function StadiumInfo({ name, image, location }) {
    const placeholderImage = 'https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1';

    return (
        <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col'>
            <img
                className=''
                src={image || placeholderImage}
                alt={name}
                style={{ width: '200px' }}
            />
            <h1 class="font-normal text-gray-700 dark:text-gray-400 text-centre mt-auto">Location: {location}</h1>
        </div>
    );
}

export default StadiumInfo;