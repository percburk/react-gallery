import './DisplayPhotoItems.css';
import PhotoItem from '../PhotoItem/PhotoItem';

function DisplayPhotoItems({ photos, addLikes }) {
  return (
    <div>
      {photos.map((entry) => (
        <PhotoItem key={entry.id} photo={entry} addLikes={addLikes} />
      ))}
    </div>
  );
}

export default DisplayPhotoItems;
