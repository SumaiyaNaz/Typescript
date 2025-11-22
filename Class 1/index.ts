console.log('Class 1');
console.log('Class ts');

let a = 5; //var a = 5; converts init in js means vanilla js (ES5)
           //If we open both ts and js file now it show error as we didnt setup yet
console.log(a);

//Type inference => Implicit
//Means we dont mention type and ts itself understand that if first time we stored a number than type of that varaible is number and we can't reassign it with any other type
let b = 10;
//b = '10'   //it show error as ts itself thing that b type is number and now string value cant be reassign
b = 20;      //but we can reassign it with number han it dont show error
console.log(b);

//Type annotation => Explicit
//In this we define type by ourself 
//Syntax
//keyword(let , var , const) variable name : type = value ;
//or
//keyword(let , var , const) variable name : type ;
//variable name = value
let c:string = '15';
console.log(c);
let c2:boolean ;
c2 = true;
console.log(c2);

//Any type
//When we only declare variable without data type then its type become any after that we can store any value init either its number , boolean , string , etc 
//Any is like remove/delete the puropse of ts
let d; //type is any
d = 20 ;   //store number
console.log(d);
console.log(typeof d);
d = '30'; //store string but this time it dont show error as its type is any
console.log(d);
console.log(typeof d);

//Type annotation => Explicit
let e : string;
//e = 45 ; //show error that we cant asssign a number
e = '45';
console.log(e);

//Array
//We have to define the type of array that which knd of array we are creating e.g : array of number , array of string , etc
let arr : number[] = [50,60,70]
console.log(arr);
