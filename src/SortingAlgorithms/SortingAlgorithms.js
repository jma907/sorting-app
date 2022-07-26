import { swap } from "./Utility";

export function getInsertionSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    for (let i = 1; i < copy.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
          animations.push([[j, j + 1], false]);
          if (copy[j + 1] < copy[j]) {
            animations.push([[j, copy[j + 1]], true]);
            animations.push([[j + 1, copy[j]], true]);
            swap(copy, j, j + 1);
          } else break;
        }
      }
    return animations;
}

export function getMergeSortAnimations(arr) {}

export function getQuickSortAnimations(arr) {}

export function getBubbleSortAnimations(arr) {
    const copy = [...arr];
    const animations = [];
    for (let i = 0; i < copy.length; i++) {
        for (let j = 0; j < (copy.length - i - 1); j++) {
            animations.push([[j, j + 1], false]);
            if (copy[j] > copy[j + 1]) {
                animations.push([[j, copy[j + 1]], true]);
                animations.push([[j + 1, copy[j]], true]);
                swap(copy, j, j + 1);
            } else break;
        }
    }
}