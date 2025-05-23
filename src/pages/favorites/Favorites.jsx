// pages/Favorites.jsx
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map(fav => (
            <li key={fav.id}>Card ID: {fav.id}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
