var firstName = "arsan";
var lastName = "somuncu";

/* escaping literal quotes */
var myStr = "I am a "double quoted" string inside "double quotes"";
var myStr = "I am a \"double quoted\" string inside \"double quotes\""
console.log(myStr)

/*****
escape sequences in strings 

\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

*****/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"

/* concatenate strings */ 
var ourStr = "I come first" + "I come second";
console.log(ourStr)

var ourStr = "I come first";
ourStr += "I come second";
comsoe.log(ourStr)

var ourName = "arsan somuncu";
var ourStr = "hello, our name is " + ourName + ", how are you?";
console.log(ourStr)


/* append variables to strings */
var anAdjective =  "awesome!";
var ourStr = "arsan is"; 
ourStr += anAdjective;


/* length of a string */
var firstName = "0"; 
var lastName =  "arsan";

firstNameLength = firstName.length;
console.log(firstNameLength);


/* bracket notation */ 
var firstName = "0"; 
var lastName =  "arsan";

firstLetterofFirstName = firstName[0];
console.log(firstLetterofFirstName);


/* string immutability */
var myStr = "jello world";
myStr[0]  = 'H'; /* invalid approach, instead write the whole correct string. */


/* find last character */
var firstName = "arsan"; 

var lastLetterofFirstName = firstName[firstName.length - 1];
console.log(lastLetterofFirstName);



/* word blanks */
function wordBlanks = (myNoun, myAdjective, myVerb, myAdverb) {
var result = "";
return result; }

console.log(wordBlanks("dog", "big", "ran", "quickly"));


function wordBlanks = (myNoun, myAdjective, myVerb, myAdverb) {
var result = "The" + myAdjective + "" + myNoun + "" + myVerb + "to the store" + myAdverb;
return result; }

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike","slow","flew","slowly"));








