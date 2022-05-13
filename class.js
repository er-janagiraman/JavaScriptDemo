class Vehicle{
 
constructor(brand,year){
  this.brand=brand;
  this.year=year;

}
validate(){
  let year=new Date();
  return year.getFullYear() - this.year;
}
}
const car=new Vehicle("Audi",2017);
console.log(car.validate());