window.addEventListener("keyup", function(){
    var emri1 = document.getElementById("emri1").value
    var email1 = document.getElementById("email1").value
    var num1 =  document.getElementById("numri1").value
    var emri2 = document.getElementById("emri2").value
    var email2 = document.getElementById("email2").value
    var num2 =  document.getElementById("numri2").value
    if (emri1 !== "" && email1 !== "" &&  num1 !=="" ) {
        document.getElementById("first-btn").removeAttribute("disabled");
    }
    if (emri2 !== "" && email2 !== "" &&  num2 !=="" ) {
        document.getElementById("second-btn").removeAttribute("disabled");
    }
   else{
       document.getElementById('first-btn').disabled=true
    }
    
})