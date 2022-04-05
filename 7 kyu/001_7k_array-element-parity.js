// Array element parity
/*In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:
[1, -1, 2, -2, 3] => 3
3 has no matching negative appearance
[-3, 1, 2, 3, -1, -4, -2] => -4
-4 has no matching positive appearance
[1, -1, 2, -2, 3, 3] => 3
(the only-positive or only-negative integer may appear more than once)*/

// https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript

function solve(arr) {
  return arr.find((num) => !arr.includes(Math.abs(num)))||
        arr.find((num) => !arr.includes(-1*num));
}

let result = solve([-110, 110, -38, -38, -62, 62, -38, -38, -38]); // -38
console.log(result);//-38
result = solve([1,-1,2,-2,3,3]);
console.log(result);//3

//---here to learn ---
//-1- how to find elements 
//--2-- arrow functions
//--array-- includes --function

///----other interesting solutions-- 
function solve1(arr){
  for (var i=0; i<arr.length; ++i)
    if (arr.indexOf(-arr[i])==-1)
      return arr[i];
};
result = solve1([1,-1,2,-2,3,3]);
console.log(result);

function solve2(arr){
  let notPairNumbers = 0;
  let number = arr.reduce((total, num) => {
    if (num >= 0)
      notPairNumbers++
    else
      notPairNumbers--
    return total + num;
  }, 0)
  return number / Math.abs(notPairNumbers)
};
result = solve2([1,-1,2,-2,3,3]);
console.log(result);//3

const solve3 = arr => [...new Set(arr)].reduce((p, c) => p + c);
result = solve3([1,-1,2,-2,3,3]);
console.log(result);//3


function solve4(arr){
  return arr.filter(e => !arr.includes(-e))[0]
};
result = solve4([1,-1,2,-2,3,3]);
console.log(result);//3

function solve5(arr){
  let arr1 = arr.filter(el => !arr.includes(el * -1))
  return arr1[0];
};
result = solve5([1,-1,2,-2,3,3]);
console.log(result);//3

function solve6(arr) {
  const s = new Set(arr);
  for (const x of s) {
    if (!s.has(-x)) return x;
  }
};
result = solve6([1,-1,2,-2,3,3]);
console.log(result);//3

const solve7=a=>a.find(e=>!a.includes(-e));
result = solve7([1,-1,2,-2,3,3]);
console.log(result);//3

/*--- tests for learn - need to write own unit tests !!!
describe("Basic tests", function(){
  Test.assertEquals(solve([1,-1,2,-2,3]),3);
  Test.assertEquals(solve([-3,1,2,3,-1,-4,-2]),-4);
  Test.assertEquals(solve([1,-1,2,-2,3,3]),3);
  Test.assertEquals(solve([-110,110,-38,-38,-62,62,-38,-38,-38]),-38);
  Test.assertEquals(solve([ -9,-105,-9,-9,-9,-9,105]),-9);
  });
  
  describe("Random tests", function(){
  for (var i = 0; i < 100; i++){
    arry = randomNums()
    var expected = solver_u7i8(arry)
    Test.assertEquals(solve(arry),expected); 
  }
  });
  
  function solver_u7i8(ar){
      var arr = ar.slice(0);    
      var neg = 0, pos = 0, sum = 0;
      for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
      arr[i] < 0 ? neg++ : pos++
    }
      return (sum/Math.abs(neg - pos));
  };
  
  function shuffle(array) {
    var random = array.map(Math.random);
    array.sort(function(a, b) {
      return random[array.indexOf(a)] - random[array.indexOf(b)];
    });
  }
  
  function randomNums(){
      var arr = []; var c = 0; var res = [];
      var len = Math.floor(Math.random() * 100) + 50;
      while (c < len){
          var r = Math.floor(Math.random() * 1000) + 1;
          arr.push(r); 
          arr.push(r*-1)
          c++;
      };
      var temp = Array.from(new Set(arr));    
      while (true){
        var r = Math.floor(Math.random() * 1000) + 1;
        if (temp.includes(r))
          continue;
        else 
            break;
      };   
      var neg = Math.floor(Math.random() * 2) == 0 ? -1 : 1;
      var len = Math.floor(Math.random() * 5) + 1;
      for (var i = 0; i < len; i++){
          res.push(r * neg)
      }
      shuffle(res)
      return res;
  }
  */