const quicksort = (arr) => {
    quicksortStep(arr, 0, arr.length - 1);
};

const quicksortStep = (arr, left, right) => {
    if (left >= right) {
        return;
    }

    const pivot = Math.floor((left + right) / 2);
    const index = partition(arr, left, right, arr[pivot]);
    quicksortStep(arr, left, index - 1);
    quicksortStep(arr, index, right);
};

const partition = (arr, left, right, pivot) => {
    while (left <= right) {
        while (arr[left] < pivot) {
            left = left + 1;
        }

        while (pivot < arr[right]) {
            right = right - 1;
        }

        if (left <= right) {
            swap(arr, left, right);
            left = left + 1;
            right = right - 1;
        }
    }

    return left;
};

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};