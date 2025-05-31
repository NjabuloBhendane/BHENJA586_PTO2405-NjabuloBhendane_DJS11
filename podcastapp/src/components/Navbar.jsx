import { Link } from "react-router-dom";
import { searchPodcasts } from "../services/podcastApi";
import {useState} from "react";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
   const [podcasts, setPodcasts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  function handleFavoritesClick() {
    alert("clicked");
  }

  const handleSearch = async (e) => {
  e.preventDefault();

  const trimmedQuery = searchQuery.trim();
  if (!trimmedQuery || loading) return;

  setLoading(true);
  setError(null); // clear any previous errors

  try {
    const searchResults = await searchPodcasts(trimmedQuery);

    if (!searchResults || searchResults.length === 0) {
      setError("No podcasts found.");
      setPodcasts([]); // clear previous results
    } else {
      setPodcasts(searchResults);
    }

  } catch (err) {
    console.error("Search error:", err);
    setError("Failed to search podcasts. Please try again.");
  } finally {
    setLoading(false);
  }
};



  return (
    <header className="nav-bar">
      <Link className="site-logo" to="/">
        PodcastApp
      </Link>
      <nav>
        <Link to="/">Home</Link>
         <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
        <button className="favorite-btn" onClick={handleFavoritesClick}>
          <span>Favourite ♡</span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
