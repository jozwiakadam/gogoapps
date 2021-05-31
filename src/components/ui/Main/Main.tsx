//Components
import VideoPlayer from 'components/ui/VideoPlayer';

//Types
import { Videos } from 'store/types';

//Styles
import Styles from './Main.module.scss';

export type MainProps = {
    currentVideo: Videos.Video;
};

const Main: React.VFC<MainProps> = ({ currentVideo }) => (
    <div className={Styles['main']}>
        <VideoPlayer currentVideo={currentVideo} />
        <h3 className={Styles['main-title']}>{currentVideo.snippet?.title}</h3>
        <p className={Styles['main-description']}>{currentVideo.snippet?.description}</p>
    </div>
);

export default Main;
