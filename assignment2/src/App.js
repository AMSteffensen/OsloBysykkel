import React from 'react';
import './sass/style.scss';

import {StationList} from "./components/stations/StationList";

function App() {
  return (
    <>
    <div className="container">
      <header className="wrapper">
        <h1>Oslo Bysykkel</h1>
        <h2>Bra for deg, bra for Oslo!</h2>
      </header>
      <main>
        <div className="wrapper">
        <div className="stations">
        {
            <StationList/>
        }
        </div>
        </div>
      </main>
    </div>
    </>
  );
}

export default App;
