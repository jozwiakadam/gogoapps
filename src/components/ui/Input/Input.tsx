//Styles
import Styles from './Input.module.scss';

export type InputProps = {
    value?: string;
    className?: string;
    type?: 'text' | 'number';
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.VFC<InputProps> = ({value, onChange, type, className, ...props}) => (
    <div className={className}>
        <input
            className={Styles['input']}
            value={value}
            onChange={onChange}
            type={type}
            {...props}
        />
    </div>
);

export default Input;
