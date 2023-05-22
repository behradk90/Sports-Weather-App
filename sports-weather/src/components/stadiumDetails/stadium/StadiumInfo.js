import React from 'react';

function StadiumInfo({ name, image }) {
    const placeholderImage = 'https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1';

    return (
        <div>
            <h1>{name}</h1>
            <img
                src={image || placeholderImage}
                alt={name}
                style={{ width: '200px' }}
            />
        </div>
    );
}

export default StadiumInfo;