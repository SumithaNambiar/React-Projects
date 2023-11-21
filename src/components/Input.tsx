import "./Input.css";
interface InputProps {
	input: string;
}
const Input = ({ input }: InputProps) => <div className="input">{input}</div>;
export default Input;
