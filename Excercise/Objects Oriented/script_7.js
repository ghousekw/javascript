/**
 * Increment and decrement operators
 * Infinity used to define very large or very small numbers
 * NaN is Not a Number, used to return NaN if we perform invalid operations
 * parseInt to convert string into integer,parseFloat to convert string into floating point number
 * Number function also used to convert string into a number
 * Constants: Math.PI, Math.E,Math.LN2,Math.LN10,Math.LOG2E,Math.LOG10E,Math.SQRT1_2,Math.SQRT2
 * Rounding Numbers: Math.floor(),Math.ceil(), Math.round()
 * Trigonometric Functions: Math.cos(),Math.sin(),Math.tan(),Math.acos(),Math.asin(),Math.atan(),
 * Math.abs(),Math.random(),Math.pow(),Math.exp(),Math.sqrt()
*/
// NaN
parseInt("foo");
 
// 200
parseInt("200 + 400 + 300");
 
// 200
parseInt("200abc")
 
// NaN
parseInt("abc200");
 
// 155
"15" + 5;
 
// 3
"15" / 5;
 
// 65
"15" * 5;
 
// 4
parseInt("4.55");

Number("3.14") // 3.14 as a number

Number("20px") // NaN

/* 
#mySquare {
    width: 250px;
    height: 250px;
    background-color: green;
}
*/
var myElement = document.querySelector("#mySquare");
var style = window.getComputedStyle(myElement);
 
// getting 250 and removing the "px" part of the value
var initialWidth = style.getPropertyValue("width").split("px")[0];
 
// adding 10 and tagging "px" back
var newWidth = parseInt(initialWidth) + 10 + "px";
myElement.style.width = newWidth;
 
alert(newWidth);

var i = 4;  
var j = i++;    //i=5,j=4    
var i = 4;    
var j = ++i;    //i=5,j=5

var oops = Math.sqrt(-1);   //NaN

Math.floor(.5); // 0
Math.ceil(.5); // 1
Math.round(.5); // 1
Math.floor(3.14); // 3
Math.round(3.14); // 3
Math.ceil(3.14); // 4
Math.floor(5.9); // 5
Math.round(5.9); // 6
Math.ceil(5.9); // 6

Math.cos(0); // 1
Math.sin(0); // 0
Math.tan(Math.PI / 4); // 0.9999999999999999
Math.cos(Math.PI); // -1
Math.cos(4 * Math.PI); // 1

Math.pow(2, 4) //equivalent of 2^4 (or 2 * 2 * 2 * 2)
Math.exp(3) //equivalent of Math.E^3
Math.sqrt(16) //4

Math.abs(37) //37
Math.abs(-6) //6

var randomNumber = Math.random() * 100;