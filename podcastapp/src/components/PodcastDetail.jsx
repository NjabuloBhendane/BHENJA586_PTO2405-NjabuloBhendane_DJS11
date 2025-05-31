import { useParams } from "react-router-dom";
import React from "react";

function PodcastDetail() {
  const { id } = useParams();
  const [podcast, setPodcast] = React.useState(null);

  React.useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const res = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        if (!res.ok) throw new Error("Failed to fetch podcast");
        const data = await res.json();
        setPodcast(data); // assuming the API returns a single podcast object
      } catch (err) {
        console.error("Error fetching podcast:", err);
      }
    };

    fetchPodcast();
  }, [id]);

    function FavoriteClick() {
        alert("clicked");
    }

  return (
    <div className="podcast-detail-container">
      {podcast ? (
        <div className="podcast-detail">
          <img className = "podcast-detail-image" src={podcast.image} alt={podcast.title} />
           <button
                            className="favorite-detail-btn"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent link navigation
                                FavoriteClick();
                            }}
                        >
                            ♡
                        </button>
          <i className={`podcast-type ${podcast.type} selected`}>{podcast.type}</i>
          <h2 className = "podcast-detail-title">{podcast.title}</h2>
          <p className = "podcast-detail">{podcast.description}</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default PodcastDetail;

