// ECMA Script--> documentation of java script
/*const accountId = 154566
let accountEmail = "nitesh725025@gmail.com"
var accountPassword = 125469
accountCity = "Giridih"
console.log(accountId);
let accountState;
console.log([accountEmail , accountId,accountPassword,accountState]);*/
/*
prefer not to use var
use let for variable and const for constant
*/
//alert("welcome to my website") // we are using nodejs not browser
// data type
//number 
//bigint
//Boolean = true/false
//string = ""
//null = standalone value(empty value)
//undefined 
//symbol = unique

// Object

//console.log(typeof "Nitesh") ==> string
// data type conversion 
//"33" => 33
//"33abc" => NaN
//true => 1 ; false => 0 ; "" => false ; "Nitesh" => true
//let someNumber = 33
//let stringNumber = String(someNumber)
//console.log(typeof stringNumber)
// console.log(2>1)
// console.log(2!=1)
// console.log(3>4)
// console.log("2">1); data type of string is converted into number
//console.log("2" === 2); different data type


// primitive data type--> 7 types 
//strings ,number , boolean ,null , undefined , symbol , Bigint

//Reference (Non Primitive)
// arrays , objects , function

// const name = "nitesh"
// console.log(typeof name);

// display option in java script
// innerHTML  or innerText. --> document.getElementById("demo").innerText = "Hello World";
// console.log() --> console.log(5+6)
// window.alert() --> window.alert(5 + 6) or alert(5+6)
//document.write() --> document.write(5 + 6);
// window.print() --> print the existing page --> <button onclick="window.print()">Print this page</button>

// switch case :
// let day = "Monday";
// switch (day) {
//   case "Monday":
//     console.log("Start of the week!");
//     break;
//   case "Friday":
//     console.log("Weekend is near!");
//     break;
//   case "Sunday":
//     console.log("It's a rest day!");
//     break;
//   default:
//     console.log("It's a regular day.");
// }

//Memory --> stack(Primitive) and Heap(Non-primitive)  
// let name = "Nitesh"
// let address = "Dhanbad"
// console.log(`Hello I am ${name} and I am from ${address}`)
// const gamename = new String("Nitesh")
// console.log(gamename)
//----------------------------------------------------------------------
// Number and maths 
// 
//+++++++++++++++++++++  Maths  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-100))
// console.log(Math.round(25.89))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(8.9))
// console.log(Math.min(8,42,6,8,9))
// console.log(Math.max(4,5,8,3,69))
// console.log(Math.random())
// console.log(Math.random()*10+1)
// console.log(Math.floor(Math.random()*10+1))
//+++++++++++++++++ arrays ++++++++++++++++++++++++++++++
// const arr = [1,2,3,4,5,6]
// console.log(arr[2])
// const myarr = new Array(1,2,3,4,5,6)
// console.log(myarr)
// myarr.push(4)   //add value to last index
// console.log(myarr)
// myarr.pop()   // remove last character
// console.log(myarr)
// myarr.unshift(9) // add any value to start and shift all the values
// myarr.shift() // remove first index value
// console.log(myarr.slice(0,2))
// console.log(myarr.splice(0,3))

// splice manipulate the original array ,remove sliced element from original array
// console.log(Array.isArray("Hitesh")) // tells us that it is array or not 
// console.log(Array.from("Hitesh")) // give us array

//++++++++++++++++++++++++++++++++++++++++++++ Objects ++++++++++++++++++++++++++++++++++++++++++++++
// const js_user = new Object()  // singleton object
// object literal
// const js_user = {
//     name: "Nitesh" ,
//     age : 18,
//     location : "Dhanbad",
//     email : "nitesh@GOOGLE.COM",
//     isloggedin: false,
//     lastLoginDays: ["Monday","Tuesday","Saturday"]
// }
// console.log(js_user.email)

// const tinder_user ={}
// tinder_user.id = "123abc"
// tinder_user.name = "Jacob"
// tinder_user.isloggedin = false
// console.log(tinder_user)

