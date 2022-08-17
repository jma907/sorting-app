import React from 'react';
import './SortingVisualizer.css'
import {getMergeAnimations} from '../SortingAlgorithms/SortingAlgorithms.js';
import {getBubbleAnimations} from '../SortingAlgorithms/SortingAlgorithms.js';

const ANIMATION_SPEED_MS = 1;

const PRIMARY_COLOR = 'coral' 

const SECONDARY_COLOR = 'blue'

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

    bubbleSort() {
        const animations = getBubbleAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } else {
            setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
        }
    }

    exchangeSort() {}

    mergeSort() {
        const animations = getMergeAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } else {
            setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
        }
    }

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