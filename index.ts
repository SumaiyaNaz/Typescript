console.log('Class 1');
console.log('Class ts');

let a = 5;
console.log(a);

//Type infarance => Implicit

let b = 10;
//b = '10'
b = 20;
console.log(b);

//Type annotation => Explicit
let c:string = '15';
console.log(c);

//Any type
let d;
d = 20 ;
console.log(d);
console.log(typeof d);
d = '30';
console.log(d);
console.log(typeof d);

//
let e : string;
//e = 45 ;
e = '45';
console.log(e);

//Array
let arr : number[] = [50,60,70]
console.log(arr);

//Example
let arr1 = [45,'45']
console.log(arr1);
