import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import { Grid } from '@material-ui/core';

function GalleryList({ photos, addLikes, deletePhoto }) {
  // loop through array of objects 'photos', display each in a component
  return (
    <Grid
      container
      spacing={3}
      justify="center"
      alignItems="center"
      direction="row"
    >
      {photos.map((entry) => (
        <GalleryItem
          key={entry.id}
          photo={entry}
          addLikes={addLikes}
          deletePhoto={deletePhoto}
        />
      ))}
    </Grid>
  );
}

export default GalleryList;
