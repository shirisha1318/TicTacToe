import React from 'react';
import './PlayBoard.css';

class PlayBoard extends React.Component {


    getSquare(i) {
        return (
          <Square
            value="X" 
          />
        );
      }
    render() {
        return(
            <div>            
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
export default PlayBoard;