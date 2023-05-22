import React from 'react';

function StadiumInfo({ name, image }) {
    const placeholderImage = 'https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1';

    return (
        <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <img
                className=''
                src={image || placeholderImage}
                alt={name}
                style={{ width: '200px' }}
            />
            <h1 class="text-3xl font-semibold text-white-500 dark:text-white-400 text-center mt-auto">{name}</h1>
        </div>
    );
}

export default StadiumInfo;