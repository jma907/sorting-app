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
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(10, 1000))
        }
        this.setState({array})
    }

    render() {
        const {array} = this.state;

        return (
            <>
                {array.map((value, idx) => (
                    <div className="array-bar" key={idx}>
                        {value}
                    </div>
                ))}
            </>
        );
    }
}

function randomIntFromInterval(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}