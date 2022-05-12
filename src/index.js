import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'

function Column(props) {

}
class Board extends React.Component {

}

class Game extends React.Component {
    render () {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);