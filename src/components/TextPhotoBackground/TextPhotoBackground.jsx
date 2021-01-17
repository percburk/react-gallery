import './TextPhotoBackground.css';
import { Box, Typography } from '@material-ui/core';

function TextPhotoBackground({ photo }) {
  // returns photo.description, set background image to photo with opacity
  return (
    <Box
      style={{ cursor: 'pointer' }}
      height="150px"
      width="150px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <img className="photoOpaque" src={photo.path} />
      <Typography variant="subtitle1">{photo.description}</Typography>
    </Box>
  );
}

export default TextPhotoBackground;
