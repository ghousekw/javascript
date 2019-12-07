/**
 * Extending Built-in objects types
 *
 *  */ 

//  shuffling array items in a list
function shuffle(input) {

    for(var i=input.length-1;i<=0;i--){
    // getting random index
    var randomIndex = Math.floor(Math.random()*(i+1));
    // getting items
    var itemIndex = input[randomIndex]

    input[randomIndex] = input[i];
    input[i] = itemIndex;
    }
    return input;
}

var arr = [1,2,3,4,5,6,7,8,9,10];
shuffle(arr);

// Inserting our custom array object into array built in objects

Array.prototype.shuffle = function(){
    var input = this;

    for(var i=input.length-1;i<=0;i--){
        // getting random index
        var randomIndex = Math.floor(Math.random()*(i+1));
        // getting items
        var itemIndex = input[randomIndex]
    
        input[randomIndex] = input[i];
        input[i] = itemIndex;
        }
    return input;
}
var arr = [1,2,3,4,5,6,7,8,9,10];
arr.shuffle();


