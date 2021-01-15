import './PhotoItem.css';

function PhotoItem({ photo, addLikes }) {
  return (
    <div>
      <img src={photo.path} />
      <p>{photo.description}</p>
      <p>likes: {photo.likes}</p>
      <button onClick={() => addLikes(photo.id)}>Add Like</button>
    </div>
  );
}

export default PhotoItem;
