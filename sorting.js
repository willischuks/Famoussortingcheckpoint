function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    let k = 0;

    while (j >= 0 && arr[j] > key) {
        k++;
        const temp = arr[j];

        while (k > 0) {
            arr[j + k] = arr[j + k - 1];
            k--;
        }

        arr[j] = temp;
        j--;
    }

        arr[j + 1] = key;
    }
}

    const arr = [5, 2, 4, 1, 3];
    insertionSort(arr);
  console.log(arr); // Output: [1, 2, 3, 4, 5]
