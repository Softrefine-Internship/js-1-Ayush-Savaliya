// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

const arr1 = [1, 2, 3, 4 ,[4,5], 5, 6];
const arr2 = [3, 4, 5, 7,[4,5]];
removeDuplicate(arr1, arr2);

function removeDuplicate(arr1, arr2) {
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