import React from "react";

function Stations(props) {
  return (
    <div>
      <h3>Stations</h3>
        {props.stations.map((station) => {
          return (
            <ul className="stations" key={station.station_id}>
                <li className="stations__list">
                <p>{`${station.name}, ${station.address}`}</p>
                </li>
            </ul>
          );
        })}
    </div>
  );
}

export default Stations;
