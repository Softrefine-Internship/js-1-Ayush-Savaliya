// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]
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
  console.log(arr)
}

function mergeArray(arr1 , arr2) {
  for (let i = 0; i < arr2.length; i++){
    arr1.push(arr2[i]);
  }
  // console.log(arr1)
  sortArray(arr1);
}

const arr1 = [3, 5, 1];
const arr2 = [4, 2];
mergeArray(arr1 , arr2);