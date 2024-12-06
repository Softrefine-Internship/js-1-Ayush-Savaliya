/* 
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

function adjacentPlots(arr, n){

    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i - 1] == 0 && arr[i + 1] == 0 && arr[i] != 1)
        {
            arr[i] = 1;
          n--;
          // console.log(n)
          // console.log(i)
        } 
  }
  // console.log(n)
    if (n > 0) {  
      return false;  
    } else {
      return true;
    }
}

// const n = 1; 
// const n = 2; 
const n = 3; 
const arr =  [1,0,0,0,0,0,1,0];
// const arr = [1,0,0,0,1];
console.log(adjacentPlots(arr, n));
