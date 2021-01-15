import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import DisplayPhotoItems from '../DisplayPhotoItems/DisplayPhotoItems';
import axios from 'axios';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => getPhotos(), []);

  const getPhotos = () => {
    axios
      .get('/gallery')
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => alert('error getting photos', err));
  };

  const addLikes = (id) => {
    axios
      .put(`/gallery/${id}`)
      .then((res) => console.log(res))
      .catch((err) => alert('error in put', err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <DisplayPhotoItems photos={photos} addlikes={addLikes} />
      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;
