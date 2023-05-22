import React from 'react';

function StadiumPicture({ image }) {
    return (
        <div>
            <img
                src={image}
                alt="Stadium Picture"
            />
        </div>
    );
}

export default StadiumPicture;