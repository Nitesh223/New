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
