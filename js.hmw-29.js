

function night(){
    var light = document.getElementById("lightMode");
    var night = document.getElementById("nightMode");
     
    light.style.display = "none";
    night.style.display = "block";
}   

function light(){
    var light = document.getElementById("lightMode");
    var night = document.getElementById("nightMode");
     
    light.style.display = "block";
    night.style.display = "none";
} 


function check(){
    var email = document.getElementById("email");
    var pasword = document.getElementById("pasword");
    var eror1 = document.getElementById("error1");
    var eror2 = document.getElementById("error2");
   

    if(email.value == "" || email.length == 0){
        eror1.innerHTML = "შეივანეთ იმეილი";
        email.style.border = "2px solid red";
        eror1.style.color = "red"
        eror1.style.fontSize = "14px";


    }else if (pasword.value == "" || pasword.length == 0){
        eror1.innerHTML = "";
        email.style.border = "1px solid lightgray";
        eror2.innerHTML = "შეიყვანეთ პაროლი";
        pasword.style.border = "2px solid red";
        eror2.style.color = "red"
        eror2.style.fontSize = "14px";
    } else{
        eror1.innerHTML = "";
        email.style.border = "1px solid lightgray";
        eror2.innerHTML = "";
        pasword.style.border = "1px solid lightgray";
    };
}