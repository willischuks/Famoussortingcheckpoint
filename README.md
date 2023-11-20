# Famoussortingcheckpoint
# Insertion Sort

Insertion sort is a simple sorting algorithm that works by iterating through an array and inserting each element into its correct position in the sorted subarray. 
It is similar to sorting playing cards in your hand, where you insert each new card into its correct position among the sorted cards you already hold.

## Algorithm

The insertion sort algorithm works as follows:

1. Iterate through the array, starting from the second element.
2. For each element, compare it to the elements to its left.
3. If the element is smaller than an element to its left, shift the larger elements to the right until the correct position for the element is found.
4. Insert the element into its correct position.

## Example Usage

```javascript
const arr = [5, 2, 4, 1, 3];
insertionSort(arr);
console.log(arr); // Output: [1, 2, 3, 4, 5]


## Performance

Insertion sort has an average time complexity of O(n^2) and a worst-case time complexity of O(n^2).
This means that the algorithm's runtime grows at a quadratic rate with the size of the input array.
In practice, insertion sort is often faster than other sorting algorithms, such as merge sort or quicksort, for small arrays. However, it is not as efficient for large arrays.

## Advantages

* Simple to implement and understand.
* In-place sorting algorithm.
* Efficient for small arrays.

## Disadvantages

* Quadratic time complexity for large arrays.
* Not as efficient as other sorting algorithms, such as merge sort or quicksort, for large arrays.

## Conclusion

Insertion sort is a simple and efficient sorting algorithm that is easy to understand and implement.
It is a good choice for sorting small arrays, but it is not as efficient as other sorting algorithms for large arrays.

