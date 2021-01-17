import './Photo.css';
import { Box } from '@material-ui/core';

function Photo({ photo }) {
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
      <img className="photo" src={photo.path} />
    </Box>
  );
}

export default Photo;
