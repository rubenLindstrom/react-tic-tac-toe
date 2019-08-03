import React, { Component } from "react";

import Board from "../components/Board";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            squares,
            xIsNext: !this.state.xIsNext
        });
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board handeClick={this.handleClick} />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;