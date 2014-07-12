
var prompt = require('sync-prompt').prompt;

//Incrementing Function

function increment(x) {
  x++
  return x; 
}

var z = increment(3); 
console.log(z);
var z = increment(7); 
console.log(z);
var z = increment(9); 
console.log(z);
var z = increment(12); 
console.log(z);

// Squaring Function

function square(x) {
  x *= x;
  return x;
}

var y = square(2);
console.log(y);
var y = square(4);
console.log(y);
var y = square(123);
console.log(y);
var y = square(457);
console.log(y);

//Area function

function area (x, y) {
  var z = x * y
    return z; //could be written as return x*y;
}

kitchen = area(10,20);
console.log('The area of the kitchen is ', kitchen);


//Volume Function

function volume (length, width, height) {
 return area(length, width)* height;
}

z = volume(10,10,10);
console.log(z);

//startegy- call function first to inform how you want to build it 

var z;

z = area(square(increment(3) + increment(4)), square(2));
console.log(z);

//sayHello() function

function sayHello() {
  console.log('Hello');
}
sayHello();

// makeUpper("takes string") ---> return uppercase

function makeUpper(string) {
 return string.toUpperCase();
}
console.log(makeUpper('hello'));

//Drinking Age Function

function canDrink(age) {
  if (age < 21){
    return false;
  }else {
    return true;
  }
}

console.log(canDrink(17));


// letterGrade (0-100) ---A,B,C,D, F 90 -100 is A 
// 80 -89 b
// 70 -79 c
// 60- 69 d
// 0-59 f

var grade = prompt('What is your grade 1-100? ');

function letterGrade(num) {
  if (num >= 90) {
    return 'grade is A';
  } else if ( num >= 80) {
    return 'grade is B';
  } else if (num >= 70) {
    return 'grade is C';
  }  else if (num >= 60) {
    return 'grade is D';
  } else if (num <= 59) {
    return 'grade is F';
  } else {
    return 'That was not a proper input';
  }
}

var z;

z = letterGrade(grade);

console.log(z);


//  addTax function (total, tax) convert whole number to pecent 

var cost =prompt("How much did it cost (total): ");
var tip = prompt("The tax was (%): ");
cost = parseInt(cost);
tax = parseInt(tip);

function addTax(total, tax) {
  return total =  total * (tax/100);
}

var z = addTax(cost, tip)

console.log('Your tip is '+ z+ ', your total with tip is: ' + (cost + z));


// sum of array function

hello = [9,3, 5];
numbers  = [1, 2, 3, 4,5,7,8,9];
starting = 0;// for the most part this variable should go inside the function which refers to it 

function sum(array) { 
  for (i = 0; i < array.length; i ++) {
    starting += array[i];
  }
  return starting;
}

var z = sum([4, 5, 7]);

console.log(z);


// factorial function

// create function factorial() that takes number and gives
// you its factorial 5 would be the sume of 5 * 4 * 3 * 2 *1 


function factorial(n) {  
 product = 1;
  for (i = 2; i<=n; i++){
  product*=i;
  }
  return product;
}

z = factorial(3);

console.log(z);


//rollDie function

//Math.random()---> 0-1 to get a random number between 1-10 multiply 
//random by 10. Random is a float. 
//rollDie() 6 sided die --> 1- 6 trying to get a random number between 1 
//and six

function rollDie(){
 return Math.floor(Math.random() * 6) +1;
}

function isPair(roll1, roll2) {
  return roll1 === roll2;
  } 

var z;

for(var i = 0; i < 10; i++) {
  z = rollDie();
  console.log('roll: ', z);
}


// isPar(roll1, roll2) ex. (3,3) true
// 10,000 dise rolls --> count #pairs in those rolls
// countPairs(10,000)


function countPairs(n){
  count  = 0;
  for(var i = 0; i<n; i++){
  if (isPair(rollDie(),rollDie())){
    count++;
  }
}
  return count;
}

z = countPairs(10000);
console.log(z);
























































































