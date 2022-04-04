// Url
/*
  https://www.codewars.com/kata/array-plus-array/train/javascript
*/

// Instructions
/*
  I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
  P.S. Each array includes only integer numbers. Output is a number too.
*/


function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b, 0);// reduce with 0 as starting value
}
const result1 = arrayPlusArray([1, 2, 3], [4, 5, 6]);
console.log(result1);//21
//---------------------------------------------------------
function arrayPlusArrayWithoutZero(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b);
}
const result2 = arrayPlusArrayWithoutZero([1, 2, 3], [4, 5, 6]);
console.log(result2);//21
//-----------------------------------------------------------------
function arrayPlusArrayWithoutLambda(arr1, arr2) {
    return arr1.concat(arr2).reduce(addArrayElements);
}
function addArrayElements(a, b) {
    return a + b;
}
const result3 = arrayPlusArray([1, 2, 3],[4, 5, 6]);//21
console.log(result3);//21
//---concationation of arrays learn ------------------------------
//---should learn how to use default parameters of a function
function uniteArrays(arr1, arr2 = [4, 5, 6], arr3) {
    return arr1.concat(arr2).concat(arr3);
}
let result4 = uniteArrays([1, 2, 3], [], [7, 5, 6]);
console.log(result4);//[1, 2, 3, 7, 5, 6]

function uniteArraysWithSpread(...arrays) {
    return [].concat(...arrays);
}
let result5 = uniteArraysWithSpread([1,2],[3,4],[5,6,7],[8,9,10]);
console.log(result5);// [1,2,3,4,5,6,7,8,9,10]

//----unit tests learn ------------------------------------
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

/*describe("Basic tests", () => { 
  it("Testing for fixed tests", () => {
    assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
    assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
    assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
    assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
  })
})*/

//---other-clever--solutions-----------------------------
// accepts indefinite number of arrays
function arrayPlusArray1(...arrays) {
    return [].concat(...arrays).reduce((a,b) => a+b,0)
}

function arrayPlusArray2(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
}
const arrayPlusArray3 = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b, 0);

function arrayPlusArray4(arr1, arr2) {
    var suma=0;
    for(var i=0;i<arr1.length;i++)
      suma+=arr1[i];
    for(var i=0;i<arr2.length;i++)
      suma+=arr2[i];
    return suma;
}

function arrayPlusArray5() {
    var res = 0;

  for (var i = 0 ; i < arguments.length; i+=1) {

    for (var j = 0; j < arguments[i].length ; j +=1) {

      res+=arguments[i][j];
    }
  }
 return res;
}

function arrayPlusArray6(arr1, arr2) {
    var join = arr1.concat(arr2);
  
    function getSum(a,b) {
      return a+b;
    }
      return join.reduce(getSum);
  }
