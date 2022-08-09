import React from 'react';
import './SortingVisualizer.css'

export default class SortingVisualizer extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 500; i++) {
            array.push(randomIntFromInterval(10, 800))
        }
        this.setState({array})
    }

    bubbleSort() {}

    exchangeSort() {}

    mergeSort() {}

    countingSort() {}

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                <div className="array-holder">
                    {array.map((value, idx) => (
                        <div 
                            className="array-bar" 
                            key={idx}
                            style={{height: `${value}px`}}>
                        </div>
                    ))}
                </div>
                <div className="button-holder">
                    <button onClick={() => this.resetArray()}>Randomize Array</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.exchangeSort()}>Exchange Sort</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.countingSort()}>Counting Sort</button>
                </div>
            </div>
        );
    }
}

function randomIntFromInterval(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}