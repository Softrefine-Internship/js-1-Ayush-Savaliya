// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

function removeDuplicate(arr) {
  let array = [];
  let i;
  for (i = 0; i < arr.length - 1 ; i++){
    if (arr[i] !== arr[i + 1]) {
      array.push(arr[i]);
    }
  }
  array.push(arr[i]);
  console.log(`Union of array =`);
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

function unionArray(arr1 , arr2) {
  for (let i = 0; i < arr2.length; i++){
    arr1.push(arr2[i]);
  }
  console.log(arr1)
  sortArray(arr1);
}

const arr1 = [1, 2, 3]
const arr2 = [100, 2, 1, 10];
unionArray(arr1,arr2);