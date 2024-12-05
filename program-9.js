// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let map = new Map();
let j;
let i;
for (i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    val = map.get(arr[i]);
      map.set(arr[i], val + 1);
  } else {
    map.set(arr[i], 1);
  }
}

max = 0;
k = null;
map.forEach((val, key, map) => {
  if (val > max) {
    k = key;
    max = val;
  }
});
console.log(k, " : ", max, " Times");
