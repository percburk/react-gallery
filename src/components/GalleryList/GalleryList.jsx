import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ photos, addLikes, deletePhoto }) {
  return (
    <div>
      {photos.map((entry) => (
        <GalleryItem
          key={entry.id}
          photo={entry}
          addLikes={addLikes}
          deletePhoto={deletePhoto}
        />
      ))}
    </div>
  );
}

export default GalleryList;
