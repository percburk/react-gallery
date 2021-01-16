import './AddPhotoForm.css';

function AddPhotoForm({
  newPath,
  setNewPath,
  newDesc,
  setNewDesc,
  addNewPhoto,
}) {
  return (
    <div>
      <form onSubmit={addNewPhoto}>
        <div>
          <label>Link to photo:</label>
          <input
            type="text"
            placeholder="photo url"
            value={newPath}
            onChange={(event) => setNewPath(event.target.value)}
          />
        </div>
        <div>
          <label>Tell us about it:</label>
          <input
            type="text"
            placeholder="description"
            value={newDesc}
            onChange={(event) => setNewDesc(event.target.value)}
          />
        </div>
        <button type="submit">Add Photo</button>
      </form>
    </div>
  );
}

export default AddPhotoForm;
