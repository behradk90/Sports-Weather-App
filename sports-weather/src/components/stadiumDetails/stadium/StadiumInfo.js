import React from 'react';

function StadiumInfo({ name, image, location }) {
    const placeholderImage = 'https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1';

    return (
        <div className='min-w-full block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-row'>
            <div>
                <img
                    className=''
                    src={image || placeholderImage}
                    alt={name}
                    style={{ width: '200px' }}
                />
            </div>
            <div className='ml-6'>
                <h2 className='font-normal text-gray-700 dark:text-gray-400'>Location:</h2>
                <h1 class="mb-2 text-7xl tracking-tight text-gray-900 dark:text-white">{location}</h1>
            </div>
        </div>
    );
}

export default StadiumInfo;

{/* <div className='block text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col'>
    <div className='mt-auto'>
        <h1 className='mb-2 text-9xl tracking-tight text-gray-900 dark:text-white'>{temperature}</h1>
        <h2 className='font-normal text-gray-700 dark:text-gray-400'>Current Temperature</h2>
    </div>
</div> */}