import React from "react";
import { Link } from "react-router-dom";

const StadiumCard = (props) => {
    const stadium = props.stadium;

    return (
        <div className="">
            <img
                src=""
                alt=""
                height={200}
            />
            <div className="desc">
                <h2>
                    <Link to={''}>{stadium.name}</Link>
                </h2>
            </div>
        </div>
    )
};
export default StadiumCard;