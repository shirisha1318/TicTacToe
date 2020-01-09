import React from 'react';
import './PlayBoard.css';

class PlayBoard extends React.Component {
    render() {
        return(
            <div>            
                <div className="row">
                    <button className="square">X</button>
                    <button className="square">X</button>
                    <button className="square">X</button>
                </div>
                <div className="row">
                    <button className="square">X</button>
                    <button className="square">X</button>
                    <button className="square">X</button>
                </div>
                <div className="row">
                    <button className="square">X</button>
                    <button className="square">X</button>
                    <button className="square">X</button>
                </div>  
            </div>
        )
    }
}

export default PlayBoard;