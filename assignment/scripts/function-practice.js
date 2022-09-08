console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
//used template literal because I was only getting the name back with ex  [return 'Hello,' name]  should it have been [return 'Hello,' + name]?
// Remember to call the function to test
console.log (helloName('Sam'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let sum = firstNumber+secondNumber;
  return sum;
  // return firstNumber + secondNumber;
}

console.log('Test of addNumber function =', addNumbers(5,6));
//note: if you miss comma  it doesnt run.

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
let tripleFactor=num1*num2*num3;
return tripleFactor;
}

console.log('test of triple factor function=',multiplyThree(2,5,6));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
console.log('test of isPositive function for pos:', isPositive(7));
console.log('test of isPositive function for if neg:', isPositive(-2));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
// these were already in here? I wrote the other ones though.

//created array for the remaining questions
let array1=[2, 4, 6, 56, 17];
// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length==0){return 'undefined';}
;
let num=array.length-1;
return array[num];
}

console.log('getLast array value test should say 17:', getLast(array1));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

console.log(array1);
array1.push(879);
console.log(array1);
function find( value, array ){
  for( i=0; i<array.length; i++){
    if(array[i]==value){return true;}
};
  return false;
}
//end function and then test
console.log('test value find', find(56, array1));        

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
for(i=0;i<string.length; i++){
  if (string.charAt(0)==letter){return true;}
};
return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log('isFirstLetter-should say false:', isFirstLetter('b', 'coffee'));
// 9. Function to return the sum of all numbers in an array
let arr2=[3, 5, 1, 66, 4322, 0];
//Array to test during stretch goals.
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for(i=0; i<array.length; i++){sum+=array[i]};
  return sum;
}
console.log('test sumall of arr2, should be 4397:', sumAll(arr2));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let arr3=[2,-1,44,-55,22,221];
console.log(arr3);
function returnAllPositives(array){
  let arrayreturn=[];
  for(i=0; i<array.length; i++){
    if(array[i]>0){arrayreturn.push(array[i]);}
  };
  return arrayreturn;
}
console.log('test return all pos array, should be an array of positives:', returnAllPositives(arr3));
//


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

/* problem=Write a function that takes the base and height of a triangle and return its area.
Notes
The area of a triangle is: (base * height) / 2
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
source: https://edabit.com/challenge/3CaszbdZYGN4otQD8*/

let triangle=0;

function triangleArea(base, height){
  triangle= ((base*height)/2);
  return triangle;
}

console.log('test of triangleArea: result should be 15:', triangleArea(5,6));

console.log('test of triangleArea: result should be 250:', triangleArea(10,50));