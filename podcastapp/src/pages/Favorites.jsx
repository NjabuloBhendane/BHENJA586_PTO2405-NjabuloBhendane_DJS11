import { usePodcastContext } from "../components/PodcastContext";
import PodcastCard from "../components/PodcastCard";

function Favorites() {
  const { favorites } = usePodcastContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="podcasts-grid">
          {favorites.map((podcast) => (
            <PodcastCard podcast={podcast} key={podcast.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Podcasts Yet</h2>
      <p>Start adding podcasts to your favorites and they will appear here!</p>
    </div>
  );
}

export default Favorites;
