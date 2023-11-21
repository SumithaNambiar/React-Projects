import "./Button.css";

interface ButtonProps {
	handleClick: (val: string) => void;
	children: string;
}

const Button = ({ handleClick, children }: ButtonProps) => (
	<button onClick={() => handleClick(children)}>{children}</button>
);
export default Button;
