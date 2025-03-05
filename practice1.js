 
function add(){
    var firstvalue = document.getElementById("firstinput").value;
    var secondvalue = document.getElementById("secondinput").value;
    
    var  add = parseInt(firstvalue) + parseInt(secondvalue)

    //alert (add)
    document.getElementById("result").innerHTML="result is"+ "    "+ add
    // document.getElementById("result").innerHTML = `result is `
}