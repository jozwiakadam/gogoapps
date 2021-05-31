//Utils
import cx from 'classnames';

//Types
import { Videos } from 'store/types';

//Styles
import Styles from './Sidebar.module.scss';

export type SidebarProps = {
    items: Videos.Video[];
    setCurrentVideo: (video: Videos.Video) => void;
};

const Sidebar: React.VFC<SidebarProps> = ({ items, setCurrentVideo }) => (
    <div className={Styles['sidebar']}>
        {items?.map((item: Videos.Video, index) => (
            <div key={index} onClick={() => setCurrentVideo(item)} className={Styles['sidebar-item']}>
                <img
                    className={cx(Styles['sidebar-image'])}
                    src={item.snippet.thumbnails.medium.url}
                    alt="thumbnail"
                />
                <div className={Styles['sidebar-content']}>
                    <p className={Styles['sidebar-content-title']}>{item.snippet.title}</p>
                    <p className={Styles['sidebar-content-channel']}>{item.snippet.channelTitle}</p>
                </div>
            </div>
        ))}
    </div>
);

export default Sidebar;
