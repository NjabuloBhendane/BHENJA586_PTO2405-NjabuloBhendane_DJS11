
import React from 'react';
import { Episode } from '../types/podcast';


interface EpisodeItemProps {
  episode: Episode;
  showId: string;
  showTitle: string;
  seasonNumber: number;
  seasonTitle: string;
  episodesList: Episode[];
};

function EpisodeItem ({episode,
  showId,
  showTitle,
  seasonNumber,
  seasonTitle,
  episodesList}:EpisodeItemProps ) {

}