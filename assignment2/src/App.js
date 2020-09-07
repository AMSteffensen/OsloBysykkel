import React, {
  useEffect,
  useState,
} from 'react';
import './sass/style.scss';
//import StationsComponent from './components/stations/StationsComponent';
//import StationStatus from './components/stations/StationStatus';
import {StationList} from "./components/stations/StationList";
import {useData, STATIONS, STATUS} from "./constants/api/OsloBysykkel"

function App() {
  return (
    <>
    <div className="container">
      <header className="wrapper">
        <h1>Oslo Bysykkel</h1>
        <h2>Bra for deg, bra for Oslo!</h2>
      </header>
      <main>
        <div className="stations wrapper">
        {
            <StationList/>
        }
        </div>
      </main>
    </div>
    </>
  );
}

export default App;
