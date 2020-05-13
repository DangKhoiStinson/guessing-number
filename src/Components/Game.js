import React from 'react';

class Game extends React.Component{
	constructor(props){
		super(props);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.randomNumber=this.randomNumber.bind(this);
		this.state=({
			inputNumber:null,
		});
	}
	randomNumber = () =>{
		return Math.ceil(Math.random() * 100);
	}
	compareToNumber=(number) =>{
		  // if (number==numberGuess){
		  // 	console.log("very good");
		  // 	return number;
		  // }
	}
	handleChange=(e) => {
		this.setState=({
			inputNumber:e.target.value
		});
		console.log(this.state.inputNumber);
	}

	handleSubmit=(e)=>{
		console.log(e.target.name);
		e.preventDefault();		
		this.compareToNumber(this.state.inputNumber);
	}
	render(){
		const numberGuess= this.randomNumber();
		console.log(numberGuess);
		return(
			<div className="game_content">
				<h1>Welcome to Guessing Number Game :)</h1>
				<h3>Guess the number between 1 and 100. Easy, right?</h3>
				<form onSubmit={this.handleSubmit}>
					<input name={numberGuess} value={this.state.inputNumber} onChange={this.handleChange} type="number" /><br />
					<button type="submit">Guess!</button>
				</form>
			</div>
		);
	}
}

export default Game;