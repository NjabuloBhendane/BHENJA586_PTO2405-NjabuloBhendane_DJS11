import PodcastCard from "./PodcastCard";
import CustomDropdown from "./Dropdown";
import { useSearchParams } from "react-router-dom"


function PodcastGrid({ podcasts }) {
  const [searchParams, setSearchParams] = useSearchParams()   
  
  const genreFilter = searchParams.get("genres")

  const displayedPodcast = genreFilter
        ? podcasts.filter(podcast => podcast.genre === genreFilter)
        : podcasts
  
  if (!podcasts || podcasts.length === 0) {
      return <p>No podcasts available.</p>;
    }
  
    return (
    <div>
      <CustomDropdown/>
    <div className="podcast-grid">
        {podcasts.map((podcast, index) => (
          <PodcastCard key={index} podcast={podcast} />
        ))}
      </div>
    </div>  
    );
  }
  
 
export default PodcastGrid;
