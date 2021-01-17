import './GalleryItem.css';
import { useState } from 'react';
import { ThumbUp, Clear } from '@material-ui/icons';
import {
  Paper,
  Grid,
  Typography,
  ButtonGroup,
  Box,
  IconButton,
  Container
} from '@material-ui/core';

function GalleryItem({ photo, addLikes, deletePhoto }) {
  const [photoDisplayed, setPhotoDisplayed] = useState(true);

  return (
    <Grid item>
      <Paper elevation={2} borderRadius="5%">
        <Box padding={2}>
          <Box
            border={1}
            borderColor="grey.200"
            borderRadius="5%"
            padding={1}
            onClick={() => setPhotoDisplayed(!photoDisplayed)}
          >
            {photoDisplayed ? (
              <img className="photo" src={photo.path} />
            ) : (
              <Container height="150px" width="150px">
                <Typography variant="subtitle1">{photo.description}</Typography>
              </Container>
            )}
          </Box>
          <Box padding={0.5}>
            <Typography variant="body2">{photo.likes} likes</Typography>
          </Box>
          <Box padding={1}>
            <ButtonGroup size="small" aria-label="small outlined button group">
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
