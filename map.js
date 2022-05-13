//MAP
/*
*it holdes key-value pairs
*key can any data type
*A map remembers the original insertion order of the keys
*/

//map methods
/*
*new map() -->create a new map
*set() -->sets the value for a key in a map
*get() -->gets the value for a key in a map
*delete() -->remove a map element specified by the key
*has() -->returns true if a key exits in a map
*forEach() -->calls a function for each key/value pair in a map
*entries() -->returns an iterator with the [key,value]pairs in a map
*size() -->returns the number of the elements in a map
 */
//create a map
let fru=new Map();
let fruit=new Map([["apple",200],["orange",400],["kiwi",600]]);

//set map
fru.set("kiwi",600);
fru.set("wattermellon",400);
console.log("Set: "+fruit);  //object map use forEach

//get map
console.log(fruit.get("Get: "+"orange"));

//size map
console.log(fruit.size);
console.log(fru.size);

//delete map
fru.delete("wattermellon");

//has map if have value in map returns true else false
console.log(fru.has("Has:"+" watermellon"));
console.log(fru.has("Has:"+" kiwi"));

//forEach Map  method calls a function for each key/value pair in a Map
//List all entries
let f1=fruit;
let temp="";
f1.forEach(function(key,value)
{
  temp += key+" "+value; 
})
console.log("For Each: "+temp);

//entries() Method  method returns an iterator object with the [key, values] in a Map
//list all entries
let ent=fruit;
let temp1="";
for(let val of ent){
  temp1 +=val;
}
console.log("Entries: "+temp1);