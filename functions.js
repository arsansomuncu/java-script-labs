/* reuability of functions */
function ourReusableFunction() {
console.log("heyya, world");
}
ourReuableFunction();


// arguments
function ourFunctionWithArgs(a,b) {
  console.log(a-b)
} 
ourFunctionWithArgs(10,5); // 5


// global scope
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
var output = "";
if (typeof myGlobal != "undefined") {
  output += "myGlobal: " + myGlobal; 
}
  
if (typeof oopsGlobal != "undefined") {
  output += "oopsGlobal: " + oopsGlobal;
}
 console.log(output) 
}

fun1() // 5
fun2() // 10


// local scope
function myLocalScope() {
  var myVar = 5;
  console.log(myVar) // 5
}
myLocalScope();
console.log(myVar) // myVar is not defined.


// return a value 
function minusSeven(num){
  return num - 7; 
}
console.log(minusSeven(10)) // 3

function timesFive(num){
  return num * 5;
}
console.log(timesFive(5)) // 25


// undefined value returned
var sum = 0;
function addThree() {
return sum += 3 ;
}
function addFive(){
return sum += 5; // undefined
}

// assignment with a returned value 
var changed = 0;
function change(num) {
return (num + 5) / 3; 
}
changed = change(10); // 5


// stand in line
function nextInLine(arr, item){
  arr.push(item);
  return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("after: " + JSON.stringify(testArr));


// returning boolean values from function

function isLess(a,b){
  if(a<b){
    return true;
  }
  else{
    return false;
  }
}
console.log((10,15)); // true


// returning early pattern from functions

function abTest(a,b){
  if(a<0 || b<0){
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2))
}
console.log(abTest(-2,2)) // undefined




