//Utils
import { createPromiseAction}  from 'redux-saga-promise-actions';

//Types
import { Videos } from 'store/types';

export const fetchVideos = createPromiseAction('FETCH_VIDEOS')<
    undefined,
    Videos.Videos,
    undefined
>();

export const fetchVideosByKeyword = createPromiseAction('FETCH_VIDEOS_BY_KEYWORD')<
    string,
    {data: Videos.Videos, phrase: string},
    string
>();

export const setCurrentVideo = createPromiseAction('SET_CURRENT_VIDEO')<
    any,
    Videos.Video,
    undefined
>();

export const setCurrentPhrase = createPromiseAction('SET_CURRENT_PHRASE')<
    any,
    string,
    any
>();
