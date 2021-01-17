import './AddPhotoForm.css';
import { TextField, Button, Grid, Box } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

function AddPhotoForm({
  newPath,
  setNewPath,
  newDesc,
  setNewDesc,
  addNewPhoto,
}) {
  return (
    <Box marginLeft={15}>
      <form onSubmit={addNewPhoto}>
        <Grid container direction={'row'} spacing={3} alignItems="center">
          <Grid item>
            <TextField
              fullWidth
              multiline
              label="Link to photo"
              variant="outlined"
              value={newPath}
              onChange={(event) => setNewPath(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              multiLine
              label="Tell us about it"
              variant="outlined"
              value={newDesc}
              onChange={(event) => setNewDesc(event.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              size="large"
              startIcon={<ArrowForward />}
              variant="contained"
              color="primary"
              type="submit"
            >
              Add Photo
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default AddPhotoForm;
