import React, { useState } from "react";

function Palindrome() {
	const [userInput, setUserInput] = useState("");
	const [palindrome, setPalindrome] = useState("");

	function check(value) {
		setPalindrome(value.split("").reverse().join("").toLowerCase() === value.toLowerCase() ? "true" : "false");
	}
	
	return (
		<div className="puzzleBox palindromePB">
			<h4>Palindrome</h4>
			<input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
			<button className="confirmationButton" onClick={() => check(userInput)}>
				Check
			</button>
			<span className="resultsBox">Result: {palindrome}</span>
		</div>
	);
}

export default Palindrome;
