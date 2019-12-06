/**
 * when primitive types act as object it can temporarily access it properties and objects, and but when change backs to its primitive form it loses all its access.
 */
var game = "Dragon Age: Origins";
alert("Length is: " + game.length);
var gameObject = new String("Dragon Age:Origins");
alert(typeof game); // string
alert(typeof game.length); // number
alert(typeof gameObject); // Object
