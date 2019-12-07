/**
 * Immediately Invoked Function Expressions:(IIFE)
 * surrounded by parenthesis and executes immediately
 * if JS spotted () it means it will executes immediately, same for iife (function(){})();
 * iife are useful when you don't want your variables accessible out of its block like variable hosting
 * closures store their outer values by referencing them
 * */ 

//  Normal function

function isLucky() {
    // Generating a random number between 0 to 100
    var foo = Math.floor(Math.random()*100);
    if(foo<50){
        console.log("You are lucky");
    }else{
        console.log("You are unlucky");
    }
}
console.log(isLucky());

// Anonymous functions #1

var isLucky = function(){
    // Generating a random number between 0 to 100
    var foo = Math.floor(Math.random()*100);
    if(foo<50){
        console.log("You are lucky");
    }else{
        console.log("You are unlucky");
    }
}
var me = isLucky();

// Anonymous functions #2
window.setTimeout(function(){
    console.log("I am ready")
},2000);

// Simple IIFE
(function(){
    var someName="I am Areeb";
    console.log("someName");
})();

// iife with arguments
(function (first, last) {
    alert("My name is " + last + ", " + first + " " + last + ".");
})("James", "Bond");

//code for a content slider I created wrapped into an IIFE:
(function() {
    // just querying the DOM...like a boss!
    var links = document.querySelectorAll(".itemLinks");
    var wrapper = document.querySelector("#wrapper");
    // the activeLink provides a pointer to the currently displayed
    item
    var activeLink = 0;
    // setup the event listeners
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.addEventListener('click', setClickedItem, false);
        // identify the item for the activeLink
        link.itemID = i;
    }
    // set first item as active
    links[activeLink].classList.add("active");
    function setClickedItem(e) {
        removeActiveLinks();
        var clickedLink = e.target;
        activeLink = clickedLink.itemID;
        changePosition(clickedLink);
    }
    function removeActiveLinks() {
        for (var i = 0; i < links.length; i++) {
            links[i].classList.remove("active");
        }
    }
    // Handle changing the slider position as well as ensure
    // the correct link is highlighted as being active
    function changePosition(link) {
        var position = link.getAttribute("data-pos");
        wrapper.style.left = position;
        link.classList.add("active");
    }
})();