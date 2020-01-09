import React from 'react';
import './PlayBoard.css';

class PlayBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          isXNext: true,
        }
      }

    getSquare(i) {
        return (
          <Square
          value={this.state.squares[i]}
          onClick={() => this.squareClick(i)} 
          />
        );
      }
    
      squareClick(i) {
        const squares = this.state.squares.slice();        
        squares[i] = this.state.isXNext ? 'X' : 'O';
        this.setState({
          squares: squares,
          isXNext: !this.state.isXNext,
        });
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
      }
      reset= () => {
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true,
        });
      }    
    render() {

      const winner = calculateWinner(this.state.squares);
      let message;
      if (winner) {
        message = 'Winner: ' + winner;
      }else if(!this.state.squares.includes(null)) {
        message = 'Match drawn';
      }
      else {
        message = 'Next player: ' + (this.state.isXNext ? 'X' : 'O'); 
      }
        return(
            <div>  
            <div className="message">{message}</div>        
                <div className="row">
                    {this.getSquare(0)}
                    {this.getSquare(1)}
                    {this.getSquare(2)}
                </div>
                <div className="row">
                    {this.getSquare(3)}
                    {this.getSquare(4)}
                    {this.getSquare(5)}
                </div>
                <div className="row">
                    {this.getSquare(6)}
                    {this.getSquare(7)}
                    {this.getSquare(8)}
                </div>  
                <div>
             <button class="primary" onClick={this.reset}>Reset</button>
            </div>
            </div>
        )
    }
}
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );  
  }
  function calculateWinner(blocks) {
      //row wise, column wise, diagnally
    const lines = [
      [0, 1, 2],[3, 4, 5],[6, 7, 8],
      [0, 3, 6],[1, 4, 7],[2, 5, 8],
      [0, 4, 8],[2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (blocks[a] && blocks[a] === blocks[b] && blocks[a] === blocks[c]) {  
        return blocks[a];
      }
    }
    return null;
  }
export default PlayBoard;