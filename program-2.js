// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

let array =[1, 2, [3, 4], [5, [6, 7]]];
// const ans = array.flat(Infinity);
const ans = flattenArray(array)
function flattenArray(arr) {
    let ans = [];

    arr.forEach(i => {
        if (Array.isArray(i)) {
            ans = ans.concat(flattenArray(i));
        } else {
            ans.push(i);
        }
    });

    return ans;
}

console.log(ans); 