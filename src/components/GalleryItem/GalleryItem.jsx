import './GalleryItem.css';
import { useState } from 'react';
import Photo from '../Photo/Photo';
import TextPhotoBackground from '../TextPhotoBackground/TextPhotoBackground';
import { ThumbUp, Clear } from '@material-ui/icons';
import {
  Paper,
  Grid,
  Typography,
  ButtonGroup,
  Box,
  IconButton,
} from '@material-ui/core';

function GalleryItem({ photo, addLikes, deletePhoto }) {
  const [photoDisplayed, setPhotoDisplayed] = useState(true);

  return (
    <Grid item>
      <Paper elevation={2} borderRadius="5%">
        <Box padding={2}>
          <Box
            border={1}
            borderRadius="5%"
            borderColor="grey.200"
            padding={1}
            onClick={() => setPhotoDisplayed(!photoDisplayed)}
          >
            {photoDisplayed ? (
              <Photo photo={photo} />
            ) : (
              <TextPhotoBackground photo={photo} />
            )}
          </Box>
          <Box padding={1} textAlign="center">
            <Typography variant="body2">{photo.likes} likes</Typography>
          </Box>
          <Box padding={1} display="flex" justifyContent="center">
            <ButtonGroup size="small">
              <IconButton color="primary" onClick={() => addLikes(photo.id)}>
                <ThumbUp />
              </IconButton>
              <IconButton
                color="secondary"
                onClick={() => deletePhoto(photo.id)}
              >
                <Clear />
              </IconButton>
            </ButtonGroup>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

export default GalleryItem;
