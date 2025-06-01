import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PodcastProvider } from "./components/PodcastContext";
import { fetchALLShows } from "./services/podcastApi";
import Navbar from "./components/NavBar";
import PodcastGrid from "./components/Grid";
import PodcastDetail from "./components/PodcastDetail"; // ✅ Import the new component
import { useState } from "react";
import { useEffect } from "react";
import Favorites from "./pages/Favorites";

function App() {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchALLShows();
        setPodcasts(data);
      } catch (error) {
        console.error("Failed to fetch podcasts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
<PodcastProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<PodcastGrid podcasts={podcasts} />} />
        <Route path="/podcast/:id" element={<PodcastDetail />} />
          <Route path="/favorites" element={<Favorites />} />
      </Routes>
  </PodcastProvider>    
    </BrowserRouter>
  );
}

export default App;
