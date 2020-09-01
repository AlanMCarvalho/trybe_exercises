
let n = 5;
let i;
let j;
let lineInput = '';
let symbol = '*';

let midOfMatrix = (n + 1) / 2; 
let controlLeft = midOfMatrix; 
let controlRight= midOfMatrix; 

for ( i= 0; i <= midOfMatrix; i += 1) {
  for (j = 1; j <= n; j += 1) {
    if (j > controlRight && j < controlLeft) {
      lineInput = lineInput + symbol;
    } else {
      lineInput = lineInput + ' ';
    }
  }
  console.log(lineInput);
  lineInput = '';
  controlRight -= 1;
  controlLeft += 1;
};