// let a = head.getAttribute("class");
// console.log(a);
// console.log(head.hasAttribute("class"));
// let arr = [12, 34, 64, 76, 46];
// let map = arr.map((index, order, array) => {
//   console.log(index, order, array);
// });
// console.log(head.dataset);
// let d = document.getElementsByTagName("div")[0];
// d.innerHTML = d.innerHTML + "<h1>hello world</h1>";
// let div = document.createElement("div");
// d.replaceWith(div);
// first = document.getElementById("first")
// first.className = "red text-black"
// first.classList.add("red")
// first.classList.contains("yellow")

// document.write("resolve(1)hello")
// let a  = set2000(function() {
// alert("i am inside set timeout")
// },2000)

// let b = prompt("do you really wanna clear timeout")
// if("n" == b){
//   clearTimeout(a)

// }
// console.log(a)
// const sum = (a,b)=>{
//   console.log("yes i am running ")
//   a+b
// }
// setTimeout(sum , 1000 ,1 ,2)
//  clearTimeout("sum");
//  setInterval(function() {
//   alert("setinterval")
//  }, 3000);

//INTRODUCTION TO BROWSER EVENTS

// a.onclick = ()=>{
//     let b =document.getElementsByClassName("container")
//     b.innerHTML = "hello world"
// }

//EVENT LISTENERS
// let btn = document.getElementById("btn");

// let x = function (e) {
//   console.log(event.target);
//   console.log(event.type, event.clientX, event.clientY);
//   alert("hello world");
// };

// btn.addEventListener("click", x);

// let y = function (e) {
//   alert("hello world2");
// };

// btn.addEventListener("click", y);

// let a = prompt("what is your favourite number")
// if(a==2){
//     btn.removeEventListener('click',y)
// //     }
// let a = new Date()
// let h = a.getHours()
// let m = a.getMinutes()
// let s = a.getSeconds()
// let d = a.getDate()
// setInterval(console.log(h + ":" + m + ":" + s + ":" + d),)

// const timeElement = document.getElementById("btn");
// function updateTime() {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();

//     // Format the string with leading zeroes
//     const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

//     timeElement.innerText = clockStr;
// }

// updateTime();
// setInterval(updateTime, 1000);

//SYNCHRONOUS PROGRAMMING
// let a = prompt("what is your name?")
// let b = prompt("what is your age?")
// let c = prompt("what is your favourite color")
// console.log(a + " is " + b + " years old and has " + c + " favourite color ")

//ASYNCHRONOUS PROGRAMMING
// console.log("Start")
// setTimeout(function() {
//     console.log("hey i am good")
// }, 2000);
// console.log("End")

//PROMISES
// console.log("hello")
// console.log("My name is Adnan")
// setTimeout(() => {
//   console.log("hello2")
// }, 2000);
// let promise = new Promise(function(resolve,reject){
//   alert("hello")
//   resolve(56)
// })
// console.log(promise)

//.THEN AND .CATCH
//reject
//
// let p = new Promise((resolve,reject)=>{
// console.log("promise is pending")
// setTimeout(() => {
//   console.log("promise is fulfilled")
//   resolve(true)
// }, 5000);
// })
// let p2 = new Promise((resolve,reject)=>{
//   console.log("promise is pending")
//   setTimeout(() => {
//     console.log("promise is rejected")
//     reject(new Error("i am an error"))

// }, 5000);
// })
// p.then((value)=>{
//   console.log(value)
// })
// p2.catch((error)=>{
//   console.log("error occured")
// })
// console.log(p)
// console.log(p2)

// CHAINING .THEN AND .CATCH
// let p1 = new Promise((resolve , reject)=>{
//   setTimeout(() => {
//     console.log("resolved after 2 seconds")
//   }, 2000);
//   resolve(56)
// })
// p1.then((value)=>{
//  console.log(value)
//  let p2 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("promise 2")
//   }, 2000);
// })
//  return p2
// }).then((value)=>{
//   console.log("we are done")
//   return 2
// }).then((value)=>{
//   setTimeout(() => {
//     console.log("now we are done")

//   }, 3000);
// })

// LOADSCRIPT

