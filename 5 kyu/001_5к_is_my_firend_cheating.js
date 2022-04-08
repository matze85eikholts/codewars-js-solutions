/*

https://www.codewars.com/kata/5547cc7dcad755e480000004/train/javascript

Description:
A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

(See examples of returns for each language in "RUN SAMPLE TESTS")

Examples:
removNb(26) should return [(15, 21), (21, 15)]
or

removNb(26) should return { {15, 21}, {21, 15} }
*/

const n = 26; 
let sum = 0; 
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log(sum);
console.log(21.1%1);
console.log(20%1);

for (var a = 1; a <= n; a++) {
    var answer = [];
    var b = (n * (n + 1) / 2 - a) / (a + 1);
    //console.log(b);
    if (b % 1 === 0 && b <= n) answer.push([a, b]);
}

//---here can be repeated the push, shift and unshift commands
//b % 1 === 0 - to check that a number is not a float and has no any part after the .

a = 2; 
b = 3;
c = 4
var answer = [0,0,0];
answer.push(a);
console.log(answer);//[0,0,0,2]
answer.unshift(c);
console.log(answer);//[4,0,0,0,2]
answer.shift();
console.log(answer);//[0,0,0,2]

//-----other solutions --------------
function removeNb1 (n) {
  var sum = n * (n+1) / 2;
  var result = [];
  for(var a = 1; a < n; a++) {
    if ( (sum-a) % (a+1) === 0) {
      var b = (sum-a)/(a+1);
      if (b < n) result.push([a,b]);
    }
  }
  return result;
}

answer = removeNb1(26);
console.log(answer);

const removeNb2 = n => [...Array(n)]
            .map((_, idx) => ((n ** 2 + n) / 2 - ++idx) / ++idx)
            .reduce((pre, val, idx) => Number.isInteger(val) && val < n ? 
                [...pre, [++idx, val]] : pre, []);
answer = removeNb2(26);
console.log(answer);

const removeNb3 = (n) => {
    let x = 0, y = n - 1, tmp;
    const res = [], sum = n * (n + 1) / 2;
    while (x < y) {
      tmp = x * y + x + y;
      if (tmp === sum) res.push([x, y], [y, x]);
      tmp < sum ? x++ : y--;
    }
    return res.sort((a, b) => a[0] - b[0]);
  }
answer = removeNb3(26);
console.log(answer);

function removeNb4( n ) {
    const sequence = Array.from( new Array( n ), i => 1 ).map( ( _, index ) => index + 1 ); 
    const sum      = sequence.reduce( ( sum, number ) => sum + number, 0 );                 
    return sequence.reduce( ( result, a ) => {                                             
      const b = ( sum - a ) / ( a + 1 );                                                    // (sum - a - b) == (a * b)
      if (b < n && Number.isInteger(b) && sum - a - b === a * b) {                          
        result.push( [ a, b ] )
      }
      return result;
    }, [ ] );
  }

answer = removeNb4(26);
console.log(answer);