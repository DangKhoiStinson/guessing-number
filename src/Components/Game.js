import React from 'react';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.randomNumber = this.randomNumber.bind(this);
        this.state = ({
            inputNumber: 0,
            initialNumber: 0
        });
    }
    randomNumber = () => {
        return Math.ceil(Math.random() * 1000);
    }
    compareToNumber = (numberInput, numberGuess) => {
        if (numberInput == numberGuess) {
            alert("Very good");
        } else if(numberInput > numberGuess){
        	alert("Lower than this number!")            
        }
        else{
        	alert("Higher than this number!")
        }
    }
    handleChange = (e) => {
        this.setState({
            inputNumber: parseFloat(e.target.value)
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.initialNumber);
        console.log(this.state.inputNumber);
        this.compareToNumber(this.state.inputNumber, this.state.initialNumber);
    }
    componentDidMount() {
        const c_initialNumber = this.randomNumber();
        this.setState({
            initialNumber: c_initialNumber
        })
    }
    render() {
        return (
            <div className="game_content">
				<h1>Welcome to Guessing Number Game :)</h1>
				<h3>Guess the number between 1 and 1000. Easy, right?</h3>
				<form onSubmit={this.handleSubmit}>
					<input value={this.state.inputNumber} onChange={this.handleChange}  /><br />
					<button type="submit">Guess!</button>
				</form>
			</div>
        );
    }
}

export default Game;