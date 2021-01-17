import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import AddPhotoForm from '../AddPhotoForm/AddPhotoForm';
import { Typography, Container, Box } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, pink, grey } from '@material-ui/core/colors';

function App() {
  // photos is array of objects containing all data from db
  const [photos, setPhotos] = useState([]);
  // set url for new photo in AddPhotoForm
  const [newPath, setNewPath] = useState('');
  // new description of new photo in AddPhotoForm
  const [newDesc, setNewDesc] = useState('');

  // theme for fonts and button colors
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: lightBlue[500],
      },
      secondary: {
        main: pink[800],
      },
    },
    typography: {
      fontFamily: 'Source Sans Pro',
      fontWeight: 300,
      fontSize: 12,
      color: grey[700],
      h2: {
        fontFamily: 'Merriweather',
        fontWeight: 300,
        fontSize: 42,
        letterSpacing: '0.1em',
        color: grey[800],
      },
      subtitle1: {
        fontFamily: 'Source Sans Pro',
        fontWeight: 300,
        fontSize: 16,
        color: grey[700],
      },
      body2: {
        fontFamily: 'Source Sans Pro',
        fontWeight: 500,
        fontSize: 14,
        color: grey[700],
      },
      button: {
        fontFamily: 'Source Sans Pro',
        fontWeight: 500,
        textTransform: 'none',
      },
    },
  });

  useEffect(() => getPhotos(), []);

  // GET route to display photos
  const getPhotos = () => {
    axios
      .get('/gallery/')
      .then((res) => setPhotos(res.data))
      .catch((err) => alert('error getting photos', err));
  };

  // PUT route to add likes
  const addLikes = (id) => {
    axios
      .put(`gallery/like/${id}`)
      .then((res) => {
        console.log(res);
        getPhotos();
      })
      .catch((err) => alert('error in put', err));
  };

  // POST route to add a new photo
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

  // DELETE route to delete a photo
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
        <Box display="flex" paddingBottom={2} marginBottom={2} marginTop={2}>
          <Typography variant="h2">Gallery of Moments</Typography>
          <AddPhotoForm
            newPath={newPath}
            setNewPath={setNewPath}
            newDesc={newDesc}
            setNewDesc={setNewDesc}
            addNewPhoto={addNewPhoto}
          />
        </Box>
        <Box>
          <GalleryList
            photos={photos}
            addLikes={addLikes}
            deletePhoto={deletePhoto}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
