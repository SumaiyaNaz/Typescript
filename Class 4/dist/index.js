console.log("Class 4");
//Class
//Its like molde or blueprint , we make the structure once and use it again and again dont need to define structure again and again
//In js
/*class Student {
    constructor ( n , r , e ){
        this.name = n
        this.rollNo = r
        this.email = e
    }
}*/
//In ts
//Make class or define class
//Method 1 lengthy
class Student {
    constructor(n, r, e //types of parameter and arguemnets
    ) {
        this.name = n;
        this.rollNo = r;
        this.email = e;
    }
}
//Making object
//Student is class name and all requirements should be fulfilll in arguements as we write in making class
//Means name , roll , email
//cant miss any of the above and cant write extra and cant change pattern
//If we make 46 in string so it show error in ts and show it as string in browser as its not an error in js
let user1 = new Student("Ali", 46, "ali@gmail.com");
console.log(user1);
//Method 2 short
class Student1 {
    //In constructor we define properties of object and types of properties before constructor
    //and if we want to make short we can skip it
    // name : string
    // rollNo : number
    // email : string
    //We have to make parameter public otherwise it make it privatte and dont show any properties in object
    constructor(name, rollNo, email //types of parameter and arguemnets
    ) {
        this.name = name;
        this.rollNo = rollNo;
        this.email = email;
        //and also skip this
        //    this.name = n
        //     this.rollNo = r
        //     this.email = e
    }
}
//Making object
//Student is class name and all requirements should be fulfilll in arguements as we write in making class
//Means name , roll , email
//cant miss any of the above and cant write extra and cant change pattern
//If we make 46 in string so it show error in ts and show it as string in browser as its not an error in js
let user2 = new Student1("Alyana", 46, "alyana@gmail.com");
console.log(user2);
//Method 2
class Student2 {
    constructor(
    //Public parameter so if we make object we can see properties of object otherwise we cant see properties
    name, rollNo, email) {
        this.name = name;
        this.rollNo = rollNo;
        this.email = email;
    }
}
let user3 = new Student2("Almira", 46, "almira@gmail.com");
console.log(user3);
//we can make some things privte and public
//Access modifier
//means what you can access or not , we use private and publc keywords for this
//private means cant access
//public means can access , all properties are public by default either we use keyword public or not
//Method 1 lengthy
class Teacher {
    constructor(n, r, e //types of parameter and arguemnets
    ) {
        this.name = n;
        this.rollNo = r;
        this.email = e;
    }
}
let teacher1 = new Teacher("Almira", 46, "almira@gmail.com");
console.log(teacher1);
//console.log(teacher1.name);
//name run on browser as it understand js but in ts it give error as its private property
console.log(teacher1.email);
//email dont give error in both ts and js as its public property
//Method 2 short => remove all properties types and property name
class Employ {
    constructor(name, rollNo, email) {
        this.name = name;
        this.rollNo = rollNo;
        this.email = email;
    } //all properties are public by default
}
let employ1 = new Employ("Ruhama", 50, "ruhama@gmail.com");
console.log(employ1);
//console.log(employ1.name); // private property
//employ1.name = 'Hira'
//Property is private so we can not access it outside , modify / redeclare , or anything
//we just cant use it or do anything
//give error in ts
console.log(employ1.email); //public property
employ1.email = "ruh123@gmail.com";
console.log(employ1.email);
//if you want to pass extra arguements so we make method for it
class Student3 {
    constructor(name, rollNo, email) {
        this.name = name;
        this.rollNo = rollNo;
        this.email = email;
        //its method
        //if we make it private so we cant access outside thats y we make method
        this.grade = [];
    }
}
let std1 = new Student3("Hajra", 12, "hajra@gmail.com");
console.log(std1); //we can see method with zero length
std1.grade.push("A"); //now array length is 1 and A is store in array
console.log(std1);
//we use object name with method and dont write class name
//Example
//We make method to access property outside as its private now we can acces it outside using method
class Student4 {
    constructor(name, rollNo, email) {
        this.name = name;
        this.rollNo = rollNo;
        this.email = email;
        this.grades = []; //its an array
    }
    //getGrades is method
    getGrades(g) {
        this.grades.push(g); //g is parameter
    }
}
let std2 = new Student4("ali khan", 72364, "ali@gmail.com");
//std2.getGrades(345346); //error num is not assign to string
std2.getGrades("c"); //calling function through name
console.log(std2);
//Getter , Setter
//get retuen property value
//set update property value
//get and set are keywords for making getter and setter function
//getter and setter function name should be same
class Person {
    constructor(age, firstName, lastName) {
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    //Getter
    //This is a getter method - allows reading age property
    get age() {
        return this._age;
    }
    //Setter
    //This is a setter method - allows modifying age property
    set age(theAge) {
        if (theAge <= 18 || theAge >= 40) {
            throw new Error("The age is invalid");
        }
        this._age = theAge;
    }
}
let per1 = new Person(18, "hira", "ekram");
console.log(per1.age); //getter {18} access
// Calls GETTER → returns 18 → Output: 18
per1.age = 60;
// Calls SETTER with value 60
// Validation: 60 <= 18 OR 60 >= 40 → TRUE
// Throws Error: "The age is invalid"
console.log(per1.age);
export {};
// This line NEVER EXECUTES because error was thrown
//# sourceMappingURL=index.js.map