import './AddPhotoForm.css';
import { TextField, Button, Box } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

function AddPhotoForm({
  newPath,
  setNewPath,
  newDesc,
  setNewDesc,
  addNewPhoto,
}) {
  return (
    <Box margin={4}>
      <form onSubmit={addNewPhoto}>
        <TextField
          label="Add photo"
          variant="filled"
          placeholder="photo url"
          value={newPath}
          onChange={(event) => setNewPath(event.target.value)}
        />
        <TextField
          label="Tell us about it"
          variant="filled"
          placeholder="description"
          value={newDesc}
          onChange={(event) => setNewDesc(event.target.value)}
        />
        <Button
          startIcon={<ArrowForward />}
          variant="outline"
          color="primary"
          type="submit"
        >
          Add Photo
        </Button>
      </form>
    </Box>
  );
}

export default AddPhotoForm;
