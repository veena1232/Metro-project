import {React, useState, useEffect} from 'react';
import axios from 'axios';

export default function Nearby(){

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/places')
      .then(response => {
        setPlaces(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return(
    <div>
      <h1>Tourist Places</h1>
      <table>
        <thead>
          <tr>
            <th>Station Name</th>
            <th>Tourist Place</th>
          </tr>
        </thead>
        <tbody>
          {places.map((place, index) => (
            <tr key={index}>
              <td>{place.station_name}</td>
              <td>{place.tourist_place}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' alt='image'></img>
    </div>
  )
}