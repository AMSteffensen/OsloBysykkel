import React from "react";
import { BsFillLockFill, MdDirectionsBike } from 'react-icons/all';

const Station = ({station, status}) => {
  return (
      <>
    <section className='stations'>
      <header>
        <h3>{station.name}</h3>
      </header>
      <div className='stations__bikes'>Avaiable Bikes</div>
      <MdDirectionsBike className="stations__icons"/>
      <div className='stations__count'>{status.num_bikes_available}</div>
      <div className='stations__docks'>Avaiable Docks</div>
      <BsFillLockFill className="stations__icons"/>
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
