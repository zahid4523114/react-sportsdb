import React from "react";
import "./Sport.css";

const Sport = (props) => {
  let { sport, addFavorite } = props;
  let { strSport, strSportThumb, strSportDescription, strFormat } = sport;
  //   console.log(props);
  return (
    <div className="my-3 mx-auto" style={{ width: "20rem" }}>
      <div className="shadow-lg rounded bg-body p-2">
        <img className=" mb-3 rounded w-100" src={strSportThumb} alt="" />
        <h4>{strSport}</h4>
        <h5>{strFormat}</h5>
        <p>{strSportDescription.slice(0, 200)}</p>
        <button
          onClick={() => addFavorite(sport)}
          className="btn btn-primary container-fluid d-block text-center"
        >
          Add to favorite
        </button>
      </div>
    </div>
  );
};

export default Sport;
