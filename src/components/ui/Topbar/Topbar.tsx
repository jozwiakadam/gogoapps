//Hooks
import { useState } from 'react';

//Components
import Input from 'components/ui/Input';
import Button from 'components/ui/Button';

//Styles
import Styles from './Topbar.module.scss';

export type TopbarProps = {
    fetchVideosByKeyword: (phrase: string) => void;
};

const Topbar: React.VFC<TopbarProps> = ({ fetchVideosByKeyword }) => {
    const [phrase, setPhrase] = useState('');

    return (
        <div className={Styles['topbar']}>
            <Input className={Styles['topbar-input']} onChange={(e) => setPhrase(e.target.value)} />
            <Button onClick={() => fetchVideosByKeyword(phrase)}>Search</Button>
        </div>
    );
};

export default Topbar;
