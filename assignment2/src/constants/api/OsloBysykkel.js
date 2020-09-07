import { useState, useEffect } from 'react';

const BASE_URL = "https://gbfs.urbansharing.com/oslobysykkel.no/";
const STATIONS = "station_information.json";
const STATUS = "station_status.json";
const INIT = {
    method: "GET",
    cache: "default",
    mode: "cors",
    headers: {
    } 
}

const useData = (status) => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(BASE_URL + status, INIT)
        .then(response => response.json())
        .then(data => setData(data))
    }, []);

    return data;
}

export {useData, STATIONS, STATUS}