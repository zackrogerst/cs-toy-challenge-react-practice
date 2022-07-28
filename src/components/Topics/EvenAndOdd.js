// import React, { Component } from "react";

// export default class EvenAndOdd extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			evenArray: [],
// 			oddArray: [],
// 			userInput: ""
// 		};
// 	}

// 	handleChange(val) {
// 		this.setState({ userInput: val });
// 	}

// 	assignEvenAndOdds(userInput) {
// 		const evens = userInput
// 			.split(",")
// 			.map((e) => parseInt(e, 10))
// 			.filter((e) => e % 2 === 0);
// 		const odds = userInput
// 			.split(",")
// 			.map((e) => parseInt(e, 10))
// 			.filter((e) => e % 2 !== 0);

// 		this.setState({ evenArray: evens, oddArray: odds });
// 	}

// 	render() {
// 		return (
// 			<div className="puzzleBox evenAndOddPB">
// 				<h4>Evens and Odds</h4>
// 				<input
// 					className="inputLine"
// 					onChange={(e) => this.handleChange(e.target.value)}
// 				></input>
// 				<button
// 					className="confirmationButton"
// 					onClick={() => {
// 						this.assignEvenAndOdds(this.state.userInput);
// 					}}
// 				>
// 					Split
// 				</button>
// 				<span className="resultsBox">
// 					Evens: {JSON.stringify(this.state.evenArray)}
// 				</span>
// 				<span className="resultsBox">
// 					Odds: {JSON.stringify(this.state.oddArray)}
// 				</span>
// 			</div>
// 		);
// 	}
// }

import React, { useState } from "react";

function EvenAndOdd() {
	const [evenArray, setEvenArray] = useState([]);
	const [oddArray, setOddArray] = useState([]);
	const [userInput, setUserInput] = useState("");

	const getEven = (arr) =>
		arr
			.split(",")
			.map((e) => parseInt(e, 10))
			.filter((e) => e % 2 === 0);
	const getOdd = (arr) =>
		arr
			.split(",")
			.map((e) => parseInt(e, 10))
			.filter((e) => e % 2 !== 0);

	return (
		<div className="puzzleBox evenAndOddPB">
			<h4>Evens and Odds</h4>
			<input
				className="inputLine"
				onChange={(e) => setUserInput(e.target.value)}
			></input>
			<button
				className="confirmationButton"
				onClick={() => {
					setEvenArray(getEven(userInput));
					setOddArray(getOdd(userInput));
				}}
			>
				Split
			</button>
			<span className="resultsBox">
				Evens: {JSON.stringify(evenArray)}
			</span>
			<span className="resultsBox">Odds: {JSON.stringify(oddArray)}</span>
		</div>
	);
}

export default EvenAndOdd;
