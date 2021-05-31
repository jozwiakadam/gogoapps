//Redux saga
import { call, select } from 'redux-saga/effects';
import { takeEveryPromiseAction } from 'redux-saga-promise-actions/effects';

//Actions
import * as actions from 'store/actions/videos';

//Sagas
import { request } from 'store/sagas/api';

export function* fetchVideos(action: ReturnType<typeof actions.fetchVideos.request>) {
    const fetchWithToken: string = yield select(state => state.videos.videos.nextPageToken);

    const {data} = yield call(request, {
        method: 'GET',
        url: `/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10${!!fetchWithToken ? `&pageToken=${fetchWithToken}` : ''}&key=AIzaSyAYE5IwbYThqXYFVJ2SgEWfeQaIHHsKni4`,
        headers: {
            'accept': 'application/json'
        }
    });

    return data;
};

export function* fetchVideosByKeyword(action: ReturnType<typeof actions.fetchVideosByKeyword.request>) {
    const phrase = action.payload;

    const fetchWithToken: string = yield select(state => state.videos.videos.nextPageToken);
    const firstVideoId: string | {} = yield select(state => state.videos.videos.items[0].id);
    const currentPhrase: string = yield select(state => state.videos.currentPhrase);

    const {data} = yield call(request, {
        method: 'GET',
        url: `/search?part=snippet${phrase ? `&q=${phrase}` : ''}&maxResults=10${(typeof firstVideoId === 'string' || currentPhrase !== phrase) ? '' : `&pageToken=${fetchWithToken}`}&key=AIzaSyAYE5IwbYThqXYFVJ2SgEWfeQaIHHsKni4`,
        headers: {
            'accept': 'application/json'
        }
    });

    return {data, phrase};
};

export function setCurrentVideo(action: ReturnType<typeof actions.setCurrentVideo.request>) {
    window.scrollTo(0, 0);
    return action.payload;
};

export function setCurrentPhrase(action: ReturnType<typeof actions.setCurrentPhrase.request>) {
    return action.payload;
};

export const saga = [
    takeEveryPromiseAction(actions.fetchVideos, fetchVideos),
    takeEveryPromiseAction(actions.fetchVideosByKeyword, fetchVideosByKeyword),
    takeEveryPromiseAction(actions.setCurrentVideo, setCurrentVideo),
    takeEveryPromiseAction(actions.setCurrentPhrase, setCurrentPhrase)
];
