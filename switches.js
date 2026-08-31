function testInSwitch(val){
  var answer = "";
  switch(val){
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

console.log(testInSwitch(1)); // alpha
console.log(testInSwitch(2)); // beta
console.log(testInSwitch(3)); // gamma
console.log(testInSwitch(4)); // delta


// usage of default keyword

function switchOfStuff(val){
  var answer = "";
  switch(val){
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "car";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}
console.log(switchOfStuff("d")); // stuff
