//Utils
import cx from 'classnames';

//Styles
import Styles from './Button.module.scss';

export type ButtonProps = {
    children: string;
    className?: string;
    onClick: () => void;
}

const Button: React.VFC<ButtonProps> = ({children, className, ...props}) => (
    <button className={cx(Styles['button'], className)} {...props}>{children}</button>
);

export default Button;
