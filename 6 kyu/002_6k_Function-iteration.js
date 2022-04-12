//
/*
  Function iteration
*/

// Url
/*
  https://www.codewars.com/kata/function-iteration/train/javascript
*/

// Instructions
/*
  The purpose of this kata is to write a higher-order function returning a 
  new function that iterates on a specified function a given number of times. 
  This new function takes in an argument as a seed to start the computation from.

  For instance, consider the function getDouble. 
  When run twice on value 3, yields 12 as shown below.

  getDouble(3) => 6
  getDouble(6) => 12
  Let us name the new function createIterator and we should be able 
  to obtain the same result using createIterator as shown below:

  var doubleIterator = createIterator(getDouble, 2); // This means, 
  it runs *getDouble* twice
  doubleIterator(3) => 12
  For the sake of simplicity, all function inputs to createIterator 
  would be functions returning a small number and number of iterations would 
  always be integers.
*/


var createIterator1 = function(func, n) {
  return function() {
    let a = func(...arguments);
    for (let i = 0; i < n - 1; i++) {
      a = func(a);
    }
    return a;
  };
};


const createIterator2 = (func, n) => y => {
  console.log(y);
  for (let i = 0; i < n; i++) y = func(y);
  return y;
};

var getDouble = (n) => n+n;

var getDoubleIterator = createIterator1(getDouble,2);
console.log(getDoubleIterator(3));// 12

var getDoubleIterator = createIterator2(getDouble,2);
console.log(getDoubleIterator(3));//3 12



///---other good solutions for example 
function createIterator3(func, n) {
  return function(x) {
    if (n < 1) return undefined
    if (n === 1) return func(x)
    for (var i = 0; i < n; i++) {
      x = func(x)
    }
    return x
  }
}
var getDoubleIterator = createIterator3(getDouble,2);
console.log(getDoubleIterator(3));// 12


function createIterator4(func, n) {
  return (n === 1)? func:x => func(createIterator4(func, n - 1)(x));
};
var getDoubleIterator = createIterator4(getDouble,2);
console.log(getDoubleIterator(3));// 12

var createIterator5 = function (func, n) {
  return function(input){
    var i = 0;
    while (i<n){
      input = func.call(this, input); 
      i++;
    }
    return input;
  }
};
var getDoubleIterator = createIterator5(getDouble,2);
console.log(getDoubleIterator(3));// 12

const createIterator6 = (f, n) => 
  j => [...Array(n)].reduce((r,_) => f(r), j);
var getDoubleIterator = createIterator6(getDouble,2);
console.log(getDoubleIterator(3));// 12

/*tests for practise
describe("Iterator for 'getDouble' function", function() {
  var getDouble = function (n) {
      return n + n;
    };
    
  it("Running the iterator for once", function() {
    var doubleIterator = createIterator(getDouble, 1);
    
    Test.assertEquals(doubleIterator(3), 6, "Returns double of 3 as 6");
    Test.assertEquals(doubleIterator(5), 10, "Returns double of 5 as 10");
  });
  
  it("Running the iterator twice", function() {
    var getQuadruple = createIterator(getDouble, 2);
    
    Test.assertEquals(getQuadruple(2), 8, "Returns quadruple of 2 as 8");
    Test.assertEquals(getQuadruple(5), 20, "Returns quadruple of 5 as 20");
  });
});

describe("Iterator for 'increment' function", function() {
  var increment = function (n) {
      return n + 1;
    };
    
  it("Running the iterator for once", function() {
    var incrementer = createIterator(increment, 1);
    
    Test.assertEquals(incrementer(3), 4, "Increments 3 to 4");
    Test.assertEquals(incrementer(5), 6, "Increments 5 to 6");
  });
  
  it("Running the iterator thrice", function() {
    var doubleIncrementer = createIterator(increment, 3);
    
    Test.assertEquals(doubleIncrementer(2), 5, "Increments 2 to 5");
    Test.assertEquals(doubleIncrementer(5), 8, "Increments 5 to 8");
  });
});

describe("Iterator for 'getNext' function", function() {
  var getNext = function (n) {
      return (n % 2 === 0) ?
        (n / 2) :
        (n + 1) / 2;
    };
  
  it("Running the iterator twice", function() {
    var iterator = createIterator(getNext, 2);
    
    Test.assertEquals(iterator(100), 25, "100 to 25");
    Test.assertEquals(iterator(99), 25, "99 to 25");
  });
});
*/