import React from "react";
import { Link } from "react-router-dom";
import { PodcastPreview } from "../types/podcast";
import { usePodcastContext } from "./PodcastContext";

interface PodcastCardProps {
  podcast: PodcastPreview;
}

function PodcastCard({ podcast }: PodcastCardProps) {
  const { isFavorite, addToFavorites, removeFromFavorites } = usePodcastContext();
  const favorite = isFavorite(podcast.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(podcast.id);
      alert(`${podcast.title} removed from favorites.`);
    } else {
      addToFavorites(podcast);
      alert(`${podcast.title} added to favorites!`);
    }
  }

  return (
    <Link to={`/podcast/${podcast.id}`} className="podcast-link">
      <div className="podcast-card">
        <div className="podcast-poster">
          <img
            className="podcast-image"
            src={podcast.image}
            alt={podcast.title}
          />
          <div>
            <button
              className={`favorite-btn ${favorite ? "active" : ""}`}
              onClick={onFavoriteClick}
            >
              ♥
            </button>
          </div>
        </div>
        <div className="podcast-info">
          <h3>{podcast.title}</h3>
          <p>Seasons:{podcast.seasons}</p>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {podcast.description}
            </p>
        </div>
      </div>
    </Link>
  );
}

export default PodcastCard;

