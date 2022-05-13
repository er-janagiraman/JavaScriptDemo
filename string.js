// STRING
let fName=new String("Bruce");
let lName=new String("Lee");
console.log(fName+" "+lName);
console.log(fName.length);

// string method
/*
*thre are three parts 
*slice(star,end[optional])
*substring(start,end[optional])
*substr(start,end[optional]) legancy
*/

// slice()
let str=" apple,banana,kiwi ";
let part=str.slice(0,6);
let par=str.slice(6);
let pa=str.slice(6,0); //auto change (0,6)
let pp=str.slice(-1);
let ppp=str.slice(-5,-1);//but (-1,-5) can't auto change (-5,-1)
console.log(part);
console.log(par);
console.log(pa);
console.log(pp);
console.log(ppp);

// substring() similir to slice() but some change, can't accept negative index
let frt="apple,banana,kiwi";
let cut=frt.substring(3,6);
let cc=frt.substring(6);
let cu=frt.substring(60,0);
let cn=frt.substring(-1); // can't accept negative index
console.log(frt);
console.log(cut);
console.log(cu);
console.log(cc);
console.log(cn);

// replace() only first match
let r=frt.replace("kiwi","orange");
console.log(r);
let u=frt;
console.log(u.toUpperCase());
console.log(u.toLocaleLowerCase());
console.log(u.concat(".,etc"))
console.log(u.trim());

//padStart & padEnd only String
 let numm="5";
 console.log(numm.padStart(4,0)); //(digit,value) 0005
 console.log(numm.padEnd(4,0)); //(digit,value) 5000

//String Character
/*
there are 3 methods 
*charAt(position) returns index character eg: a.charAt(0); //h
*charCodeAt(position) returns  index character unicode eg: a.charCodeAt.(0); //h(72)-->unicode
*property access[] returns index character eg: b=a[0]; //a
*/
 let a="Johnny"
 console.log(a.charAt(0)); //J
 console.log(a.charCodeAt(0)); //J(74)
 console.log(a[0]); //J

 //String split()
 let str1="Welcome to India";
 let str2="Welcome to India";
 console.log(str1.split(" ")); //['Welocome' ,'to', 'India']
 console.log(str2.split("i")); //['Welcome to Ind', 'a'] if you can use any refernce
