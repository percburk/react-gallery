import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import AddPhotoForm from '../AddPhotoForm/AddPhotoForm';
import { Typography, Container } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { indigo, pink } from '@material-ui/core/colors';

function App() {
  const [photos, setPhotos] = useState([]);
  const [newPath, setNewPath] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: indigo[900],
      },
      secondary: {
        main: pink[800],
      },
    },
  });

  useEffect(() => getPhotos(), []);

  const getPhotos = () => {
    axios
      .get('/gallery/')
      .then((res) => setPhotos(res.data))
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

  const addNewPhoto = (event) => {
    event.preventDefault();
    axios
      .post('/gallery', { path: newPath, description: newDesc })
      .then((res) => {
        console.log(res);
        setNewPath('');
        setNewDesc('');
        getPhotos();
      })
      .catch((err) => alert('error in post', err));
  };

  const deletePhoto = (id) => {
    axios
      .delete(`/gallery/delete/${id}`)
      .then((res) => {
        console.log(res);
        getPhotos();
      })
      .catch((err) => alert('error in delete', err));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className="App">
          <header className="App-header">
            <Typography variant="h2" className="App-title">
              Gallery of My Life
            </Typography>
          </header>
          <AddPhotoForm
            newPath={newPath}
            setNewPath={setNewPath}
            newDesc={newDesc}
            setNewDesc={setNewDesc}
            addNewPhoto={addNewPhoto}
          />
          <GalleryList
            photos={photos}
            addLikes={addLikes}
            deletePhoto={deletePhoto}
          />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
