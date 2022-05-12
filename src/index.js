import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'

function Column(props) {
    return (
        <button className="column">
            {props.value}
        </button>
    );
}
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    renderColumn(i) {
        return (
            <Column 
                value={i}
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderColumn(0)}
                {this.renderColumn(1)}
                {this.renderColumn(2)}
                {this.renderColumn(3)}
                {this.renderColumn(4)}
                {this.renderColumn(5)}
                {this.renderColumn(6)}
            </div>
        );
    }
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