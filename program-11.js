// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

function unionArray(arr1, arr2) {
  let ans = [];
  for (let i = 0; i < arr1.length; i++){
    flag = true;
    for (let j = 0; j < arr2.length; j++){
      if (JSON.stringify(arr1[i]) === JSON.stringify(arr2[j])) {
        flag = false;
        break;
      }
    }
    if (flag == true) {
      ans.push(arr1[i]);
    }
  }
  console.log(ans.concat(arr2))
}

const arr1 = [1, {flag: false}, 3]
const arr2 = [100, 2, 1, 10,{flag: false}];
unionArray(arr1,arr2);