import React, { useState } from "react";

function FilterString() {
	const unfilteredArray = ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy']

	const [userInput, setUserInput] = useState("");
	const [filteredArray, setFilteredArray] = useState([]);

	function filter(input) {
		setFilteredArray(unfilteredArray.filter(e => e.includes(input)));
	}

	return (
		<div className="puzzleBox filterStringPB">
			<h4>Filter String</h4>
			<span className="puzzleText">Original: {JSON.stringify(unfilteredArray)}</span>
			<input className="inputLine" onChange={e => setUserInput(e.target.value)}></input>
			<button className="confirmationButton" onClick={() => filter(userInput)}>
				Filter
			</button>
			<span className="resultsBox filterStringRB">Filtered: {JSON.stringify(filteredArray)}</span>
		</div>
	);
}

export default FilterString;

// import React, { Component } from 'react';

// export default class FilterString extends Component {
  
//   constructor() {
//     super();

//     this.state = {
//       names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
//       userInput: '',
//       filteredNames: []
//     };
//   }

//   handleChange(val) {
//     this.setState({ userInput: val });
//   }

//   filterNames(userInput) {
//     var names = this.state.names;
//     var filteredNames = [];

//     for ( var i = 0; i < names.length; i++ ) {
//       if ( names[i].includes(userInput) ) {
//         filteredNames.push(names[i]);
//       }
//     }

//     this.setState({ filteredNames: filteredNames });
//   }

//   render() {
//     return (
//       <div className="puzzleBox filterStringPB">
//         <h4> Filter String </h4>
//         <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
//         <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
//         <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
//         <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
//       </div>
//     )
//   }
// }