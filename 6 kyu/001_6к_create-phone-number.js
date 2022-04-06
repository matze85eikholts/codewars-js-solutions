// Name
/*
  Create Phone Number
*/

// Url
/*
  https://www.codewars.com/kata/create-phone-number/train/javascript
*/

// Instructions
/*
  Write a function that accepts an array of 10 integers (between 0 and 9), 
  that returns a string of those numbers in the form of a phone number.

  Example:
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  The returned format must be correct in order to complete this challenge.
  Don't forget the space after the closing parenthesis!
*/

function createPhoneNumber(numbers) {
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}
let result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(result); //(123) 456-7890

//---repeat replace function ----
function replaceNumbers (numbers) {
  return numbers.join('').replace(/(\d{3})/,'+7 ($1)');
}
result = replaceNumbers([7, 0, 5]);
console.log(result)// +7 (705)

//------other useful colutions------ 
function createPhoneNumber1(numbers){
  return numbers.reduce(
    (p,c) => p.replace('x',c), "(xxx) xxx-xxxx"
  ); //hard to undersand the reduce function here
}
result = createPhoneNumber1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(result); //(123) 456-7890

function createPhoneNumber2(numbers){
  return '(' + numbers.slice(0,3).join('') + ') ' 
          + numbers.slice(3,6).join('') + '-' 
          + numbers.slice(6).join('');// this solution is much easier to understand
}

result = createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(result); //(123) 456-7890

createPhoneNumber3 = n => '(###) ###-####'.replace(/#/g,() => n.shift());
result = createPhoneNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(result);//(123) 456-7890

function createPhoneNumber4(numbers){
  numbers.unshift("(");
  numbers.splice(4, 0, ")", " ");
  numbers.splice(9, 0, "-");
  return numbers.join("");
}

result = createPhoneNumber4([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(result);//(123) 456-7890

function createPhoneNumber5(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
result = createPhoneNumber5([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(result);//(123) 456-7890

function createPhoneNumber6(numbers){
  var format = "(xxx) xxx-xxxx";
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  return format;
}
result = createPhoneNumber6([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(result);//(123) 456-7890

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Create Phone Number", () => {
  it("Fixed tests", () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  });

  it("Random tests", () => {
    const sol = a => `(${a.slice(0, 3).join('')}) ${a.slice(3, 6).join('')}-${a.slice(6).join('')}`;
    for (let i = 0; i < 100; i++) {
      const a = Array.from({ length: 10 }, _ => Math.floor(Math.random() * 10)),
            exp = sol(a);
      assert.strictEqual(createPhoneNumber(a), exp, `Testing for numbers = ${JSON.stringify(a)}`);
    }
  })
});*/