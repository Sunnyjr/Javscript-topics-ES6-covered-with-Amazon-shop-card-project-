
"use strict";

const { jsx } = require("react/jsx-runtime");

/*
rules: -
1 - "normal function and arrow function both gives window object in global browser mode."
2 - "in strict mode normal function gives undefine and arrow function gives window object."
3 - "in object normal function belongs to currenrt object so "this" can access properties of in side current object.but arrow function gives undefine in current object"
*/
// // javascript is the dynamic type langauage cos we can change variable values anytime and over rite it .
// let a = 5;
// a="harsj" ;
// a= true
// console.log(a); // true


// truthy and falsy value in js
// 0 null undefined false NaN document.all => all are falsy value
// other than this all truthy value.


// ------this object---------
/*
console.log(this); //gives global object window but if in strict mode this gives undefine.

const object = {
    a: 2,
    b: a,
}
console.log(object.a); //error undefine, cos object is not created yet
*/

/*
function logThis() {
    console.log(this); //undefiine in strict mode
}
logThis();
logThis.call('hrllo'); //call()methos is predefine  provided by jsand used to call the function.


const object1 = {
    name: 'sara',
    woman: 'woman',

    method: () => {
        console.log("name=", this.woman);  //arrow func gives global object window  and while assccing object it will give undefine
    },
    func() {
        console.log('new fucn', this);  // normal func gives objects and properties  inside of current object.can access the properties inside of current object
    }
}
object1.method();
object1.func();

function object2() {
    console.log("normal func", this);  //undifine
};
object2()

const arrow = () => {
    console.log("arrow", this);  //gives window object
}
arrow()
*/
// -----------------------------------------------------------------

// -----CALLBACK function----
/*
"callback - it is a method who call a function inside another function to execute later."
"why it is use ?  it allow asyncronous programming and reusability."


function showroom(bike, callback) {
    console.log(bike);
    callback();
}
const callback = () => {

    const runner = 'biker'
    setTimeout(() => {
        console.log('call me');
    }, 2000)
}
showroom('adventure350', callback());
*/

// ------callback hell--------

/*
// -----------------------Promise----------------

"Promis is a object which represent eventual data represention and fauiler of asyncronous data."

// syntax -
const promise = new Promise (funtion(resolve, reject));

const cart = ['shoes', 'pants', 'shirt', 'watch'];

createOder(cart, function (oderId) {
    paymentMode(oderId, function (paymentInfo) {
        orderSummary(orderInfo, function () {
            updateWallet();
        });
    });
});

//promisses get our code out of callbackhell.and this is a good way to handle asycn operations.
const promiss = createOrder(cart);

promiss.then(function (orderId) { return paymentMode(orderId) })
    .then(function (paymentInfo) { return orderSummary(paymentInfo) })
    .then(function (paymentInfo) { return updateWallet(paymentInfo) })

*/


// -----------------async and await----------
/*
// what is async?  -it is keyword witch is uesed to create async funtion and its always return the promiss. it has a await function inside it witch await for the response of promiss.

const p = new Promise((resolve, reject) => {
    resolve("promiss resolve value");
})
async function getData() {
    return p;  //return promis
}
const dataPromise = getData();
console.log(dataPromise);

dataPromise.then((result) => console.log(result)); //promiss resolve value.
*/

/*
// what is await?  - await wait for the asyncronous data to load.it takes time to process.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("reslove this data")
    }, 4000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('print second promis !');

    }, 10000)
})
async function handlePromise() {

    console.log("print the msg");
    const data = await promise; //wait for 4 second without using await keyword it will give promise object not data.
    console.log(data);
    console.log('pens');

    const data2 = await promise2;
    console.log(data2);

}
handlePromise();
*/

/*
//   how its work?
//   error handling?  - always  try to code in try and catch block. better way of writing code.
//   fetch() - it is a HTTP method to call the API whitch perform(GET, POST ,PUT DELETE) method.
// it is always return the promise and promise return responce object that converted into json n string data and finnaly we have exact data.

async function greet() {
    try {
        const data = await fetch("https://api.github.com/users/{user}");
        const jsonValue = data.json();
        console.log(jsonValue);
    }
    catch {
        console.log("error !!");
    }
}
greet();


// async await vs promisses ?
// async await is the syntactic sugar. its a way of writing promisses in a modern way. both are them are same cos its work in backend like promiss do.
// and u dont have to do .then() mthod to handle promiss chaining.
*/


