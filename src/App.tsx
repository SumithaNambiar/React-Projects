import { useState } from "react";
import * as math from "mathjs";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";

interface ClearButtonProps {
	handleClear: () => void;
}
const ClearButton = ({ handleClear }: ClearButtonProps) => (
	<button className="clear" onClick={handleClear}>
		Clear
	</button>
);

const App = () => {
	const [input, setInput] = useState("");

	const handleClick = (val: string) => {
		setInput(input + val);
	};

	const handleEqual = () => {
		setInput(math.evaluate(input));
	};
	const backSpace = () => {
		setInput(input.slice(0, -1));
	};

	const handleClear = () => {
		setInput("");
	};

	return (
		<div className="App">
			<div className="calculator">
				<Input input={input} />
				<div className="row">
					<Button handleClick={handleClick}>7</Button>
					<Button handleClick={handleClick}>8</Button>
					<Button handleClick={handleClick}>9</Button>
					<Button handleClick={handleClick}>/</Button>
				</div>
				<div className="row">
					<Button handleClick={handleClick}>4</Button>
					<Button handleClick={handleClick}>5</Button>
					<Button handleClick={handleClick}>6</Button>
					<Button handleClick={handleClick}>*</Button>
				</div>
				<div className="row">
					<Button handleClick={handleClick}>1</Button>
					<Button handleClick={handleClick}>2</Button>
					<Button handleClick={handleClick}>3</Button>
					<Button handleClick={handleClick}>-</Button>
				</div>
				<div className="row">
					<Button handleClick={handleClick}>.</Button>
					<Button handleClick={handleClick}>0</Button>
					<Button handleClick={handleEqual}>=</Button>
					<Button handleClick={handleClick}>+</Button>
				</div>
				<div className="row">
					<Button handleClick={() => backSpace()}>Backspace</Button>
					<ClearButton handleClear={handleClear} />
				</div>
			</div>
		</div>
	);
};

export default App;
