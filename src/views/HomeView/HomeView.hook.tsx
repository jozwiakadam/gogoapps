//Hooks
import { useDispatch, useSelector } from 'react-redux';
import {
    getVideosSelector,
    getCurrentVideoSelector,
    getloadingSelector,
    getCurrentPhraseSelector
} from './HomeView.selector';

//Actions
import * as actions from 'store/actions';

//Types
import { Videos } from 'store/types';

const useHomeView = () => {
    const dispatch = useDispatch();
    const videos = useSelector(getVideosSelector);
    const currentVideo = useSelector(getCurrentVideoSelector);
    const loading = useSelector(getloadingSelector);
    const currentPhrase = useSelector(getCurrentPhraseSelector);

    return {
        videos,
        currentVideo,
        loading,
        currentPhrase,
        fetchVideos: () => dispatch(actions.fetchVideos.request()),
        fetchVideosByKeyword: (phrase: string) => dispatch(actions.fetchVideosByKeyword.request(phrase)),
        setCurrentVideo: (video: Videos.Video) => dispatch(actions.setCurrentVideo.request(video)),
        setCurrentPhrase: (phrase: string) => dispatch(actions.setCurrentPhrase.request(phrase))
    };
};

export default useHomeView;