/*
const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log('count ddata');

    }, 4000)

})



const show = () => {
    const newP = p1;
    console.log(newP);
    console.log("dataaaa");

}
show();
*/

/*
🔹 ---------------Lexical Scope vs Dynamic Scope-------------------
So, inner functions can access variables from outer functions because of how they are written in the code.

const x = () => {
    let name = 'shubham';

    const y = () => {
        let name2;
        conosle.log("hi " + name);
    }
    y();
}
x();



Lexical Scope(JavaScript) → depends on where the function is defined.

Dynamic Scope(not in JS, e.g., Bash) → depends on where the function is called.

let x = 1;

function y() {
    console.log(x);
}

function z() {
    let x = 2;
    y();
}
z();
*/

// ----------------------hoisting-----------------
// greet();                 // hello world will work hoisting
// function greet() {
//     console.log("hello world");
// }

// greet2();               // error greet2 is not defined hoisting not work here, value temperal dead zone me rehatihay to can not perform hoisting.
// const greet2 = () => {
//     console.log("hello arrow function");
// }

//hoisting using var but not with let and const btw hoti hoist tino keywords hay,
// " per var ka value undefine hota hay let and const me temporal dead zone me rehta hay to error deta hay."

// console.log('Hello, World!', a);
// let a = 2;
// console.log(a);

// const check = () => {

//     let b = "hey mitu"
//     var c = "hey c"
//     console.log(b);
//     console.log(c);

// }
// check.name = "motu";
// check.count = 5;
// console.log(check.name);
// console.log(check.c);

/*
// ....................array methods ..........
// forEach() and Map()
const array = [1, 2, 3, 4, 5, 6];
const arr2 = [6, 7, 8, 9]
 const newar = array.forEach((e) => console.log(e * 2)) // foreach give values print
 console.log(newar); //undefined because forEach does not return anything.


// const double = (n) => {
//     return n * 2
// }
// const newObj = array.map(double);
// console.log(newObj); // map return new array


// ...find()......... use to find  elemnt in the array return a elemnt when the first condition is satisfy.
let find = array.find((num, i) => num == 2 * 2);
console.log('find', find);
let index = array.findIndex((i) => i == 3); // find index of the element
console.log('index', index);



//....filter()....
let filter = array.filter((num) => num > 2);
console.log('filter', filter); // return new array of elemnt which satisfy the condition


let join = array.join(2)
console.log('join', join); // return new array of elemnt which satisfy the condition


let slice = array.slice(0, 3);
console.log('slice', slice); // return new array of actual array so u can have new array of sub elements.


let splice = array.splice(3, 2);// index and how many elemnt to remove
console.log('splice', splice); // remove the elemnt from the actual array and return the removed elemnt in new array
console.log('actual array', array); // actual array after splice


let reduce = array.reduce((acc, curr) => acc + curr, 2); // acc=acc+curr
console.log('reduce', reduce); // return single value after operation on all elemnt of array

//pop()
//push()
//shift()
*/




// const obj1 = {};
// const obj2 = {
//     name: 'shubh',
// }
// const obj3 = {
//     name: 'ronak',
// }
// obj1[obj2] = {
//     name: ' rish',
// }
// obj1[obj3] = {
//     name: 'greesa'
// }

// console.log(obj1[obj2]); //greesa  bcos [object objec] the lltest value get replace whatever u write object of object. we have to see obj1 obly that will get replace


// function sum(a, b) {
//     if (a && b) return a + b;
//     return function (b) {
//         return a + b;
//     }
// }
// console.log(sum(2, 5));
// console.log(sum(2)(5));
// console.log(sum(2));

// console.log([] === []);//false bcos of non-premetive data type. the function differnace is, it will check the memory location n there will be differt location.
// console.log([] == []);//false
// console.log('' === '');//true bcos of premitive data type.
// console.log('' == '');//true


// .........Program for remove string from Array using map() method ........
// arr = [2, 4, 3, 'shub', 3, 'rishi', 45, 'shiva'];
// const numbers = [];
// const strings = [];
// // let newString = arr.forEach((no) => {
// //     if (typeof (no) == "number") {
// //         let newNo = numbers.push(no * 2);

// //     };
// // }
// // )
// // console.log("arr...", newString);
// // // console.log('arr of number...', numbers);

