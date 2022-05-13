// OBJECT
// {key,value}
let car={brand:"Audi",model:2015,fuel:"petrol",
         dec:function(){
          return this.brand+" "+this.model+" "+this.fuel;
          }
        }
console.log(car.dec)        
console.log(car.brand);
let x=new Number(5);
console.log(typeof x);
console.log(x);

/*
* Booleans can be objects (if defined with the new keyword)
* Numbers can be objects (if defined with the new keyword)
* Strings can be objects (if defined with the new keyword)
* Dates are always objects
* Maths are always objects
* Regular expressions are always objects
* Arrays are always objects
* Functions are always objects
* Objects are always objects
*/