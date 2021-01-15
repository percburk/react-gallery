import './PhotoItem.css';
import { useState } from 'react';

function PhotoItem({ photo, addLikes }) {
  const [photoDisplayed, setPhotoDisplayed] = useState(true);

  const toggle = () => {
    setPhotoDisplayed(photoDisplayed === true ? false : true);
    console.log(photoDisplayed);
  }

  return (
    <div>
      <div onClick={() => toggle()}>
        {photoDisplayed === true ? (
          <img src={photo.path} />
        ) : (
          <p>{photo.description}</p>
        )}
      </div>
      <p>likes: {photo.likes}</p>
      <button onClick={() => addLikes(photo.id)}>Add Like</button>
    </div>
  );
}

export default PhotoItem;
