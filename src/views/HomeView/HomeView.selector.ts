//Utils
import { createSelector } from 'reselect';

const getVideosStore = (store: any) => store.videos;

export const getVideosSelector = createSelector(getVideosStore, videos => videos.videos);
export const getCurrentVideoSelector = createSelector(getVideosStore, videos => videos.currentVideo);
export const getloadingSelector = createSelector(getVideosStore, videos => videos.isLoading);
export const getCurrentPhraseSelector = createSelector(getVideosStore, videos => videos.currentPhrase);

