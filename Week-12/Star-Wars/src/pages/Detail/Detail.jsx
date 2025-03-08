import React, { useEffect } from "react";
import { useStarship } from "../../context/StarshipContext";
import { Link } from "react-router-dom";
import "./Detail.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Detail = () => {
  const { starshipDetails } = useStarship();

  if (!starshipDetails.name) return <p>Loading...</p>; // Eğer starshipDetails verisi gelmediyse loading göster

  return (
    <>
      <div className="link-container">
        <Link to="/" className="back-link">
          <ArrowBackIcon />
        </Link>
      </div>
      <div className="detail-container">
        <div className="card">
          <h2 className="card-title">{starshipDetails.name}</h2>
          <img src="https://i.pinimg.com/736x/72/a3/25/72a32554c55c6edb8b919dbae80ebdaa.jpg" alt={starshipDetails.name} className="card-image" />
          <p className="card-text">
            <span className="bold">Model:</span> {starshipDetails.model}
          </p>
          <p className="card-text">
            <span className="bold">Hyperdrive Rating:</span> {starshipDetails.hyperdrive_rating}
          </p>
          {starshipDetails.manufacturer && (
            <p className="card-text">
              <span className="bold">Manufacturer:</span> {starshipDetails.manufacturer}
            </p>
          )}
          {starshipDetails.cost_in_credits && (
            <p className="card-text">
              <span className="bold">Cost in credits:</span> {starshipDetails.cost_in_credits}
            </p>
          )}
          {starshipDetails.length && (
            <p className="card-text">
              <span className="bold">Length:</span> {starshipDetails.length} meters
            </p>
          )}
          {starshipDetails.max_atmosphering_speed && (
            <p className="card-text">
              <span className="bold">Max Atmosphering Speed:</span> {starshipDetails.max_atmosphering_speed} km/h
            </p>
          )}
          {starshipDetails.crew && (
            <p className="card-text">
              <span className="bold">Crew:</span> {starshipDetails.crew}
            </p>
          )}
          {starshipDetails.passengers && (
            <p className="card-text">
              <span className="bold">Passengers:</span> {starshipDetails.passengers}
            </p>
          )}
          {starshipDetails.cargo_capacity && (
            <p className="card-text">
              <span className="bold">Cargo Capacity:</span> {starshipDetails.cargo_capacity}
            </p>
          )}
          {starshipDetails.MGLT && (
            <p className="card-text">
              <span className="bold">MGLT:</span> {starshipDetails.MGLT}
            </p>
          )}
          {starshipDetails.starship_class && (
            <p className="card-text">
              <span className="bold">Starship Class:</span> {starshipDetails.starship_class}
            </p>
          )}
        </div>

      </div>
    </>
  );
};

export default Detail;