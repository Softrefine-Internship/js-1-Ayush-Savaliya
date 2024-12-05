// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

function removeDuplicate(arr) {
  let array = [];
  let i;
  for (i = 0; i < arr.length - 1 ; i++){
    if (arr[i] !== arr[i + 1]) {
      array.push(arr[i]);
    }
  }
  array.push(arr[i]);
  console.log(array)
}

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = 1; j < arr.length - i; j++){
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  removeDuplicate(arr);
}
function mergeArray(arr1 , arr2) {
  for (let i = 0; i < arr2.length; i++){
    arr1.push(arr2[i]);
  }
  console.log(arr1)
  sortArray(arr1);
}

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7];
mergeArray(arr1 , arr2);