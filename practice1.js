
function student() {
    var firstname = document.getElementById("firstname").value;
    var secondname = document.getElementById("secondname").value;
    var rollno = document.getElementById("roll").value;
    var schoolName = document.getElementById("school").value;
    var male = document.getElementById("male")
    var Female = document.getElementById("Female")
    var maths = document.getElementById("maths").value
    var science = document.getElementById("science").value;
    var sst = document.getElementById("sst").value;
    var english = document.getElementById("english").value;
    var sanskrit = document.getElementById("sanskrit").value;
    var total = totalmarks(maths, science, sst, english, sanskrit);
    var percentage = percent(maths, science, sst, english, sanskrit);
    var file = document.getElementById("file").files[0]?.name
    var statename = document.getElementById("State").value

    function getGrade(marks) {
        if (marks >= 90) return "A"
        else if (marks >= 80 && marks <= 90) return "B"
        else if (marks >= 70 && marks <= 80) return "C"
        else if (marks >= 60 && marks <= 70) return "D"
        else if (marks >= 50 && marks <= 60) return "E"
        else if (marks >= 33) return "Pass"
        else return "Fail";
    }

    function getDivision(marks){
        if(marks >= 80) return "First Division" 
        else if(marks >= 60 && marks <= 80) return "Second Division"
        else if(marks >= 30 && marks <= 60) return "Third Division"
        else return "Fail"
    }

    var gender = ""
    if (male.checked) {
        gender = "male"
    }
    else if (Female.checked) {
        gender = "Female"
    }
    
    document.getElementById("result").innerHTML = `<table border = 3  style="width: 100% ">

       <caption style="font-weight: bold; font-size: 20px; text-align: center;">Marksheet</caption>
      
       <tr>
       <th colspan="6" style="font-size:25px; border-bottom:3px">CENTRAL BOARD OF SECONDARY EDUCATION</th>
       </tr>
       
     <tr>
    <th>Name</th>
     <td colspan="5">${firstname + " " + secondname}</td>
    <tr/>

     <tr>
    <th>Roll no</th>
     <td colspan="5">${rollno}</td>
    <tr/>
    
     <tr>
    <th>School Name</th>
     <td colspan="5" >${schoolName}</td>
    <tr/>
     <tr>
     <th>Subject</th>
     <th>Min</th>
     <th>Max</th>
     <th>Obtained</th>
     <th>Grade</th>
     <th>Division</th>
     </tr>

    <tr>
   <td>Math</td>
   <td>33</td>
   <td>100</td>
   <td>${maths}</td>
   <td>${getGrade(maths)}</td>
   <td>${getDivision(maths)}</td>
   
   </tr>

    <tr>
   <td>Science</td>
   <td>33</td>
   <td>100</td>
   <td>${science}</td>
   <td>${getGrade(science)}</td>
   <td>${getDivision(science)}</td>
   </tr>

    <tr>
   <td>Sst</td>
   <td>33</td>
   <td>100</td>
   <td>${sst}</td>
   <td>${getGrade(sst)}</td>
   <td>${getDivision(sst)}</td>
    </tr>

   <tr>
   <td>English</td>
   <td>33</td>
   <td>100</td>
   <td>${english}</td>
   <td>${getGrade(english)}</td>
   <td>${getDivision(english)}</td>
    </tr>

    <tr>
   <td>Sanskrit</td>
   <td>33</td>
   <td>100</td>
   <td>${sanskrit}</td>
   <td>${getGrade(sanskrit)}</td>
   <td>${getDivision(sanskrit)}</td>
    </tr>

    <tr>
    <th>Total</th>
     <td colspan="5">${total}</td>
    <tr/>

     <tr>
    <th>Percentage</th>
    <td colspan="5">${percentage}%</td>
    <tr/>
    
    </table>`
}
function state() {
    // console.log("State function called");
    var State = document.getElementById("State").value
    var District = document.getElementById("District").value
    switch (State) {
        case "Madhya Pradesh":
            removeDistrict()
            var mpdistrict = ["Bhopal", "Ujjain", "Gwalior", "Indore", "Sanchi"]
            FillDD(mpdistrict)
            break;

        case "Uttar Pradesh":
            removeDistrict()
            var updistrict = ["Lucknow", "varanasi", "Agra", "Prayagraj", "Ayodhya"]
            FillDD(updistrict)
            break;

        case "West Bengal":
            removeDistrict()
            var wbdistrict = ["Kolkata", "Asansol", "Darjeeling", "Hoogly", "Durgapur"]
            FillDD(wbdistrict)
            break;
        case "Bihar":
            removeDistrict()
            var bihar_dist = ["patna", "Gaya", "Nalanda", "Bhagalpur", "Muzaffarpur"]
            FillDD(bihar_dist)
            break;

        case "Jharkhand":
            removeDistrict()
            var jhdistrict = ["Ranchi", "Dhanbad", "Jamshedpur", "Hazaribagh", "Deoghar"]
            FillDD(jhdistrict)
            break;

        default:
            alert("None");
    }
}

function removeDistrict() {
    for (var j = District.options.length - 1; j >= 0; j--) {
        District.remove(j)
    }
}

function FillDD(dis) {
    var District = document.getElementById("District")
    for (var i = 0; i < dis.length; i++) {
        var opt = document.createElement("option")
        opt.text = dis[i]
        District.add(opt);
    }
}
function percent(maths, science, sst, english, sanskrit) {
    return (parseInt(english) + parseInt(sanskrit) + parseInt(maths) + parseInt(science) + parseInt(sst)) / 5
}
function totalmarks(maths, science, sst, english, sanskrit) {
    return parseInt(english) + parseInt(sanskrit) + parseInt(maths) + parseInt(science) + parseInt(sst)
}