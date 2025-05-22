import PodcastCard from "./PodcastCard";


function PodcastGrid({ podcasts }) {
    if (!podcasts || podcasts.length === 0) {
      return <p>No podcasts available.</p>;
    }
  
    return (
      <section className="podcast-grid">
        {podcasts.map((podcast, index) => (
          <PodcastCard key={index} podcast={podcast} />
        ))}
      </section>
    );
  }
  
 
export default PodcastGrid;
