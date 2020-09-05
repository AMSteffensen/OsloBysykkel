import React from 'react';
import './sass/style.scss';

function App() {
  return (
    <>
    <div className="wrapper">
      <div className="container">
          <h1>Oslo Bysykkel</h1>
          <p>Frogner Plass</p>
          <p>Skøyen Stasjon</p>
          <p>7 Juni plassen</p>
          <p>Sotahjørnet</p>
          <p>Frogner Plass</p>
          <p>Skøyen Stasjon</p>
          <p>7 Juni plassen</p>
      </div>
    </div>
    <footer className="footer">
      <button className="btn btn-primary">Rent this bike</button>
      <button className="btn btn-secondary">Dock here</button>
    </footer>
    </>
  );
}

export default App;
