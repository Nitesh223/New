// function calculator(Nitesh){
//     var firstvalue = parseFloat(document.getElementById("firstvalue").value);
//     var secondvalue = parseFloat(document.getElementById("secondvalue").value);

//     switch(Nitesh)
//     {
//         case "add" :
//             document.getElementById("result").innerHTML = "The sum of first value and second value is " + (parseInt(firstvalue) + parseInt(secondvalue));
//             break;
//             case "subtract" :
//             document.getElementById("result").innerHTML = firstvalue-secondvalue;
//             break;
//             case "multiply" :
//             document.getElementById("result").innerHTML = firstvalue*secondvalue;
//             break;
//             case "divide" :
//             document.getElementById("result").innerHTML = firstvalue/secondvalue;
//             break;
//     }
// }
function student() {
    var firstname = document.getElementById("firstname").value;
    var secondname = document.getElementById("secondname").value;
    var mobile = document.getElementById("mobile").value;
    var dob = document.getElementById("dob").value;
    var male = document.getElementById("male")
    var Female = document.getElementById("Female")
    var maths = document.getElementById("maths").value
    var science = document.getElementById("science").value;
    var sst = document.getElementById("sst").value;
    var english = document.getElementById("english").value;
    var sanskrit = document.getElementById("sanskrit").value;
    var total = parseInt(english) + parseInt(sanskrit) + parseInt(maths) + parseInt(science) + parseInt(sst)
    var percentage = (parseInt(english) + parseInt(sanskrit) + parseInt(maths) + parseInt(science) + parseInt(sst)) / 5
    var file = document.getElementById("file").files[0]?.name
    console.log(file)
    var gender = ""
    if (male.checked){
        gender="male"
    }
    else if(Female.checked){
        gender="Female"
    }
    document.getElementById("result1").innerHTML = `Your name is ${firstname} ${secondname} <div> ${mobile} </div> Your date of birth is : ${dob} , Gender : ${gender}<div>Marks in Maths : ${maths} , Marks in Science : ${science} ,Marks in  SST : ${sst} ,Marks in English : ${english} ,Marks in Sanskrit : ${sanskrit} , </div> <div> Your Total Marks is : ${total} ,Percentage : ${percentage}</div> <div><img src = "${file}">${file}</div>`

    console.log("Nitesh")
}
