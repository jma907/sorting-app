
export function getBubbleAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;

    bubbleSort(array, animations);
    return animations;
}

function bubbleSort(arr, animations) {
    for(var i = 0; i < arr.length; i++){
    
        for(var j = 0; j < ( arr.length - i -1 ); j++){
            
            animations.push([j + 1, j]);
            animations.push([j + 1, j]);

            if(arr[j] > arr[j+1]) {
            
                // If the condition is true then swap them
                var temp = arr[j]

                arr[j] = arr[j + 1]
                arr[j+1] = temp
          }
        }
    }
}



export function getMergeAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxArray, animations);
    return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxArray, animations,) {
    if (startIdx >= endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxArray, middleIdx + 1, endIdx, mainArray, animations);
    merge(mainArray, startIdx, middleIdx, endIdx, auxArray, animations);
}

function merge(mainArray, startIdx, middleIdx, endIdx, auxArray, animations,) {
    let i = startIdx;
    let j = middleIdx + 1;
    let k = startIdx;

    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxArray[i] <= auxArray[j]) {
            animations.push([k, auxArray[i]])
            mainArray[k++] = auxArray[i++]
        } else {
            animations.push([k, auxArray[j]])
            mainArray[k++] = auxArray[j++];
        }
    }
    while (i <= middleIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, i]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, i]);
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxArray[i]]);
        mainArray[k++] = auxArray[i++];
      }
    while (j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([j, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([j, j]);
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxArray[j]]);
        mainArray[k++] = auxArray[j++];
    }
}