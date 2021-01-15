import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => getPhotos(), []);

  const getPhotos = () => {
    axios
      .get('/gallery/')
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => alert('error getting photos', err));
  };

  const addLikes = (id) => {
    axios
      .put(`gallery/like/${id}`)
      .then((res) => {
        console.log(res);
        getPhotos();
      })
      .catch((err) => alert('error in put', err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList photos={photos} addLikes={addLikes} />
    </div>
  );
}

export default App;
