// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

let ans = [];
const array = function (arr) {

    for (let i = 0; i < arr.length; i++){
      // if (arr.length > 2 && arr.length != 1) {
      //   array(arr[i]);
      // }
      // else {
      //   console.log(arr[i])
      // }
      console.log(arr[i].length)
    }
  
  // console.log(ans)
  return ans;
}
const sampleArray = [1, 2,[3, 4], [5, [6, 7]]];
console.log(array(sampleArray))
// const outputArray = outputArray.push(sampleArray);
// console.log(sampleArray)
