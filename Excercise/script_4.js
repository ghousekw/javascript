/**
 * Indexing starting at 0,
 * If 2nd argument is negative, it starts indexing at end of string,
 * substr(start,length) in this, if first argument is negative then it taken as '0' index
 * slice will cut the string if we specify the indexes
 * split() returns the string in an array format
 * indexOf(), used inside method when you want search for a character or characters inside a string, return index of first occurrence if found,if not returns "-1"
 * latIndexOf(), returns similar to indexOf but returns last occurrence of the string
 * In both of these indexOf and lastIndexOf we can also specify index from where to start.
 * toUpperCase(),toLowerCase()
 */
var theBigString = "Pulp Fiction is an awesome movie!";
document.writeln(theBigString.slice(5, 12));
// Fiction

document.write(theBigString.slice(0, -6));
// Pulp Fiction is an awesome 

document.writeln(theBigString.slice(-14, -7));
// awesome
document.writeln(theBigString.slice(-7,-1));
// movie

console.log(theBigString.substr(5));//'Fiction is an awesome movie!'
console.log(theBigString.substr(-5));//'ovie!'
console.log(theBigString.substr(13,2));//'is

var text = "thisisatext";
var result = text.split("");
console.log(result);  //(11) ["t","h","i","s","i","s","a","t","e","x","t"]
console.log(result.length); //11
console.log(theBigString.split(" "));
//(6) ["Pulp","Fiction","is","an","awesome","movie"]

var question = "I wonder what the pigs did to make these birds so angry?";
console.log(question.indexOf("pigs")); // 18
console.log(question.indexOf("Niga")); // -1
console.log(question.lastIndexOf("wood")); // 65

var phrase = "There are 3 little pigs.";

console.log(phrase.toUpperCase()); // 'THERE ARE 3 LITTLE PIGS.'
console.log(phrase.toLowerCase()); // 'there are 3 little pigs.'