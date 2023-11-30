var name=prompt("Enter the name=");
var character= prompt("Enter the character=");
console.log("Your Name is :="+name);
console.log("Your Name length is:="+name.length);
var arr=name.split("");
for(var i=0;i<arr.length;i++)
{  
    if(arr[i]===character)
    {
        arr.splice(i,1);
    }
}
name=arr.toString().replaceAll(',',"");
console.log("Your Updated name is :="+name);
console.log("Your updated name length is :="+name.length);



