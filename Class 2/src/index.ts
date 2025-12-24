console.log('Class 2');

//Array
//We should describe the type of array we want , it can be array of number , array of string , etc
//[] shows that we are making an array

let colors:string [] = ['Black' , 'Blue' , 'Brown']; //If we write anything except string it show error
console.log(colors);

let even:number[] = [2,4,6,8]
console.log(even);

//Custom types
//Means making our own types using defined types of ts
//We customize our own type by defing every type
//Means existing types ko use kar ky new custom type generate karna 
//Commmonly for objects as every properrty of object has differnet type so we customize type one time and use it for all objects instead of defining types with all objects which make our code messy and lenghty

//1.Type aliases
//Use for objects and other all types
//We make array of objects through it not array
//Give new name to existing types by making a custom type
//Every property we define in the custom type must be in objects means if we added name in type and then we dont make property name in object it show error
//We can say that its a contrat and we have to fulfil all conditions otherwise it show error
//Sequence sa error nahi ay ga properties agay peechy kar sakty hein
//Syntax
//keyword type Type name but first letter capital = { key : type not value ; key : type not value }
//In type we use ; after property but in oject we use ,

//Define type
type User = {
    id : number ;
    name : string ;
    isActive : boolean ;
    email : string ;
    address : string ;
    profileImage : string
}
//Using type
//Object 1
let std1:User = {
    id : 1 ,
    name : 'Sumaiya' ,
    isActive : true ,
    email : 'sumaiya@gmail.com' ,
    address : 'Sumaiya Colony' ,
    profileImage : 'SSS'
}
//We are using custom type again and again
//Cuatom type hamein repeatition sy bachati hy hamein bar bar type define nahi kar ni apr ti
//Object 2
let std2:User = {
    id : 2 ,
    name : 'Sumaiya Naz' ,
    isActive : true ,
    email : 'sumaiyaNaz@gmail.com' ,
    address : 'Sumaiya Naz Colony' ,
    profileImage : 'SSSNNN'
}
console.log(std1);
console.log(std2);

//If we dont use custom then we define type for every object
//Object 1
let person1 : {
    id : number ;
    name : string ;
    isActive : boolean ;
    email : string ;
    address : string ;
    profileImage : string
} = {
    id : 1 ,
    name : 'Anaya' ,
    isActive : true ,
    email : 'anaya@gmail.com' ,
    address : 'Anaya Colony' ,
    profileImage : 'AAA'
}
//Object 2
let person2 : {
    id : number ;
    name : string ;
    isActive : boolean ;
    email : string ;
    address : string ;
    profileImage : string
} = {
    id : 2 ,
    name : 'Anaya Naz' ,
    isActive : true ,
    email : 'anayanaz@gmail.com' ,
    address : 'Anaya Naz Colony' ,
    profileImage : 'AAANNN'
}
console.log(person1);
console.log(person2);

//We can make any property optional by adding ? after key in object
type employ = {
    id : number ;
    name : string ;
    maritalStatus? : string //We make this key optional user can give its value or dont mention it it dont show error
}
//Obj 1
let girl1:employ = {
    id : 1 ,
    name : 'Ruhama'  //We dont give third property and it dont show error
}
console.log(girl1);

//Obj 2
let girl2:employ = {
    id : 2 ,
    name : 'Ruhama' ,
    maritalStatus : 'Single'
}
console.log(girl2);


//Type aliases for string
type MyType = string ;
let a:MyType = 'Hi User 1'
console.log(a);

//Type aliases for array
type MyType1 =  string[];
let b:MyType1 = ['Hi User 1' , 'Hi User 2']
console.log(b);

//Type aliases for array
type Names = string[];
let students: Names = ["Ali", "Ayesha", "Sumaiya"];
console.log(students);

//Type aliases for array
type Scores = number[];
let marks: Scores = [90, 85, 70];
console.log(marks);

//Type aliases we usually dont use for simple array , we use it for array of object
//So define object key type
type Copy = {
    name : string ;
    attendence : number ;
    marks : number
}
let student1:Copy[] = [
    {
        name : 'Maths' ,
        attendence : 50 ,
        marks : 95
    }
    ,
    {
        name : 'English' ,
        attendence : 45 ,
        marks : 85
    }
]
console.log(student1);
console.log(student1[1]);
console.log(student1[1]?.attendence);

//2.Interfaces
//It is same as type aliases but with some little difference that interface use only for objects and classes
//Syntax
//keyword interface Interface name but first letter capital { key : type not value ; key : type not value }
//In interface same as type we use ; after property but in oject we use ,
//In interface we dont use =

//Define interface
interface Person {
    id : number ;
    name : string
}
//Use interface
const per1 : Person = {
    id : 1 ,
    name : 'Sumaiya Naz'
}
console.log(per1);

//3.Union
//Symbol : | pipe like but single line
//In union we can add two or multiple types
//Its like OR operator in javascript

//Example 1
let value : string | number = '50';
//Means we can store value in string or in number 
console.log(value);

//Example 2
type Size = string | number | boolean ;
//means size can be any of above type
let size : Size = 'XL'
console.log(size + ' in string');
size = 85
console.log(size + ' in number');
size = true
console.log(size + ' in boolean');

//Example 3
type A = {
    id : number ;
    name : string
}
type B = {
    address : string ;
    contact : number
}
type C = A | B 

//means type can be A and B we must have to fulfill atleast one type //but having both type and missing properties can give error
const employ : C = {
    id : 21 ,
    name : 'Anaya',  //A type properties are fulfill now we can also add B type
    address : 'Anaya House'  //If one type is fulfill then missing properties of other will not give error
}
console.log(employ);

/*const employ1 : C = {
    id : 1 ,
    address : 'Baldia'
}*/
//It give error as atleast one type properties is not fulfil
//And we cant add new property which we dont define in making type
//We can add all properties of all types it dont show error

//type : 'name' 
//its a syntax by which we can add one type only 
//type is syntax that can not change but name can be change

type AA = {
    type : 'A' ;
    id : number ;
    name : string
}
type BB = {
    type : 'B' ;
    address : string ;
    contact : number
}
type CC = AA | BB

const teacher : CC = {
    type : 'A' ,
    //Only A type properties are allow
    id : 25 ,
    name : 'Sumaiya',
    //address : 'Sumaiya House' //it give error as we have to give only A or B cant have properties of all
}
console.log(teacher);

const teacher1 : CC = {
    type : 'B' ,
    //Only B type properties are allow
    //id : 25 , //it give error as we have to give only A or B cant have properties of all
    address : 'Sumaiya House' ,
    contact : 3215415
}
console.log(teacher1);

//4.Intersection
//Symbol : &
//Fill all properties of all type
//Its like AND operator in javascript

type Aa = {
    id : number ;
    name : string 
}
type Bb = {
    contact : number ;
    address : string 
}
type combine = Aa & Bb
let myObj : combine = {
    id : 45 ,
    name : 'Naz' ,
    contact : 15463512 ,
    address : 'xyz town'
}
console.log(myObj);

