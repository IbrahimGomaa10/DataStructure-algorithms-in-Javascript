/// Binary search

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] == val) {
      return middle;
    } else if (arr[middle] < val) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

binarySearch([1, 2, 3, 6, 7, 9, 22, 30, 55, 66], 55);
