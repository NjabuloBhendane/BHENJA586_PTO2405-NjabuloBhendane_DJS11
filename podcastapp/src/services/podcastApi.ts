import { PodcastPreview, Show } from "../types/podcast";

const API_URL = "https://podcast-api.netlify.app";
const API_KEY = "";

export const fetchALLShows = async (): Promise<PodcastPreview[]> => {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      throw new Error(`API error:${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error Fetching shows", error);
    throw error;
  }
};


export const searchPodcasts = async (query) => {
  const response = await fetch(
    `${API_URL}/search/podcast?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