// const loadscript = (src)=>{
//   return new Promise(resolve=>{
//   let script = document.createElement("script")
//   script.type = "text/javascript"
//   script.src = src
//   script.body.appendChild(script)
//   script.onload = ()=>{
//   resolve(1)

//   }
//   script.onerror = ()=>{reject(0)}
// })
// }
// let p1 = loadscript("http://localhost:3000/script.js")
// p1.then((value)=>{
//   console.log(value)
// })

// ATTACHING HANDLERS
//  let p1 = new Promise((resolve,reject)=>{
//    console.log("hey i am resolved")
//   setTimeout(() => {
//     resolve(1)
//   }, 2000);
//  })
//  p1.then(()=>{
//   console.log("hurray!")
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(4)
//     }, 3000);
//   }).then((value)=>{console.log(value)})
//  })
//  p1.then(()=>{
//   console.log("congratulations this promise is now resolved")
//  })

// PROMISE API
// let p1 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve(1)
//   }, 1000);
// })
// let p2 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve(2)
//   }, 2000);
// })
// let p3 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve(3)
//     reject(new Error("error"))
//   }, 3000);
// })
// p1.then((value)=>{
//   console.log(value)
// })
// p2.then((value)=>{
//   console.log(value)
// })
// p3.then((value)=>{
//   console.log(value)
// })
// let promise_all =Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
// console.log(value)
// })
// let promise_all2 =Promise.allSettled([p1,p2,p3])
// promise_all2.then((value)=>{
// console.log(value)
// })
// let error = Promise.reject([p1,p2,p3])
// error.then((value)=>{
//   console.log(value)
// })

//ASYNC AND AWAIT
//async function always returns a promise and wraps non promises in it

// async function weather(){
// let delhiweather = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("27 degrees")
//   }, 2000);
// })
// let bangaloreweather = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("21 degrees")
//   }, 3000);
// })
// console.log("Fetching weather ,Please wait")
// let delhiW = await delhiweather
// console.log("delhi weather " + delhiW)
// let bangaloreW = await bangaloreweather
// console.log("bangalore weather " + bangaloreW)

// return[delhiW,bangaloreW]
// }
// //  delhiweather.then(alert)
// //  bangaloreweather.then(alert)
//  let a = weather()
//  console.log(a)
//  a.then((value)=>{
//   console.log(value)
//  })
//  const cherry = async()=>{
//   console.log("hey I am Adnan ")
//  }
//  const main = async()=>{
//   let b = await weather()
//   let c = await cherry()
//  }
//  main()

//ERROR HANDLING
// setTimeout(() => {
//   console.log("Fetching username and password")

// }, 3000);

// try {
//   setTimeout(() => {
//     try {
//       console.log(rahul)
//     }
//     catch(error){
//       console.log(error)
//     }
//   }, 100);
// } catch (error) {
//   console.log("balle balle")
// }
// setTimeout(() => {
//   console.log("Fetching username and Hacking wifi")
// }, 4000);
// setTimeout(() => {
//   console.log("Uesrname:Saif")
// }, 5000);
// setTimeout(() => {
//   console.log("Saif's password:131038")
// }, 6000);

// ERROR OBJECT

// try {
//   let age = prompt("enter your age")
//   age = Number.parseInt(age)
//   if (age>120) {
//     throw new ReferenceError("this is not good")

//   }
//   console.log(adnan)
// } catch (error) {
//   console.log(error.name)
//   console.log(error.message)
//   console.log(error.stack)
// }
// finally{
//   console.log("End of program")
// }

// Practise set
// const loadscript = async(src)=>{
//   return new Promise((resolve,reject)=>{
//   let script = document.createElement("script")
//   script.src = src
//   script.onload=()=>{
//       resolve(src = " done")
//   }
//   document.head.append(script)
// })
// }
// const main = async()=>{
//   let a = await ("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css")
//   console.log(a)
// }
// let d = new Date()
// // let h = d.getHours()
// // let m = d.getMinutes()
// console.log(d )
// main()

// FINALLY CLAUSE
// used for final cleanup
// const f = ()=>{
// try{
//   let a= 0
//   console.log(program)
//   console.log("program ran successfully")

