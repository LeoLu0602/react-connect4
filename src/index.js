import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'

function Column(props) {    
    return (
        <div className="column">
            <button className="column-btn" onClick={props.onClick}/>
            <div className="block" style={{backgroundColor: props.arr[5] == 1 ? "red" : props.arr[5] == 2 ? "yellow" : "white"}}></div>
            <div className="block" style={{backgroundColor: props.arr[4] == 1 ? "red" : props.arr[4] == 2 ? "yellow" : "white"}}></div>
            <div className="block" style={{backgroundColor: props.arr[3] == 1 ? "red" : props.arr[3] == 2 ? "yellow" : "white"}}></div>
            <div className="block" style={{backgroundColor: props.arr[2] == 1 ? "red" : props.arr[2] == 2 ? "yellow" : "white"}}></div>
            <div className="block" style={{backgroundColor: props.arr[1] == 1 ? "red" : props.arr[1] == 2 ? "yellow" : "white"}}></div>
            <div className="block" style={{backgroundColor: props.arr[0] == 1 ? "red" : props.arr[0] == 2 ? "yellow" : "white"}}></div>
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
            isPlayer1Next: true,
        };
    }

    handleClick(i) {
        const columns = this.state.columns.slice();
        if (calculateWinner(columns)) {
            return;
        }
        let available = false;
        for (let j = 0; j < 6; j++) {
            if (!columns[i][j]) { // find an empty block
                columns[i][j] = this.state.isPlayer1Next ? 1 : 2;
                available = true
                break;
            }
        }
        if (available) { // if column i is not full
            this.setState({
                columns: columns,
                isPlayer1Next: !this.state.isPlayer1Next,
            });
        }
    }

    renderColumn(i) {
        return (
            <Column 
                number={i}
                arr={this.state.columns[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.state.columns);
        let status;
        if (!winner) {
            status = this.state.isPlayer1Next ? "Next: Player 1" : "Next: Player 2";
        }
        else if(winner) {
            status = 'Winner: ' + winner;
        }

        return (
            <div className="game">
                <div className="title">React Connet 4</div>
                <div className="status" style={{color: winner == "Player 1" ? "red" : winner == "Player 2" ? "yellow" : this.state.isPlayer1Next ? "red" : "yellow"}}>{status}</div>
                <div className="board">
                    {this.renderColumn(0)}
                    {this.renderColumn(1)}
                    {this.renderColumn(2)}
                    {this.renderColumn(3)}
                    {this.renderColumn(4)}
                    {this.renderColumn(5)}
                    {this.renderColumn(6)}
                </div>
            </div>
        );
    }
}
class Game extends React.Component {
    render () {
        return (
            <div>
                <Board />
            </div>
        );
    }
}

function calculateWinner(columns) {
    const lines = [];
    // horizontal
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            lines.push([[i, j], [i, j + 1], [i, j + 2], [i, j + 3]]);
        }
    }
    // vertical
    for (let j = 0; j < 7; j++) {
        for (let i = 0; i < 3; i++) {
            lines.push([[i, j], [i + 1, j], [i + 2, j], [i + 3, j]]);
        }
    }
    // not horizontal not vertical
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (i - 3 >= 0 && j + 3 < 7) { 
                lines.push([[i, j], [i - 1, j + 1], [i - 2, j + 2], [i - 3, j + 3]]);
            }
            if (i - 3 >= 0 && j - 3 >= 0) {
                lines.push([[i, j], [i - 1, j - 1], [i - 2, j - 2], [i - 3, j - 3]]);
            }
        }
    }
    // check
    for (let i = 0; i < lines.length; i++) {
        const p1 = lines[i][0];
        const p2 = lines[i][1];
        const p3 = lines[i][2];
        const p4 = lines[i][3];
        if (columns[p1[0]][p1[1]] && columns[p1[0]][p1[1]] === columns[p2[0]][p2[1]] && columns[p1[0]][p1[1]] === columns[p3[0]][p3[1]] && columns[p1[0]][p1[1]] === columns[p4[0]][p4[1]]) {
            if (columns[p1[0]][p1[1]] == 1) {
                return "Player 1";
            }
            else if (columns[p1[0]][p1[1]] == 2) {
                return "Player 2";
            }
        }
    }
    return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);