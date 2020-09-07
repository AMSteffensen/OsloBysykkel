import React from "react";
import { BsFillLockFill, MdDirectionsBike } from 'react-icons/all';

const Station = ({station, status}) => {
  return (
      <>
    <section className='stations'>
      <header>
        <h3>{station.name}</h3>
      </header>
      <div className='stations__bikes'><MdDirectionsBike/>Avaiable Bikes</div>
      <div className='stations__count'>{status.num_bikes_available}</div>
      <div className='stations__docks'><BsFillLockFill/>Avaiable Docks</div>
      <div className='stations__count'>{status.num_docks_available}</div>
      <div>
      <button className="btn btn-primary">Rent this bike</button>
    <button className="btn btn-secondary">Dock here</button>
      </div>
    </section>
   
    </>
  );
};

export {Station};
