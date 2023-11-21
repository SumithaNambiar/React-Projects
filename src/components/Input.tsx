import "./Input.css";
interface InputProps {
	input: string;
}

const Input = ({ input }: InputProps) => {
	const splitInput = input.split("=");

	return (
		<div className="input">
			<div className="currentInput">
				{splitInput.length > 1 ? (
					<>
						{splitInput[0]}
						<br />
						{splitInput[1]}
					</>
				) : (
					input
				)}
			</div>
		</div>
	);
};
export default Input;
