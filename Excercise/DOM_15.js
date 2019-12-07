//Common way to manipulate class values is by using classList API

/* If you tell the add method to add a class that already exists on the element, your code will run without exception (ha!) but the duplicate class value will not get added. */
// To add a class value
var divElement = document.querySelector("#myDiv");
divElement.classList.add("baz");
alert(divElement.classList);

// To remove a class value
var divElement = document.querySelector("#myDiv");
divElement.classList.remove("foo");
alert(divElement.classList);

/* If the value exists, you remove it from the
element. If the value does not exist, you add that class value to the element. To simplify this very common toggling pattern, the classList API provides you with the toggle method: */
// To toggle class values
var divElement = document.querySelector("#myDiv");
divElement.classList.toggle("foo"); // remove foo
divElement.classList.toggle("foo"); // add foo
divElement.classList.toggle("foo"); // remove foo
alert(divElement.classList);

/* This method checks to see if the specified class value exists on the element. If the value exists, you get true. If the value doesn’t exist, you get false. */
// Checking Whether a Class Value Exists
var divElement = document.querySelector("#myDiv");
if (divElement.classList.contains("bar") == true) {
// do something
}