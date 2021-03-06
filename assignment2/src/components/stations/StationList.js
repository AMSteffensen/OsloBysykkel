import React, {useEffect, useState} from "react";

import {useData, STATIONS, STATUS} from "../../constants/api/OsloBysykkel";
import {Station} from "./Station";

const StationList = () => {
  const stations = useData(STATIONS).data;
  const status = useData(STATUS).data;

  if (!stations || !status) {
    return <p>Loading...</p>;
  }

  const stationsDict = {};

  for (let i = 0; i < stations.stations.length; i++) {
    stationsDict[stations.stations[i].station_id] = stations.stations[i];
  }

  return (
    <ul className='stations'>
      {status.stations.map((status) => {
        return (
          <li className='stations__list' key={status.station_id}>
            <Station
              station={stationsDict[status.station_id]}
              status={status}
            />
          </li>
        );
      })}
    </ul>
  );
};

export {StationList};
