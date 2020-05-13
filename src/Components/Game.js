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
        return Math.ceil(Math.random() * 100);
    }
    compareToNumber = (number, numberGuess) => {
        if (number == numberGuess) {
            alert("very good");
        } else {
            alert("not bad");
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
				<h3>Guess the number between 1 and 100. Easy, right?</h3>
				<form onSubmit={this.handleSubmit}>
					<input value={this.state.inputNumber} onChange={this.handleChange}  /><br />
					<button type="submit">Guess!</button>
				</form>
			</div>
        );
    }
}

export default Game;