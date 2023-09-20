

let FirstName = "Karl";
let age = 21;
let Status = "Still alive";
let username;



console.log("this is" , FirstName);
console.log("a", age,"years old");
console.log("A", Status, "For real");

window.alert("Sup");


document.getElementById("p1").innerHTML = "This is "  +  FirstName;
document.getElementById("p2").innerHTML = "a " + age + " years old";
document.getElementById("p3").innerHTML = "A "  + Status + " For real";
// way to make the text to interact with
document.getElementById("myButton").onclick = function(){
    
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("p1").innerHTML = "This is " +  username
}
// this is a comment bruh

/*
this is 
a
multiline
comment bruuh
 */