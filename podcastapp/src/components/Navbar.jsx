import { Link } from "react-router-dom";


function Navbar() {

  
 return (
    <header className="nav-bar">
      <Link className="site-logo" to="/">
        PodcastApp
      </Link>
      <nav>
        <Link to="/">Home</Link>
       <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
}

export default Navbar;
