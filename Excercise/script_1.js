function showGlobal(){
    var globalVisible;
    if(true){
        var globalVisible = "I am inside function";
        document.writeln(globalVisible);
    }
    document.writeln(globalVisible);
}
showGlobal();