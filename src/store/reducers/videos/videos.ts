//Reducer
import { createReducer } from 'typesafe-actions';
import { isEmpty } from 'lodash';

//Actions
import * as actions from 'store/actions';

//Types
import { ActionType } from 'typesafe-actions';
import { Videos } from 'store/types';

export type VideosAction = ActionType<typeof actions>;

export type State = Readonly<{
    videos: Videos.Videos | {}| any;
    currentVideo: Videos.Video | {};
    isLoading: boolean;
    currentPhrase: string;
}>;

export const initialState: State = {
    videos: {},
    currentVideo: {},
    isLoading: false,
    currentPhrase: '',
};

export default createReducer<State, VideosAction>(initialState).handleAction(
    actions.fetchVideos.request,
    (state) => ({
        ...state,
        isLoading: true
    })
)
.handleAction(
    actions.fetchVideos.success,
    (state, action) => {
        if (isEmpty(state.videos)) {
            return {
                ...state,
                videos: action.payload,
                isLoading: false,
                currentVideo: action.payload.items[0]
            }
        } else return {
            ...state,
            videos: {
                ...state.videos,
                nextPageToken: action.payload.nextPageToken,
                items: [...state.videos.items, ...action.payload.items]
            },
            isLoading: false
        }
    }
).handleAction(
    actions.fetchVideos.failure,
    (state) => ({
        ...state,
        isLoading: false
    })
).handleAction(
    actions.fetchVideosByKeyword.request,
    (state) => ({
        ...state,
        isLoading: true
    })
).handleAction(
    actions.fetchVideosByKeyword.success,
    (state, action) => {
        if (typeof state.videos.items[0].id === 'string' || action.payload.phrase !== state.currentPhrase) {
            return {
                ...state,
                videos: action.payload.data,
                isLoading: false
            }
        } else return {
            ...state,
            videos: {
                ...state.videos,
                nextPageToken: action.payload.data.nextPageToken,
                items: [...state.videos.items, ...action.payload.data.items]
            },
            isLoading: false
        }
    }
).handleAction(
    actions.fetchVideosByKeyword.failure,
    (state) => ({
        ...state,
        isLoading: false
    })
).handleAction(
    actions.setCurrentVideo.success,
    (state, action) => ({
        ...state,
        currentVideo: action.payload
    })
).handleAction(
    actions.setCurrentPhrase.success,
    (state, action) => ({
        ...state,
        currentPhrase: action.payload
    })
);
