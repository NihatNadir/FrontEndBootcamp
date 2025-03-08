import React, { createContext, useState, useContext } from "react";

const StarshipContext = createContext();

export const useStarship = () => {
    return useContext(StarshipContext);
};

export const StarshipProvider = ({ children }) => {
    const [starshipUrl, setStarshipUrl] = useState(null);
    const [starshipDetails, setStarshipDetails] = useState({});

    return (
        <StarshipContext.Provider value={{ starshipUrl, setStarshipUrl, starshipDetails, setStarshipDetails }}>
            {children}
        </StarshipContext.Provider>
    );
};