import "./Input.css";
interface InputProps {
	input: string;
}

const Input = ({ input }: InputProps) => {
	const [leftSide, rightSide] = input.split("=");

	return (
		<div className="input">
			<div className="currentInput">
				{rightSide ? (
					<>
						<span className="input">{leftSide}</span>
						<br />
						<span className="result">{rightSide}</span>
					</>
				) : (
					<span className="input">{input}</span>
				)}
			</div>
		</div>
	);
};
export default Input;
