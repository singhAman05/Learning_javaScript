//TAKING INPUT
// const prompt = require("prompt-sync")();
// console.log("Enter two numeric variables");
// var ab=prompt("Enter a: ");
// var bc=prompt("Enter b: ");
// ab=ab+bc;
// bc=ab-bc;
// ab=ab-bc;
// console.log("Swapped value of a is:"+ab);
// console.log("Swapped value of b is:"+bc);

//CONCATENATION
// const prompt=require("prompt-sync")();
// var yourName=prompt("Enter your name:-");
// var name="Hello!!";
// console.log(name+" "+yourName);

//CHARACTER COUNT
// const prompt=require("prompt-sync")();
// var para=prompt("What are your thoughts :)");
// var count=para.length;
// console.log("You have written "+count+" characters and you have left with "+(140-count)+" characters.");

//SLICING DOWN
// const prompt=require("prompt-sync")();
// var name=prompt("What a(re your thoughts ? ");
// console.log(name.slice(0,5));

//CASING IN JS
// const prompt=require("prompt-sync")();
// var name=prompt("What is your name ? ");
// var upp=name.slice(0,1);(
// upp=upp.toUpperCase();
// name=name.slice(1,name.length);
// name=name.toLowerCase();
// console.log("Hello!! "+upp+name);

//ARTHEMATIC
// const prompt=require("prompt-sync")();
// var dogAge=prompt("Enter your dog age:-");4
// var humAge=(dogAge-2)*4+21;
// console.log("our dog age if it would be a human is:-> "+humAge);

//FUNCTION 
// const prompt=require("prompt-sync")();
// var bott=prompt("How many bottles would you like yo buy ? ");
// rup(bott);
// function rup(bott){
//     console.log("Total ruppees is: "+bott*1.5);
// }

//OUPUT FUNCTION
// const prompt=require("prompt-sync")();
// var rup=prompt("Enter the ruppees of one bottle: ");
// var tak=prompt("Enter the money we are taking: ");
// var bott=Math.floor(tak/rup);;
// var chan=total(bott,rup,tak);
// function total(bott,rup,tak){
//     chan=tak-(bott*rup);
//     return chan;
// }
// console.log("The no. of bottles of bottles we bought: "+bott+" and change we have: "+chan);

//BMI CALCULATOR
// const prompt=require("prompt-sync")();
// var w=prompt("Enter the weight: ");
// var h=prompt("Enter the height: ");
// var bmi=bmi_wh(w,h);
// function bmi_wh(w,h){
//     return (w/Math.pow(h,2));
// }
// console.log("Your BMI is: "+Math.floor(bmi));

//RANDOM NUMBER GENERATOR
const prompt=require("prompt-sync")();
var n=Math.random();
console.log(n);