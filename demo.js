console.log("hello");
alert("Welcome");
//variabls
var b="Welcome";
console.log(b);
document.getElementById("123").innerHTML=("Welcome To javascript");
//Numbers
var num1=1;
console.log(num1*30);
var b=num1*30;
b--;
console.log(b);

//function

//Create
function fun(){
  console.log("Welcome");
}
//call
fun();

function  user(){
  var name=prompt("Enter your name");  // prompt (pop up) 
  var result="Welcome "+name;
  console.log(result);
  document.getElementById("123").innerHTML=result;
}
user();



function sumNum(num1,num2){
 var result=num1+num2;
  console.log(result);
}
sumNum(10,31);

function demo(num1,num2){
  var result=num1*num2;
  console.log(result);
}
demo(10,20);

//loop
//while
 let num=0;
 while(num<10){
    num += 1;
    console.log(num);
 }

 //for
 for(let i=10;i<20;i++){
    console.log(i);
 }

 //Data Types
let YourAge=18;
let yourName="Johnny";
let name={first:"John",lName:"Cena"}; //dictorny (object)

 