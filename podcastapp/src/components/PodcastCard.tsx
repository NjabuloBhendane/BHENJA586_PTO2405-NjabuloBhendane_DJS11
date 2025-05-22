import React from 'react';
import { Link } from 'react-router-dom';
import { PodcastPreview } from '../types/podcast';

interface PodcastCardProps {
    podcast: PodcastPreview;
}

function PodcastCard({ podcast }: PodcastCardProps) {
    function FavoriteClick() {
        alert("clicked");
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
                            className="favorite-btn"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent link navigation
                                FavoriteClick();
                            }}
                        >
                            ♡
                        </button>
                    </div>
                </div>
                <div className="podcast-info">
                    <h3>{podcast.title}</h3>
                </div>
            </div>
        </Link>
    );
}

export default PodcastCard;
