import React from 'react';
import './SortingVisualizer.css'
import {getMergeAnimations} from '../SortingAlgorithms/SortingAlgorithms.js';
import {getBubbleAnimations} from '../SortingAlgorithms/SortingAlgorithms.js';
import { useState, useEffect, useRef } from 'react';

ARRAY_LENGTH = 100;
const MIN = 5;
const MAX = 80;
const ANIMATION_SPEED_MS = 5;
const PRIMARY_COLOR = 'coral' 
const SECONDARY_COLOR = 'blue'

export default function SortVisualizer(props) {
    const [arr, setArr] = useState([]);
    const [sorting, setSorting] = useState(false);
    const [sorted, setSorted] = useState(false);
    const containerRef = useRef(null);

    useEffect(initializeArray, []);

    function initializeArray() {
        if (sorting) return;
        if (sorted) resetArrayColor();
        setSorted(false);
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push((MAX - MIN) * (i / ARRAY_LENGTH) + MIN);
        }
        resetArray(array);
        setArr(array);
    }
    
}

const resetArray = (array) => {
    for (let i = array.length - 1; i >= 0; i++) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    } 
}