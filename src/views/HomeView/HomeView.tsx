//Hooks
import { useEffect, useState } from 'react';
import useHomeView from './HomeView.hook';

//Components
import Sidebar from 'components/ui/Sidebar';
import Main from 'components/ui/Main';
import Topbar from 'components/ui/Topbar';
import Spinner from 'components/ui/Spinner';

//Styles
import Styles from './HomeView.module.scss';

const HomeView = () => {
    const { 
        fetchVideos,
        fetchVideosByKeyword,
        videos,
        currentVideo,
        currentPhrase,
        setCurrentVideo,
        setCurrentPhrase,
        loading
    } = useHomeView();

    const [scrollY, setScrollY] = useState(0);

    window.addEventListener('scroll', () => setScrollY(window.innerHeight + window.scrollY));

    useEffect(() => {
        fetchVideos();
    }, []);

    useEffect(() => {
        if (scrollY === window.document.body.offsetHeight && !currentPhrase) {
            fetchVideos();
        }
        if (scrollY === window.document.body.offsetHeight && currentPhrase) {
            fetchVideosByKeyword(currentPhrase);
        }
    }, [scrollY])

    return (
        <div className={Styles['home']}>
            {loading && <Spinner />}
            <Topbar
                fetchVideosByKeyword={phrase => {
                    fetchVideosByKeyword(phrase).then(() => setCurrentPhrase(phrase))
                }}
            />
            <div className={Styles['main-area']}>
                <Main currentVideo={currentVideo} />
                <Sidebar setCurrentVideo={setCurrentVideo} items={videos?.items} />
            </div>
        </div>
    );
};

export default HomeView;
