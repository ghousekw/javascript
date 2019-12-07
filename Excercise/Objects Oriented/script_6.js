/**
 * Arrays
 * when measuring array length it returns number of index values not no of items
 * To add items at last use, push() method 
 * To add items at first use, unshift() method, when added at first, index values also changes to previous items
 * To remove last item use, pop() method 
 * To remove first item use, shift() method
 * slice() method copies a portion of array and make it into new array
 * To find items use indexOf , lastIndexOf returns -1 if item is not present
 * to merge arrays use concat() method
 * */ 
var groceries = []; // "[]" is called array literal notation
var groceries = ["Milk", "Eggs", "Frosted Flakes", "Salami",
"Juice"]; // items present in an array are called array values or array elements

groceries.push("Cookies");  // to add items at last index
groceries.unshift("Bananas"); // to add items at first index
var lastItem = groceries.pop(); // remove item at last index
var firstItem = groceries.shift(); // remove item at first index
var newArray = groceries.slice(1, 4); //slice portion of array
var resultIndex = groceries.indexOf("eggs", 0); //find items index in an array
alert(resultIndex); // 1

var good = ["Mario", "Luigi", "Kirby", "Yoshi"];
var bad = ["Bowser", "Koopa Troopa", "Goomba"];

var goodAndBad = good.concat(bad);
alert(goodAndBad);  //merge arrays

