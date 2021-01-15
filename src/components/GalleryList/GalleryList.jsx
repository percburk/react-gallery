import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ photos, addLikes }) {
  return (
    <div>
      {photos.map((entry) => (
        <GalleryItem key={entry.id} photo={entry} addLikes={addLikes} />
      ))}
    </div>
  );
}

export default GalleryList;
