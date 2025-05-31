import { Link } from "react-router-dom";


function Navbar() {

  function handleFavoritesClick() {
    alert("clicked");
  }

 return (
    <header className="nav-bar">
      <Link className="site-logo" to="/">
        PodcastApp
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <button className="favorite-btn" onClick={handleFavoritesClick}>
          <span>Favourite ♡</span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