// }
// catch(err){
//   console.log(p)
//   console.log("this is an error")
// }
// finally{
//   console.log("end of program")
// }
// }
// f()
// let time = document.getElementById("time")
// setInterval(() => {
//   let d = new Date()
//   time.innerHTML = d
// }, 1000);

// FETCH API
// let p = fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((value1)=>{
//   console.log(value1.status)
//   console.log(value1.ok)
//   return value1.json()
// }).then((value2)=>{
//   console.log(value2)
// })

// POST REQUEST
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// COOKIES
// cookies are small strings of data stored  directly in the browser

// document.cookie = "name=Adnan"
// document.cookie = "name=Adnan1"
// document.cookie = "name=Adnan2009"
// document.cookie = "name=Adnan3005"

// let key = prompt("enter you key")
// let value = prompt("enter your value")
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie)

// LOCAL STORAGE
// let key = prompt("enter your key")
// let value = prompt("enter your value")
// localStorage.setItem(key,value)
// console.log(`the value at ${key} is ${localStorage.getItem(key)}`)
// if (key == 0) {
//   localStorage.clear()
// }

// SESSION STORAGE

// sessionStorage.setItem("name","Adnan")
// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")

// window.onstorage = (e)=>{
//   alert("changed")
//   console.log(e)

// }

// PRACTICE SET 10
// ****************************************** NOTES APP ****************************************************************8
// let n = localStorage.getItem("note");
// alert("your note is " + n);
// let a = prompt("enter your note");
// if (a) {

//   localStorage.setItem("note", a);
// }
// let c = confirm("do you want to delete your note")
// if (c) {
//   localStorage.removeItem("note")
// }

// HACKERMAN

// let a =[
//     "Initializing Hack Tool",
//     "Connecting to Server",
//     "Connecting to Facebook",
//     "Connection failed ",
//     "Connecting to Server 2",
//     "Connection Established...",
//     "Username iamAdnan",
//     "Trying Brute Force",
//     "200k passwords tried",
//     "Match not found",
//     "Another 200k passwords tried",
//     "Match not found",
//     "Another 200k passwords tried",
//     "Accessing Account",
//     "Hack Successful"
// ]
// let text = document.getElementById("text")
// const sleep = async(seconds)=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(true)
//     }, seconds*1000);
//   })
// }
// const showhack = async(messages)=>{
//   await sleep(1.2)
//   console.log(messages)
//   text.innerHTML = text.innerHTML + messages + "<br>"
// }

// (async()=>{
//     for(let i = 0;i<a.length;i++){
//         await showhack(a[i])
//     }
// })()

// TODO LIST

// INTRODUCTION TO OBJECT ORIENTED PROGRAMMING
// let object = {
//   "Name":"Adnan",
//   "Language":"English"
// }
// console.log(object)
// let p = {
//   run:()=>{
//     alert("run")
//   }
// }
// object.__proto__ = p;
// p.__proto__ = {
//   name:"jacky"}
// object.run()
// console.log(object.name)

// CLASSES AND OBJECTS
// class RaiwayForm {
//   constructor(givenname, trainno, address ) {
//     console.log("constructor called " + givenname + this.trainno);
//     this.name = givenname;
//     this.trainno = [trainno];
//     this.address = address;
//   }
//   submit() {
//     console.log(
//       this.name + "'s" + " form submitted, Train Number: " + this.trainno + "," + " Address: " + this.address
//     );
//   }
//   cancel() {
//     console.log(
//       this.name + "'s" + " form is cancelled, Train Number:" +  this.trainno + "," + " Address: " + this.address
//     );
//   }
// }
// let adnan = new RaiwayForm("Adnan", 27618, "Maulviganj");

// let rohaan = new RaiwayForm("Rohaan", 12913, "Jopling Road");

// adnan.submit();
// rohaan.submit();
// rohaan.cancel();
// adnan.cancel();

