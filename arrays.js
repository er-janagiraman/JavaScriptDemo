//splice
let fruits=["Apples","Orange","pineapple","kiwi","banana"];
fruits.splice(2,1,"Graps");
console.log(fruits);

//create Array
let fruitss=["banana","apples","orange","pineapple","graps","kiwi"];
alert(fruitss[1]);
console.log(fruitss);
fruitss[0]="Pear";
console.log(fruitss);

//Array to string
console.log("to String: ",fruitss.toString());
//join
console.log(fruitss.join("*"));
console.log(fruitss,fruitss.pop(),"pop"+fruitss); //pop means delete last element
console.log(fruitss.push("Blackberries"),""+fruitss); //adding last element
console.log(fruitss.shift(),fruitss);//remove first element
console.log(fruitss.unshift(),fruitss); // adding first element



