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
let ans = [];
for (let i = 0; i < array.length; i++){
  let flag = true;
  for (let j = i + 1; j < array.length; j++){
    if ((array[i].title === array[j].title)&&(array[i].author === array[j].author)){
      flag = false;
      break;
    }
  }
  if (flag === true) {
    ans.push(array[i]);
  }

} 
console.log(ans)
