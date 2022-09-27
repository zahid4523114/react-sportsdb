import React from "react";
import "./SportCard.css";

const SportCard = (props) => {
  let { favoriteSport } = props;
  let { strSport, strSportThumb, strFormat } = favoriteSport;
  //   console.log(props.favoriteSport);
  return (
    <div>
      <div class="card mb-3">
        <img src={strSportThumb} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{strSport}</h5>
          <p class="card-text">{strFormat}</p>
          <button className="btn btn-primary">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default SportCard;
