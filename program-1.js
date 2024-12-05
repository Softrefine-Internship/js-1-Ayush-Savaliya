// Write a JavaScript program to clone an array.

const arr1 = [1, 5, 3, 7, 6];
let arr2=[];

for (let i = 0; i < arr1.length; i++){
  arr2.push(arr1[i]);
}
console.log(arr1)
console.log(arr2)