function ourTrueorFalse (isItTrue) {
  if(isItTrue){
    return "yes, it's true";
  }
  return "no, it's false";
}
function trueOrFalse (wasThatTrue) {
  if(wasThatTrue){
    return "yes, that was true";
  }
  return "no, that was false";
}
console.log(trueOrFalse(true)); // true


// equality operators

function testEqual(val){
  if(val == 12) {
    return "equal";
  }
  return "not equal";
}
console.log(testEqual(10)); // not equal 


// strict equality 

function compareEquality(a,b){
  if(a==b){ // ===, then not equal.
    return "equal";
  }
  return "not equal";
}
console.log(compareEquality(10,"10")) // equal


// inequality case 

function testEqual(val){
  if(val != 99) {
    return "not equal";
  }
  return "equal";
}
console.log(testEqual(10)); // not equal 



// greater & less

function testGreaterThan(val){
  if(val > 100){
    return "over 100";
  }
  if(val > 10){
    return "over 10";
  }
 return "10 or under";  
}
console.log(testGreaterThan(10)); // 10 or under


function testLessThan(val){
  if(val < 25){
    return "under 25";
  }
  if(val < 55){
    return "under 55";
  }
 return "55 or over";  
}
console.log(testLessThan(70)); // 55 or over


// and - or operators

function testLogicalAnd(val){
  if(val <= 50 && val >= 25){
    return "yes";
  }
  return "no";
}
console.log(testLogicalAnd(10)); // no
console.log(testLogicalAnd(30)); // yes 

function testLogicalOr(val){
  if(val < 10 || val > 20){
    return "outside";
  }
  return "inside"
}
console.log(testLogicalOr(15)); // inside


// else 

function testElse(val){
  if(val > 5){
    return "bigger than 5";
  }
  else{
    return "5 or smaller";
  }
}
testElse(4); // 5 or smaller


// else if 

function testElseIF(val){
  if(val > 10){
    return "greater than 10";
  }
  else if (val < 5){
    return "smaller than 5";
  }
else{
  return "between 5 and 10";
}
}
testElseIf(7); // between 5 and 10



























