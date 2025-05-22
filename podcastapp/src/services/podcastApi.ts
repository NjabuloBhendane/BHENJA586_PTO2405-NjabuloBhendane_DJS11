
import { PodcastPreview , Show } from "../types/podcast";

const API_URL = "https://podcast-api.netlify.app";

export const fetchALLShows = async (): Promise <PodcastPreview[]>  => {
try {
    const response = await fetch (`${API_URL}`);
 if (!response.ok) {
    throw new Error(`API error:${response.status}`);
 }
return await response.json();
} catch(error) {
    console.error("Error Fetching shows", error);
    throw error;
}
}
