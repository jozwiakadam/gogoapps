//Types
import { Videos } from 'store/types';

export type VideoPlayerProps = {
    currentVideo: Videos.Video;
};

const VideoPlayer: React.VFC<VideoPlayerProps> = ({ currentVideo }) => (
    <div className="video-responsive">
        <iframe
            src={`https://www.youtube.com/embed/${typeof currentVideo?.id === 'string' ? currentVideo?.id : currentVideo?.id?.videoId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);

export default VideoPlayer;
