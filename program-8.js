// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.

const ip = "025468";
console.log(ip)
let op = [];
let i;
for (i= 0; i < ip.length - 1; i++){
  if ((ip[i] % 2 == 0) && (ip[i + 1] % 2 == 0)) {
    op.push(ip[i]);
    op.push('-');
  } else {
    op.push(ip[i]);
  }
}
op.push(ip[i]);
console.log(op.join(""))