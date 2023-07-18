// Given an unsorted array, return the kth largest element. It is the kth largest element in sorted order, not the kth distinct element.

// Constraints
// Can we get an array where k is larger than array length?: No, assume an answer is always available

// Test cases
// [5, 3, 1, 6, 4, 2]    k = 2    [1, 2, 3, 4, 5, 6](5)
// [2, 3, 1, 2, 4, 2]    k = 4    [1, 2, 2, 2, 3, 4](2)
// [3]                   k = 1    [3]

const quickSort = (array, left, right) => {
    if (left < right) {
        const partitionIdx = partition(array, left, right);

        quickSort(array, left, partitionIdx - 1);
        quickSort(array, partitionIdx + 1, right);
    }
}

const quickSelect = (array, left, right, idxToFind) => {
    if (left < right) {
        const partitionIdx = partition(array, left, right);

        if (partitionIdx === idxToFind) {
            return array[idxToFind];
        }

        if (idxToFind < partitionIdx) {
            return quickSelect(array, left, partitionIdx - 1, idxToFind);
        }

        return quickSelect(array, partitionIdx + 1, right, idxToFind);
    }
}

const partition = (array, left, right) => {
    const pivotElement = array[right];
    let partitionIdx = left;

    for (let j = left; j < right; j++) {
        if (array[j] < pivotElement) {
            swap(array, partitionIdx, j);
            partitionIdx++;
        }
    }

    swap(array, partitionIdx, right);

    return partitionIdx;
}

const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// O(n log(n)) - O(log(n))
const getKthLargest = (array, k) => {
    const indexToFind = array.length - k;
    quickSort(array, 0, array.length - 1);

    return array[indexToFind];
}

// O(n) - O(1)
const optimalGetKthLargest = (array, k) => {
    const indexToFind = array.length - k;

    return quickSelect(array, 0, array.length - 1, indexToFind);
}