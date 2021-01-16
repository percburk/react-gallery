import './GalleryItem.css';
import { useState } from 'react';

function GalleryItem({ photo, addLikes, deletePhoto }) {
  const [photoDisplayed, setPhotoDisplayed] = useState(true);

  return (
    <div>
      <div onClick={() => setPhotoDisplayed(!photoDisplayed)}>
        {photoDisplayed ? <img src={photo.path} /> : <p>{photo.description}</p>}
      </div>
      <p>likes: {photo.likes}</p>
      <button onClick={() => addLikes(photo.id)}>Add Like</button>
      <button onClick={() => deletePhoto(photo.id)}>Delete</button>
    </div>
  );
}

export default GalleryItem;
