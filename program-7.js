// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]

const array = [
 { title: "C++", author: "Bjarne" },
 { title: "Java", author: "James" },
 { title: "Python", author: "Guido" },
 { title: "Java", author: "James" },
];

  // const array =[{ id: 1, num: [1, 2, 3] },
  //   { id: 1, num: [1, 2, 3] },
  //   { id: 2, num: [1, 2, 3, 4] }
  // ];

let ans = [];
for (let i = 0; i < array.length; i++){
  let flag = true;
  // console.log(array[i])
  for (let j = i + 1; j < array.length; j++){
    // console.log(array[i])
    
    if (JSON.stringify(array[i]) === JSON.stringify(array[j])){
      flag = false;
      break;
    }
  }
  if (flag == true) {
    ans.push(array[i]);
  }
} 
console.log(ans)



