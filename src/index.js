import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'

function Column(props) {    
    return (
        <div className="column">
            <button className="column-btn" onClick={props.onClick}/>
            <div className="block" id="5"></div>
            <div className="block" id="4"></div>
            <div className="block" id="3"></div>
            <div className="block" id="2"></div>
            <div className="block" id="1"></div>
            <div className="block" id="0"></div>
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
        let available = false;
        for (let j = 0; j < 6; j++) {
            if (!columns[i][j]) { // find an empty block
                columns[i][j] = this.state.isPlayer1Next ? 1 : 2;
                available = true
                break;
            }
        }
        console.log(available);
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
                <div className="status" style={{color: this.state.isPlayer1Next ? "red" : "rgb(230, 218, 0)"}}>{status}</div>
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

    return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);