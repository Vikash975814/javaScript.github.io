var name=prompt("Enter the name");
console.log("Your Name is :="+name);
console.log("Your Name length is:="+name.length);
var character= prompt("Enter the character");
 const d=(name)=>
 {
     console.log("Your Updated Name is :"+name);
     console.log("Your updated name length is :"+name.length);
 };
 d(name.replaceAll(character,""));
