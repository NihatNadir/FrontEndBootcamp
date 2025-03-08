import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStarship } from "../context/StarshipContext";

const Card = ({ name, model, hyperdriveRating, image, index, url }) => {
    const { setStarshipUrl, setStarshipDetails } = useStarship();

    const handleClick = async () => {
        setStarshipUrl(url);
        const response = await fetch(url);
        const data = await response.json();
        setStarshipDetails(data);
    };

    return (
        <Link
            to={`/detail/${index}`}
            onClick={handleClick}
            className="card-link"
        >
            <div className="card">
                <img src={image} alt={name} className="card-image" />
                <h2 className="card-title">{name}</h2>
                <p className="card-text">
                    <span className="bold">Model:</span> {model}
                </p>
                <p className="card-text">
                    <span className="bold">Hyperdrive Rating:</span> {hyperdriveRating}
                </p>
            </div>
        </Link>
    );
};

export default Card;