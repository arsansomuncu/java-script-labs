var OurDog = {
  "name" : "camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything"]
};

// dot notation

var testObj{
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

// bracket notation

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj["hat"];
var shirtValue = testObj["shirt"];


// variables in objects

var testObj = {
  12: "namath",
  16: "montana",
  19: "unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];


// updating object properties

var ourDog = {
  "name": "camper",
  "legs": 4,
  "trails": 1,
  "friends": ["everything!"]
};

ourDog.name = "happy camper"; // name: happy camper

// add new properties to object 
var ourDog = {
  "name": "camper",
  "legs": 4,
  "trails": 1,
  "friends": ["everything!"]
};
ourDog.bark = "bow-wow"; // "bark": "bow-wow"

delete ourDog.bark; // delete properties from the object


// objects for lookups
function phoneticLookup(val){
  var result = "";

  var lookup {
    "alpha": "adams",
    "beta": "boston",
    "gamma": "chicago",
    "delta": "denver",
    "echo": "easy"
    };
    
    result = lookup[val];
    return result;

    console.log(phoneticLookup("gamma")); // chicago
    
}


// testing objects for properties
var myObj = {
  gift: "ponny",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp){
  if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  }
  else{
    return "not found";
  }
}


// nested objects
var myStorage = {
  "car":{
    "inside":{
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
}

var gloveBoxContents = myStorage.car.inside["glove box"] 
console.log(gloveBoxContents) // maps












