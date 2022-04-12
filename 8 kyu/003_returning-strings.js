
/*
  https://www.codewars.com/kata/returning-strings/train/javascript
*/

// Instructions
/*
  Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

  *[Make sure you type the exact thing I wrote or the program may not execute properly]*  
*/

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

/* 
//---Tests for learning !!!- very good
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
    assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
  })
})

describe("Random tests",() =>{
  
  const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
  const sol=n=>`Hello, ${n} how are you doing today?`;
  const base="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  it("Testing for 40 random tests", () => {
    for (let i=0;i<40;i++){
      const s=Array.from({length:randint(1,30)},a=>base[randint(0,base.length-1)]).join("");
      assert.strictEqual(greet(s),sol(s),`Testing for ${JSON.stringify(s)}`)
    }
  })
})*/