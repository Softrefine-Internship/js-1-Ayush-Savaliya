// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

const arr1 = [1, 0, 2, 3, 4];
const arr2 = [3, 5, 6, 7, 8, 13];
const opArr = [];
let i;
const arr1Len = arr1.length;
const arr2Len = arr2.length;

if (arr1Len < arr2Len) {
  for (i = 0; i <arr1Len; i++){
    opArr.push(arr1[i] + arr2[i]);
  }
  for (let j = i; j < arr2Len; j++){
    opArr.push(arr2[j]);
  }
} else {
  for (i = 0; i <arr2Len; i++){
    opArr.push(arr1[i] + arr2[i]);
  }
  for (let j = i; j < arr1Len; j++){
    opArr.push(arr1[j]);
  }
}
console.log(opArr)
