/**
 * Null is used when you don't want your value to be undefined or any mysterious values, you just don't want the value to be exist
 * Use === or !== instead of == or != for comparison of values
 * Undefined, gives when we declare a variable or function without initialization  of values or statements
 * */ 


var test = null;
if (test === null) {
    test = "Peter Griffin";
} else {
    test = null;
}

var myVariable;
alert(myVariable); // undefined
function doNothing() {
// watch paint dry
return;
}
var weekendPlans = doNothing();
alert(weekendPlans); // undefined

var myVariable;
if(typeof(myVariable)==="undefined"){
    alert("try me");
}