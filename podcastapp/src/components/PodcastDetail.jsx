import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { usePodcastContext } from "./PodcastContext";

function PodcastDetail() {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [error, setError] = useState(null);

  const { isFavorite, addToFavorites, removeFromFavorites } = usePodcastContext();

  const favorite = useMemo(() => (podcast ? isFavorite(podcast.id) : false), [podcast, isFavorite]);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        if (!response.ok) throw new Error("Failed to fetch podcast data");
        const data = await response.json();
        setPodcast(data);
      } catch (err) {
        console.error("Error fetching podcast:", err);
        setError("Something went wrong while fetching podcast.");
      }
    };

    fetchPodcast();
  }, [id]);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (!podcast) return;

    if (favorite) {
      removeFromFavorites(podcast.id);
      alert(`${podcast.title} removed from favorites.`);
    } else {
      addToFavorites(podcast);
      alert(`${podcast.title} added to favorites!`);
    }
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!podcast) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="podcast-detail-container">
      <div className="podcast-detail">
        <img className="podcast-detail-image" src={podcast.image} alt={podcast.title} />
        <button
          className={`favorite-btn ${favorite ? "active" : ""}`}
          onClick={handleFavoriteClick}
        >
          ♡
        </button>
        <i className={`podcast-type ${podcast.type} selected`}>{podcast.type}</i>
        <h2 className="podcast-detail-title">{podcast.title}</h2>
        <p className="podcast-description">{podcast.description}</p>
        <p className="podcast-season">Season: {podcast.season}</p>
      </div>
    </div>
  );
}

export default PodcastDetail;


