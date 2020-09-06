import React, {
  useEffect,
  useState,
} from 'react';
import './sass/style.scss';
import StationsComponent from './components/stations/StationsComponent';
import { station_information } from './constants/api/OsloBysykkel';

function App() {
  const [stations, setStations] = useState([]);
  const [isLoading, setLoadingStatus] = useState(true);
  const [loadingError, setLoadingErrorStatus] = useState(false);

  useEffect(() => {
    fetch(
      station_information,
      {
        method: 'GET',
        headers: { 'Client-Identifier': 'Identifier'}
      },
    )
    .then(response => response.json())
    .then((body) => {
      if (body.data.stations) {
        setStations(body.data.stations);
      }
      setLoadingStatus(false);
    })
    .catch((error) => {
      setLoadingErrorStatus(true);
    })
  }, [isLoading, loadingError]);


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
          isLoading && stations.length === 0
            ? <div>...Loading</div>
            : <StationsComponent stations={stations} />
        }
        </div>
      </main>
    </div>
    <footer className="footer">
      <button className="btn btn-primary">Rent this bike</button>
      <button className="btn btn-secondary">Dock here</button>
    </footer>
    </>
  );
}

export default App;
