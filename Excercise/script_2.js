var foo="Hello";
function showGlobal(){
    document.writeln(foo);
    var foo = "Goodbye!";
    document.writeln(foo);
    }
showGlobal()