// INHERITANCE AND EXTENDS KEYWORD
// class Animal{
//   constructor(name,color){
// this.name = name
// this.colot = color
//   }
//   run(){
//     console.log(this.name + " is running")
//   }
//   shout(){
//     console.log(this.name + " is shouting")
//   }
// }
// class Monkey extends Animal{
//   eatbanana(){
//     console.log(this.name + " in eating a banana")
//   }
// }
// let dog = new Animal("Bruno", "Brown")
// dog.run()
// dog.shout()
// let monkey = new Monkey("chimp","brown")
// monkey.run()
// monkey.eatbanana()

// METHOD OVERRIDING
// class Employee {
//   constructor(name){
//     console.log(`${name} - Employee's constructor is here`)
//     this.name
//   }
//   login() {
//     console.log(`Employee has logged in`);
//   }
//   logout() {
//     console.log(`Employee has logged out`);
//   }
//   requestleave(leave) {
//     console.log(`Employee has requested ${leave} leaves `);
//   }
// }

// class programmer extends Employee {
//   constructor(name){
//     super(name)
//     console.log(`${name} - Programmer's constructor is here`)
//     this.name
//   }
//   requestcoffee(x) {
//     console.log(`Employee has requested ${x} coffee`);
//   }
//   requestleave(leave) {
//     super.requestleave(3)
//     // console.log(`Employee has requested ${leave + 1} leaves `);
//   }
// }
// let e = new programmer("Adnan");
// e.login();
// e.requestcoffee(3);
// e.requestleave(3);

// STATIC METHODS
// class Animal{
//   constructor(name){
//     this.name = Animal.capitalise(name)  //static method can only be called by the class name
//   }
//   walk(){
//     console.log("Animal " + this.name + " is walking")
//   }
//   static capitalise(name){
//    return name.charAt(0).toUpperCase() + name.substr(1,name.length)
//   }
// }
// let j = new Animal("jack")
// j.walk()

// GETTERS AND SETTERS
// class Animal{
//   constructor(name){
//     this.name = name
//   }
//   fly(){
//    console.log("I am flying")
//   }
//   get name(){
//     return this._name
//   }
//   set name(newName){
//     this._name = newName
//   }
// }
// class Rabbit extends Animal{
//   eat(){
//     console.log(this.name + " is eating")
//   }
// }
// let a = new Rabbit("Adnan")
// a.fly()
// console.log(a.name)
// a.eat()
// a.name = "Jack"
// let c = 53
// console.log(a.name)
// console.log(a instanceof Rabbit)
// console.log(a instanceof Animal)
// console.log(c instanceof Rabbit)

// PRACTICE SET 11

// class complex {
//   constructor(real, imaginary) {
//     this.real = real;
//     this.imaginary = imaginary;
//   }
//   print() {
//     console.log(this.real + " is a real number");
//     console.log(this.imaginary + " is an imaginary number");
//   }
//   add() {
//     let sum = this.real + this.imaginary;
//     console.log("the sum of " + this.real + " and " + this.imaginary + " is " + sum );
//   }
//   get real() {
//     return this._real;
//   }
//   set real(newReal) {
//     this._real = newReal;
//   }
//   get imaginary() {
//     return this._imaginary;
//   }
//   set imaginary(newImaginary) {
//     this._imaginary = newImaginary;
//   }
// }
// let a = new complex();
// a.real = 210;
// a.imaginary = 80;
// let b = new complex();
// b.real = 796;
// b.imaginary = 819;
// a.print();
// a.add();
// b.print();
// b.add();

// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   details() {
//     console.log("Name: " + this.name);
//     console.log(`Age: ${this.age}`);
//   }
// }

// class Student extends Human {
//   constructor(name, age, standard) {
//     super();
//     this.name = name;
//     this.age = age;
//     this.standard = standard;
//   }
//   details() {
//     console.log("Name: " + this.name);
//     console.log(`Age: ${this.age}`);
//     console.log(`Standard: ${this.standard}`);
//   }
// }
// let Adnan = new Student("Adnan", 17, 11);
// Adnan.details();
// let Rohaan = new Student("Rohaan", 17, 11);
// Rohaan.details();
// console.log(Adnan instanceof Human);

