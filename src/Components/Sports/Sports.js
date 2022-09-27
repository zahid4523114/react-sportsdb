import React, { useEffect, useState } from "react";
import Sport from "../Sport/Sport";
import SportCard from "../SportCard/SportCard";
import "./Sports.css";

const Sports = () => {
  let [sports, setSports] = useState([]);
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
      .then((res) => res.json())
      .then((data) => setSports(data.sports));
  }, []);

  const [favorite, setFavorite] = useState([]);

  let addFavorite = (sport) => {
    let favSport = [...favorite, sport];
    setFavorite(favSport);
  };

  //remove items

  return (
    <div className="row container-fluid">
      <div className="sports-container  col-8">
        {sports.map((sport) => (
          <Sport
            addFavorite={addFavorite}
            key={sport.idSport}
            sport={sport}
          ></Sport>
        ))}
      </div>
      <div className="sports-card-container rounded h-100  bg-black col-4 p-3 mt-3">
        <h1 className="text-white text-center">Favorite sports</h1>
        {favorite.map((addedSport) => (
          <SportCard
            key={addedSport.idSport}
            favoriteSport={addedSport}
          ></SportCard>
        ))}
      </div>
    </div>
  );
};

export default Sports;
