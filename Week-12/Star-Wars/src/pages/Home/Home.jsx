import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";
import "./Home.css";

const Home = () => {
  const [starships, setStarships] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Arama terimi state'i

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/starships/");
        setStarships(response.data.results);
        setNextPage(response.data.next);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };

    fetchData();
  }, []);

  const loadMore = async () => {
    if (nextPage) {
      const response = await axios.get(nextPage);
      setStarships([...starships, ...response.data.results]);
      setNextPage(response.data.next);
    }
  };

  // Arama işlemi
  const filteredStarships = starships.filter(starship =>
    starship.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home container">
      <h1 className="title">Star Wars</h1>

      <div className="search-container">
        <span className="search-text">Name / Model</span>
        <input
          type="text"
          placeholder="Name / Model"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="search-input"
        />
        <button className="filter-button">Filter</button>
      </div>

      <div className="card-container">
        {filteredStarships.map((starship, index) => (
          <Card
            key={index}
            url={starship.url}
            index={index + 1}
            name={starship.name}
            model={starship.model}
            hyperdriveRating={starship.hyperdrive_rating}
            image="https://i.pinimg.com/736x/72/a3/25/72a32554c55c6edb8b919dbae80ebdaa.jpg"
          />
        ))}
      </div>

      {nextPage && (
        <div className="button-container">
          <button onClick={loadMore} className="load-more-btn">
            More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;