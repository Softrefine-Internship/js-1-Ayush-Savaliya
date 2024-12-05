// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

function abc(arr1 , arr2) {
  for (let i = 0; i < arr2.length; i++){
    arr1.push(arr2[i]);
  }
  return arr1;  
}
const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];
const array = [];

let ans = [];
for (let i = 0; i < arr1.length; i++){
  if (!arr2.includes(arr1[i])) {
    array.push(arr1[i]);
  }
}
for (let i = 0; i < arr2.length; i++){
  if (!arr1.includes(arr2[i])) {
    array.push(arr2[i]);
  }
}
console.log(array)