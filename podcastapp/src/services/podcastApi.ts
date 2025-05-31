
import { PodcastPreview , Show } from "../types/podcast";

const API_URL = "https://podcast-api.netlify.app";
const API_KEY = "";

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

export const searchPodcasts = async (query) => {
  try {
    const response = await fetch(
      `${API_URL}/search/podcast?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to search podcasts:", error);
    return []; // or throw the error if you want to handle it higher up
  }
};
