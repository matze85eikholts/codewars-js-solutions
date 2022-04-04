// Name
/*
  Abbreviate a Two Word Name
*/

// Url
/*
  https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript
*/

// Instructions
/*
  Write a function to convert a name into initials. 
  This kata strictly takes two words with one space in between them.

  The output should be two capital letters with a dot seperating them.

  It should look like this:

  Sam Harris => S.H

  Patrick Feeney => P.F
*/

function abbrevName(name) {
  return (name.split(' ')[0][0]+'.'+name.split(' ')[1][0]).toUpperCase();
}
console.log(abbrevName('Sam Harris'));

//------other clever solutions of this task
function abbrevNameMapLearn(name) {
  return name.split(' ').
      map(a => a.substr(0,1).toUpperCase());
}
console.log(abbrevNameMapLearn('Sam Harris')); //[ 'S', 'H' ]

const abbrevName1 = (name) => name.split(' ').map(i => i.charAt(0).toUpperCase()).join('.');
console.log(abbrevName1('Mam Parris')); //M.P

const abbrevName2 = (name) => {
  return name.split(" ").map(name => name[0].toUpperCase()).join(".");
};
console.log(abbrevName2('nam rarris')); //N.R

const abbrevName3 = name => name.match(/\b\w/g).join('.').toUpperCase();// \b -search at the beginning of the word
console.log(abbrevName3('nam rarris')); //N.R

abbrevName4 = n => n.replace(/(.).* (.).*/, '$1.$2').toUpperCase(); ///??? Should learn precisely this regex
console.log(abbrevName4('Mam harris')); //N.R

function abbrevName5(name){
  return name.match(/\b(\w)/g).toString().toUpperCase().replace(',', '.');
}
console.log(abbrevName5('Peter Johnsons'));



/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(abbrevName("Sam Harris"), "S.H");
    assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
    assert.strictEqual(abbrevName("Evan Cole"), "E.C");
    assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
    assert.strictEqual(abbrevName("David Mendieta"), "D.M");

    assert.strictEqual(abbrevName("george clooney"), "G.C");
    assert.strictEqual(abbrevName("marky mark"), "M.M");
    assert.strictEqual(abbrevName("eliza doolittle"), "E.D");
    assert.strictEqual(abbrevName("reese witherspoon"), "R.W");
  });
});

describe("Random tests", () => { 
  
  function makeWord(min, max) {
    let array = [];
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let length = Math.ceil((Math.random() * max) + min);
    for( let i=0; i < length; i++ ) {
        array.push(possible[(Math.floor(Math.random() * possible.length))]);
    }
    return array.join("");
  }
  
  function makeString() {
    return makeWord(1, 20) + " " + makeWord(1, 20)
  }

  function randomTest(name){
    let arr = name.split(" ");
    return arr[0][0].toUpperCase() + "." + arr[1][0].toUpperCase()
  }
  
  it("Testing for 200 random tests", () => {
    for(let i = 0; i < 200; i++){
      let testString = makeString();
      assert.strictEqual(abbrevName(testString), randomTest(testString), `Testing for name = ${JSON.stringify(testString)}`);
    }
  })
})
*/
