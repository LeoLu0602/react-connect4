import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'

function Column(props) {
    return (
        <div className="column">
            <button className="column-btn" />
            <div className="block">{props.arr[0]}</div>
            <div className="block">{props.arr[1]}</div>
            <div className="block">{props.arr[2]}</div>
            <div className="block">{props.arr[3]}</div>
            <div className="block">{props.arr[4]}</div>
            <div className="block">{props.arr[5]}</div>
        </div>
    );
}
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                Array(7).fill(null),
                Array(7).fill(null),
                Array(7).fill(null),
                Array(7).fill(null),
                Array(7).fill(null),
                Array(7).fill(null),
                Array(7).fill(null),
            ],
        };
    }

    renderColumn(i) {
        return (
            <Column 
                number={i}
                arr={this.state.columns[i]}
            />
        );
    }

    render() {
        return (
            <div className="board">
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
                <Board />
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);