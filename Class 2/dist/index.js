var _a;
console.log('Class 2');
//Array
//We should describe the type of array we want , it can be array of number , array of string , etc
//[] shows that we are making an array
let colors = ['Black', 'Blue', 'Brown']; //If we write anything except string it show error
console.log(colors);
let even = [2, 4, 6, 8];
console.log(even);
//Using type
//Object 1
let std1 = {
    id: 1,
    name: 'Sumaiya',
    isActive: true,
    email: 'sumaiya@gmail.com',
    address: 'Sumaiya Colony',
    profileImage: 'SSS'
};
//We are using custom type again and again
//Cuatom type hamein repeatition sy bachati hy hamein bar bar type define nahi kar ni apr ti
//Object 2
let std2 = {
    id: 2,
    name: 'Sumaiya Naz',
    isActive: true,
    email: 'sumaiyaNaz@gmail.com',
    address: 'Sumaiya Naz Colony',
    profileImage: 'SSSNNN'
};
console.log(std1);
console.log(std2);
//If we dont use custom then we define type for every object
//Object 1
let person1 = {
    id: 1,
    name: 'Anaya',
    isActive: true,
    email: 'anaya@gmail.com',
    address: 'Anaya Colony',
    profileImage: 'AAA'
};
//Object 2
let person2 = {
    id: 2,
    name: 'Anaya Naz',
    isActive: true,
    email: 'anayanaz@gmail.com',
    address: 'Anaya Naz Colony',
    profileImage: 'AAANNN'
};
console.log(person1);
console.log(person2);
//Obj 1
let girl1 = {
    id: 1,
    name: 'Ruhama' //We dont give third property and it dont show error
};
console.log(girl1);
//Obj 2
let girl2 = {
    id: 2,
    name: 'Ruhama',
    maritalStatus: 'Single'
};
console.log(girl2);
let a = 'Hi User 1';
console.log(a);
let b = ['Hi User 1', 'Hi User 2'];
console.log(b);
let students = ["Ali", "Ayesha", "Sumaiya"];
console.log(students);
let marks = [90, 85, 70];
console.log(marks);
let student1 = [
    {
        name: 'Maths',
        attendence: 50,
        marks: 95
    },
    {
        name: 'English',
        attendence: 45,
        marks: 85
    }
];
console.log(student1);
console.log(student1[1]);
console.log((_a = student1[1]) === null || _a === void 0 ? void 0 : _a.attendence);
//Use interface
const per1 = {
    id: 1,
    name: 'Sumaiya Naz'
};
console.log(per1);
//3.Union
//Symbol : | pipe like but single line
//In union we can add two or multiple types
//Its like OR operator in javascript
//Example 1
let value = '50';
//Means we can store value in string or in number 
console.log(value);
//means size can be any of above type
let size = 'XL';
console.log(size + ' in string');
size = 85;
console.log(size + ' in number');
size = true;
console.log(size + ' in boolean');
//means type can be A and B we must have to fulfill atleast one type //but having both type and missing properties can give error
const employ = {
    id: 21,
    name: 'Anaya', //A type properties are fulfill now we can also add B type
    address: 'Anaya House' //If one type is fulfill then missing properties of other will not give error
};
console.log(employ);
const teacher = {
    type: 'A',
    //Only A type properties are allow
    id: 25,
    name: 'Sumaiya',
    //address : 'Sumaiya House' //it give error as we have to give only A or B cant have properties of all
};
console.log(teacher);
const teacher1 = {
    type: 'B',
    //Only B type properties are allow
    //id : 25 , //it give error as we have to give only A or B cant have properties of all
    address: 'Sumaiya House',
    contact: 3215415
};
console.log(teacher1);
let myObj = {
    id: 45,
    name: 'Naz',
    contact: 15463512,
    address: 'xyz town'
};
console.log(myObj);
export {};
//# sourceMappingURL=index.js.map