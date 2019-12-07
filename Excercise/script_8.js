/**
 * When you create a new object assume it as a children derived from a parent, that parent is known as prototype object(__proto__)
 * if child doesn't have properties, it will check on its parent properties to access,
 * If we've multiple custom objects that has same properties then we can create a new object and reference it as immediate object instead of prototype object with Object.create method.
 * this refers to the object we are currently in.
*/

// Approaches on how to create a new object
var funnyGuy = {};
funnyGuy.firstName = "Conan";
funnyGuy.lastName = "O'Brien";

var funnyGuy = {};
funnyGuy["firstName"] = "Conan";
funnyGuy["lastName"] = "O'Brien";

var funnyGuy = {
    firstName: "Conan",
    lastName: "O'Brien"
};

// Creating an Object
var funnyGuy = {
    firstName: "Conan",
    lastName: "O'Brien",
    getName: function() {
        return "Name is: " + this.firstName + " " + this.lastName;
    }
};
alert(funnyGuy.getName()); // Name is: Conan O'Brien

//creating custom objects
var person = {
    getName: function () {
        return "Name is " + this.firstName + " " + this.lastName;
    }
};
    var funnyGuy = Object.create(person);
    funnyGuy.firstName = "Conan";
    funnyGuy.lastName = "O'Brien";

    var theDude = Object.create(person);
    theDude.firstName = "Jeffrey";
    theDude.lastName = "Lebowski";
    
    var detective = Object.create(person);
    detective.firstName = "Adrian";
    detective.lastName = "Monk";