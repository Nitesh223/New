
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

    var gender = ""
    if (male.checked) {
        gender = "male"
    }
    else if (Female.checked) {
        gender = "Female"
    }

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
    <td>${total}</td>
    <td>${percentage}%</td>
    <td>${State}</td>
    <td>${District}</td>
    <td><img src="${file}" alt="Uploaded Image" style="max-width: 50px; max-height: 50px;"></td>
    </tr>
    </table>`
}
function state() {
    var State = document.getElementById("State").value
    var District = document.getElementById("District")
    switch (State) {
        case "Madhya Pradesh":
            removeDistrict()
            var mpdistrict = ["Bhopal", "Ujjain", "Gwalior", "Indore", "Sanchi"]
            for (var i = 0; i < mpdistrict.length; i++) {
                var opt = document.createElement("option")
                opt.text = mpdistrict[i]
                District.add(opt);
            }
            break;

        case "Uttar Pradesh":
            removeDistrict()
            var updistrict = ["Lucknow", "varanasi", "Agra", "Prayagraj", "Ayodhya"]
            for (var i = 0; i < updistrict.length; i++) {
                var opt = document.createElement("option")
                opt.text = updistrict[i]
                District.add(opt);
            }
            break;

        case "West Bengal":
            removeDistrict()
            var wbdistrict = ["Kolkata", "Asansol", "Darjeeling", "Hoogly", "Durgapur"]
            for (var i = 0; i < wbdistrict.length; i++) {
                var opt = document.createElement("option")
                opt.text = wbdistrict[i]
                District.add(opt);
            }
            break;
        case "Bihar":
            removeDistrict()
            var bihar_dist = ["patna", "Gaya", "Nalanda", "Bhagalpur", "Muzaffarpur"]
            for (var i = 0; i < bihar_dist.length; i++) {
                var opt = document.createElement("option")
                opt.text = bihar_dist[i]
                District.add(opt);
            }
            break;

        case "Jharkhand":
            removeDistrict()
            var jhdistrict = ["Ranchi", "Dhanbad", "Jamshedpur", "Hazaribagh", "Deoghar"]
            for (var i = 0; i < jhdistrict.length; i++) {
                var opt = document.createElement("option")
                opt.text = jhdistrict[i]
                District.add(opt);
            }
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