// let newArray = arr.map(item => typeof item === "string" ? null : item)
//     .filter(Boolean);

// console.log(newArray);


//...... Program for factorial........
// function factorial(n) {
//     if (n === 0) return 1;
//     return n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120



//...........call() apply() bind().......

// const name = {

//     fName: "sunny",
//     lName: "hase",

//     fullName(city) {
//         console.log(this.fName + " " + this.lName + city)
//     }
// }
// let fullNameObj = function (city, state) { // function borrowing
//     console.log(this.fName + ' ' + this.lName + '' + city, state)
// }


// const name2 = {
//     fName: 'rocky',
//     lName: 'bon',
// }

// name.fullName('mumbai') //normal object call
// name.fullName.call(name2, 'pune')
// name.fullName.apply(name2, ['nagpur']) //same as call method but it takes second arrgumrnt as a array list of the parameter.
// fullNameObj.call(name2, 'nagpur', 'maharashtra')// function borrowing

// let objName = fullNameObj.bind(name, 'chand', 'MP'); //bind() takes function in obj and calls it.
// console.log(objName);
// objName();



//----------------var, let, const  - common confusion.---------
// why var leaks outside block but let does not?
// if (true) {
//     var a = 1;
//     let b = 2;
// }
// console.log(a) //a  reason - functional scoped so it does not repspect block n for so its accesasible.
// console.log(b) // refferance error -  blocked scope so its gives error.

// const person = { name: "harsh" };   //const can be update but can not be reassigned
// person.name = "shub"; // allowed
// person = {}  //not allowed
// Object.freeze //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.


//------------- premitive value and nonPreimitive value (reference)-----------

// let a = 2;
// let b = a;
// // this called exact copy of a ki value means if you change the value of a then it will not change the value of b  this is called exact copy.
// // in primitive  the value store of variable. in nonprimitive the referance od variable stored.
// let arr = [1, 2, 3];
// let arr2 = arr;
//so if u change the arr then it will change in arr2 as well that is called referance store.


// ------pure and unpure function / pure components and unpure components----------

// // the function who does not change anything outside of the function called pure function. same for components.
// let total = 2;
// function totalno(num) {
//     let addtotal = total;
//     addtotal = addtotal + num;  // change inner variable val not outer called pure function.
//     console.log(addtotal);
// }

// // the function who changes outer initity or value of variable called impure function.
// let no = 2;
// function total(val) {
//     no = no + val;  //increase the total variable that change outer intity.
// }


// ------------------------------reccurtion and immidiatly invoke function IIFE-----------------
//real world example is--  iife make variables private you can't access outside the function.

// The function whitch call itself imediatly
// (function(){
//     console.log("hii")
// })();
// arrow function
// (() => {
//     return "hiii"
// })()




// differant beetwen closer andand HOF
// bpthe returns function
// closer - function inside function that access the outer function variable even after the outer function execution is complete.
// HOF - it is a function that takes function as an argument or return function as a output.

// main differance is
// closer return function that access outer function variable.
// HOF return function that take function as argument or return function as output.

// HOC - higher order component
// HOC - it is a function that takes component as an argument and return new component. it is used to reuse the component logic.
//HOC return component that wrap the original component with extra functionality.



// --------------execution context--------------

// execution context - it is an abstract concept that holds information about the environment within which the current code is being executed.
// there are two type of execution context
// 1 - global execution context
// 2 - function execution context

// memory heap - it is a place where the variables and objects are stored in memory.
// call stack - it is a place where the function calls are stored in a stack data structure.
// when a function is called, a new execution context is created and pushed onto the call stack.
// when the function execution is complete, the execution context is popped off the call stack.
// the execution context contains two phases
// 1 - creation phase
// 2 - execution phase
// in creation phase, the variables and functions are hoisted and memory is allocated for them.
// in execution phase, the code is executed line by line.
// example -
// function a() {
//     console.log("function a");
//     function b() {
//         console.log("function b");
//     }

//     b();
// }
// a();

// encapsulation - it is a concept of wrapping the data and function together in a single unit.
// it is used to hide the internal details of the object and only expose the necessary details.



// prototype - every function  in js  automatically has a prototype property, which is used when creating objects with the new keyword.
const person = {
    name: "shub",
    class: "high",
    status: function (text) {
        console.log(this.text);
    }
}
person.status("good");
person.prototype.behaviour = this.good