// TODO LIST
// let todo = document.getElementById("todo")
// let title = document.getElementById("title")
// let desc = document.getElementById("desc")
// let submit = document.getElementById("btn")
// submit.addEventListener("click", (e)=>{
//   e.preventDefault()
// let titlec = title.value
// let descc = desc.value
// localStorage.setItem("todo", [titlec,descc])
// console.log(e);
// todo.innerHTML = `<h1>${titlec}</h1>
// <p>${descc}</p>`
// })

// let del = document.getElementById("dlt")
// del.addEventListener("click",(e)=>{
//   e.preventDefault()
//   localStorage.removeItem("todo")
// })

// IIFE
// let a = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(456);
//     }, 2000);
//   });
// };
// ( async () => {
//   let b = await a();
//   console.log(b);
//   let c = await a();
//   console.log(c);
//   let d = await a();
//   console.log(d);
// })();

// DESTRUCTURING
// let arr = [3,5,8,4,7,6]
// let [a,b,c,...rest] = arr
// console.log(a, ...rest)
// console.log(b, ...rest)
// console.log(c, ...rest)
// console.log(...rest)
// console.log(a,b,c,rest)
// let {a,b} = {a:"adnan",b:"rohaan"}
// console.log(a,b)

// SPREAD OPERATOR
// let arr = [3,5,8]
// let obj = {...arr}
// console.log(obj)

// let sum=(v1,v2,v3)=>{
// return v1+v2+v3
// }
// console.log(sum(...arr))

// let obj2 = {
//   name:"Adnan",
//   company:"xyz",
//   address:"xyz"
// }
// console.log({...obj2,name:"Rohaan"});

// SCOPE
// let p = 10
// function xy(params) {
//   let a = 9
//   console.log(a);
//   console.log(p);
// }
// xy()
// console.log(p);

// HOISTING
// console.log(a);
// greet()
// function greet() {
//   console.log("good morning");
// }

// var a = 9 //Declaration hoisted to the top but initialisation is not
// console.log(a);

// CLOSURE SET
// message = "Good Global"
// function hello(params) {
//   let message= "Good Morning"
// console.log("Hello " + message);
// let c = function hello2() {
//   console.log("i am c " + message);
// }
//  c()
// }
// hello()
// function init(params) {
//   var name = "Mozilla"
//   function display(params) {
//     console.log(name);
//   }
//    display()
// }
// init()

// ARROW FUNCTIONS
// const sayhello = (name,greeting) =>  console.log(greeting + " " + name);
// sayhello("Adnan","Good Afternoon" )

// const x ={
//   name:"Adnan",
//   role:"Web developer",
//   exp:"10",
//   show:function () {
//     console.log(`The name is ${this.name}`);
//     console.log(`The role is ${this.role}`);
//     console.log(`${this.name} has an experience of ${this.exp} years`);
//   }
// }

// x.show()

// PRACTICE SET 12

// const a = async(text)=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(text)
//     }, 2000);
//   })
// }
// (async()=>{
//   let text = await a("Hello")
//   console.log(text);
//   text = await a("World")
//   console.log(text);
// })()
// const a = async (n = 1) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("true");
//     }, 1000 * n);
//   });
// };
// async () => {
//   let text = await a("true");
//   console.log(text);
// };

// PASSWORD GENERATOR
// class password {
//   constructor() {
//     this.pass = "";
//     console.log("Welcome to password generator");
//   }
//   generatePassword(len) {
//     let char = "abcdefghijklmnopqrstuvwxyz";
//     let numbers = "1234567890";
//     let specials = "_&";
//     if (len < 3) {
//       console.log("Your Password should be atleast 3 characters long");
//     } else {
//       let i = 0;
//       while (i < len) {
//         this.pass += char[Math.floor(Math.random() * char.length)];
//         this.pass += numbers[Math.floor(Math.random() * numbers.length)];
//         this.pass += specials[Math.floor(Math.random() * specials.length)];
//         i += 3;
//       }
//       this.pass = this.pass.substr(0, len);
//       return this.pass;
//     }
//   }
// }
//  let length = prompt("Enter the Length");
// let p = new password();
// console.log(p.generatePassword(length));

// NPM AND NODE.JS PACKAGES
let obj ={
name:"Adnan",
name:"Rohaan",
name:"Wamiq"
}
let arr = Array.from(obj)
console.log(arr);