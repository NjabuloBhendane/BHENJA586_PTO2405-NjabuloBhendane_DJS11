import { useParams } from "react-router-dom";

function PodcastDetail() {
  const { id } = useParams();

  return (
    <div className="podcast-detail">
      <h2>Podcast Detail for ID: {id}</h2>
      {/* You can fetch and display more podcast data here */}
    </div>
  );
}

export default PodcastDetail;
