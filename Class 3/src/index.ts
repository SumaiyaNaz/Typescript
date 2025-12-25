console.log('Class 3');

//String literals / Literals types
//Use to make strictness in union
//Use to control code that we cant write wrong values

//Example 1
type Size = string | number ;
const size : Size = 'XL' ;
console.log(size + ' its simple union');

//Example 2
type ShirtSize = 'XL' | 'SM' | 'LG'
const shirt : ShirtSize = 'LG' ;
// const skirt : ShirtSize = 'Medium' ;
console.log(shirt + ' now its union with string literals means we cant write anything except value we define in type it give error');

//Example 3
type Number = 45 | 55 | 65 ;
let num1 : Number = 45 ;
console.log(num1 + ' allow this number');
//let num2 : Number = 20 ;
//console.log(num2 + ' dont allow this number');

//Tuples
//Fixed lenght array having muliple data types or same data types

//Example 1 simple array of string without tauple means no fixed length
let vegetables : string[] = ['potato' , 'tomato' , 'carrot']
console.log(vegetables);

//Example 2 simple array of string without tauple means no fixed length
type Elements = string | number | boolean ;
let error : Elements[] = ['Page not found' , 404 , false];
console.log(error);

//Example 3 tauple
let err : [string , number] = ['xyz' , 45]; 
//now err only take two array and giving more than 2 elements will give array 
//and cant change pattern means if string is first than cant write it in second
//err[2] = 90 
//give error as we cant add to elemnts as it will increase length
err.push('Hello')
err.push('Hello1' , 'Hello2')
//push is typescript error as its adding elements in last which we can not do according to tauple
console.log(err);

