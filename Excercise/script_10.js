/**
 * we can pass arbitrary values to boolean objects such as null, undefined, empty/nothing,
 * 0, an empty string, NaN, and (of course) false.
 * If you are evaluating it an object like new Boolean(new Boolean()) it always return true, because of it mere existence
 * It doesn't matter that the object you are evaluating is secretly false in disguise or strings or array, rules are simple, if you are passing in a primitive other than null,an empty string or false it will evaluates to true
 * */


var boolObject = new Boolean(false);
// Here boolObject is passing as primitive
if (boolObject) {
    alert("Bool, you so crazy!!!");
}

//  In all of these it returns false
var bool;
bool = Boolean(null);
bool = Boolean(undefined);
bool = Boolean();
bool = Boolean(0);
bool = Boolean("");
bool = Boolean(NaN);
bool = Boolean(false);

// In all of these it returns true
var bool;
bool = Boolean(true);
bool = Boolean("hello");
bool = Boolean("Liam Neesons" + "Bruce Willie");
bool = Boolean(new Boolean()); // Inception!!!
bool = Boolean("false"); // "false" is a string