// const regular_user = {
//     email : "some@gmail.com",
//     fullname : {
//              firstname: "Nitesh",
//              lastname: "Mandal"
//     }
// }
// console.log(regular_user.fullname.firstname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1 , obj2)
const obj3 = { ...obj1, ...obj2 }
console.log(obj3)
//----------------------------------------------------------------------------------------------------
// var str = "My name is Nitesh "
// var str2 = "and I like playing badminton"
// console.log(str.charCodeAt(4))
// console.log(str.charAt(5));
// console.log(str.length)
// console.log(str.concat(str2))
// console.log(str.endsWith("Nitesh"))
// console.log(str.endsWith("is"))
// console.log(str.startsWith("My"))
// console.log(str.fromCharCode(77))
// console.log(str.includes("name"))
// console.log(str.includes("Kumar"))
//console.log(str.indexOf("Nitesh"))
// var str3 = "My name is Nitesh and his name is also Nitesh"
//console.log(str3.lastIndexOf("Nitesh"))
// var str4 = "2411069"
// console.log(str4.padEnd(10,"X"))
// console.log(str4.padStart(15,"#"))
// console.log(str.slice(0,10))
// console.log(str.substring(0,10))
// console.log(str.substr(0,10))
// console.log(str.repeat(4))
// console.log(str.replace("Nitesh" , "Rahul"))
// console.log(str3.replaceAll("Nitesh" ,"Rahul"))
// console.log(str.split(" "))
// var str5 = "   Nitesh    "
// console.log(str5.trim())
// console.log(str5.trimEnd())
// console.log(str5.trimStart())

//----------------------------------------------------------------------------------------------

//1.Write a JavaScript function to check whether an input is a string or not. 
// function is_string(a){
// if(typeof a == "string"){
//     return true
// }
// else{
//     return false
// }
// }
// function call(){
//     var arr = ["Nitesh","Prakher","Rahul","Tushar","Shaswat"]
//     var newarr = arr.filter((item)=>{
//         return item.includes("a")
//     })
//     console.log(newarr)
// }
// call()

// function call(){
//     var price = [12,45,85,36,96]
//     var t = price.reduce((item1,item2)=>{
//         return item1+item2
//     }, 0)
//     console.log(t)

// }
// call() 

// function call(){
//     var arr = ["Nitesh","Prakher","Rahul","Tushar","Shaswat"]
//     var newarr = arr.map((item)=>{
//         return item + " ji"
//     })
//     console.log(newarr)
// }
// call()

// function call(){
//     var arr = ["Nitesh","Prakher","Rahul","Tushar","Shaswat"]
//     var newarr = arr.sort()
//     console.log(newarr)
// }
// call()

// function call(){
//     var firstarr = [96,56,55,63,53]
// var secondarr = firstarr.every(num=>num>50) // return true or false on the basis of condition for every element
// console.log(secondarr)
// }
// call()

// function call(){
//     var firstarr = [96,16,24,63,35]
// var secondarr = firstarr.some(num=>num>50) // check the condition for atleast one element if they satisfy the condition
// console.log(secondarr)
// }
// call()

// include --- check if the array contain any value or Not
// var my_name = ["Nitesh","Satyam","Suraj","Rahul","priya"]
// console.log(my_name.includes("Nitesh")) --true

//  join ---this method return a new string by concatinating all of the arrays element separated by the specified charactor
// var firstname = ["N","i","t","e","s","h"]
// var newarr = firstname.join("")
// var newarr1 = firstname.join("-")
// var newarr2 = firstname.join("*")
// console.log(newarr)
// console.log(newarr1)
// console.log(newarr2)

// findIndex --- return the index of the array element
// var my_name = ["Nitesh","Satyam","Suraj","Rahul","priya"]
// var index = my_name.findIndex((name) => name === "priya")
// console.log(index)

//slice -- returns a new array with specified start to end and do not consider the last index 
// const arr = ["MP","UP","Jharkhand","Bihar","Bengal"]
// console.log(arr.slice(0,3))

// reverse() ----> reverse the array , arr.reverse()
// push()  ------> push new element to the end of the array, arr.push("Hyderabad")
// pop -------> delete the last index , arr.pop()

// shift() -----> remove the first element of a array and return the removed array
// unshift ------> add element to the begining of an array and return the length of the new array


// var state = ["MP","UP","Jharkhand","Bihar","Bengal"]
// // console.log(state.shift())
// console.log(state.unshift("Haryana"))

// splice ---- to add element at any index in array 
// syntax ---- arr.splice(index,0,newelement) --- 0 represent that we dont remove any element










//Date function 
// const d = new Date()
// const td = d.getDate()
// const mon = (d.getMonth()+1)
// const year = d.getFullYear()
// console.log(td+"-"+mon+"-"+year)

// // Time function
// const h = d.getHours()
// const m = d.getMinutes()
// const s =d.getSeconds()
// console.log(h+":"+m+":"+s)

// Set Date 
var d = new Date()
d.setMonth(6)
d.setFullYear(2026
)
console.log(d)