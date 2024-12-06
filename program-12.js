// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]


function difference(arr1, arr2) {
  let ans = [];
  for (let i = 0; i < arr1.length; i++){
    flag = true;
    for (let j = 0; j < arr2.length; j++){
      if (JSON.stringify(arr1[i]) == JSON.stringify(arr2[j])) {
        flag = false;
        break;
      }
    }
    if (flag == true) {
      ans.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++){
    flag = true;
    for (let j = 0; j < arr1.length; j++){
      if (JSON.stringify(arr2[i]) == JSON.stringify(arr1[j])) {
        flag = false;
        break;
      }
    }
    if (flag == true) {
      ans.push(arr2[i]);
    }
  }
  console.log(ans)
}

// const arr1 = [1, { flag: true }, 3];
// const arr2 = [100, 2, 1, 10,{flag: false}];
const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];
difference(arr1,arr2);