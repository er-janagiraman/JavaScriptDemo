// FUNCTION
//Function Types

// Named Function
function myfunction(){
  //............
}

//Arrow Function
msg=()=>{
  //...........
}

//Invoked Function
let b=(function (x, y, z) {  
  console.log(x);   //output: x=100,y=100,z=100
  console.log(y);  
  console.log(z);  
})(100, 200, 300);  

function myfunction(num1,num2){
 return num1*num2;
}
let x=myfunction(2,8);
console.log(x);
console.log(myfunction(2,8));

//call a method that can be used on different objects
let person={
  fName:"Janagi",
  lName:"Raman",
  fullName:function(){
    return this.fName+" "+this.lName;
  }
}
let user1={
  fName:"Seetha",
  lName:"Raman"
}
console.log(person.fullName.call(user1));

/*
* The call() method takes arguments separately.
* The apply() method takes arguments as an array.
* With the bind() method, an object can borrow a method from another object.
*/

//apply
let client2={
      fName:" ",
      lName:" ",
      fullName: function(state,country){
        return this.fName+" "+this.lName+" "+" "+state+" "+country;
      }
}
let user2={
  fName:"Vijaya",
  lName:"Raman"
}
console.log(client2.fullName.apply(user2,["Tamil Nadu","India"]));

//bind
let client3={
  fname:" ",
  lName:" ",
  fullName:function(){
    return this.fName+" "+this.lName;
  }
}
let user3={
  fName:"Jaya",
  lName:"Raman"
}
let total=client3.fullName.bind(user3);
total();

let client4={
  fName:" ",
  lName:" ",
  fullName:function(){
    return this.fName+" "+this.lName;
  }
}

//Rough Work
user4={
  fName:"Janagi",
  lName:"Raman"
}
console.log(client4.fullName.call(user4));




