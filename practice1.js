
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
    var State = document.getElementById("State").value
    var District = document.getElementById("District").value
    console.log(State)
    console.log(District)
    var gender = ""
    if (male.checked) {
        gender = "male"
    }
    else if (Female.checked) {
        gender = "Female"
    }
    //     document.getElementById("result").innerHTML = `Your name is ${firstname} ${secondname} <div> ${mobile} </div> Your date of birth is : ${dob} , Gender : ${gender}<div>Marks in Maths : ${maths} , Marks in Science : ${science} ,Marks in  SST : ${sst} ,Marks in English : ${english} ,Marks in Sanskrit : ${sanskrit} , </div> <div> Your Total Marks is : ${total} ,Percentage : ${percentage}</div> <img src = "${file}" alt="Uploaded Image" style="max-width: 200px; max-height: 200px;"/>${file} 
    // </div>`

    document.getElementById("result").innerHTML = `<table border = 3 cellspacing="20">
    <caption font-weight:bold;>Student Data</caption>
     <tr>
     <th>Name</th>
     <th>Mobile</th>
     <th>DOB</th>
     <th>Gender</th>
     <th>Total Marks</th>
     <th>Percentage</th>
     <th>State</th>
     <th>District</th>
     <th>Image</th>
     </tr>

    <tr>
    <td>${firstname + " " + secondname}</td>
    <td>${mobile}</td>
    <td>${dob}</td>
    <td>${gender}</td>
    <td> ${total}</td>
    <td>${percentage}%</td>
    <td>${State}</td>
    <td>${District}</td>
    <td><img src="${file}" alt="Uploaded Image" style="max-width: 200px; max-height: 200px;"></td>
    </tr>
    </table>`

}
