var len =0;
var up = 0;
var low = 0
var num = 0;
var sp = 0;
addEventListener("input",pass)
function visible1(){
    document.getElementById('tooltip').style.visibility = "visible"
}
function visible2(){
    document.getElementById('tooltip').style.visibility = "hidden"
}
function pass(){
    document.getElementById('tooltip').style.visibility = "visible"
    var actual_pass = document.getElementById('password').value
    console.log(actual_pass)
    var lower = /[a-z]/g;
    var upper = /[A-Z]/g;
    var number = /[0-9]/g;
    var special = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g
    if(actual_pass.length>=8){
        document.getElementById('len').style.color = "green"
        if(len == 0){
            len++
        }
    }else if(actual_pass.length<8){
        document.getElementById('len').style.color = "black"
        len = 0
    }
    if(upper.test(actual_pass)){
        document.getElementById("upper").style.color = "green"
        if(up == 0){
            up++
        }
    }else if(!upper.test(actual_pass)){
        document.getElementById('upper').style.color = "black"
        up = 0
    }
    if(lower.test(actual_pass)){
        document.getElementById("lower").style.color = "green"
        if(low == 0){
            low++
        }
    }else if(!lower.test(actual_pass)){
        document.getElementById('lower').style.color = "black"
        low = 0
    }
    if(number.test(actual_pass)){
        document.getElementById("number").style.color = "green"
        if(num == 0){
            num++
        }
    }else if(!number.test(actual_pass)){
        document.getElementById('number').style.color = "black"
        num = 0
    }
    if(special.test(actual_pass)){
        document.getElementById("special").style.color = "green"
        if(sp == 0){
            sp++
        }
    }else if(!special.test(actual_pass)){
        document.getElementById('special').style.color = "black"
        sp = 0
    }
    if((len +up+low+num+sp) == 5){
        document.getElementById('tooltip').style.visibility = "hidden"
    }
    if(actual_pass == ""){
        document.getElementById('tooltip').style.visibility = "visible"
        if(document.getElementById("outcome")){
            document.getElementById("outcome").style.visibility = "hidden"
        }
    }
}
function conf(){
    var con_pass = document.getElementById("conf_pass").value
    console.log(con_pass)
    var actual_pass = document.getElementById("password").value
    if(con_pass == actual_pass && conf_pass!=""){
        document.getElementById("outcome").innerText= "Password updated Successfully"
        document.getElementById("outcome").style.visibility= "visible"
        document.getElementById("outcome").style.color= "green"
    }
    else{
        document.getElementById("outcome").innerText= "Your Password does not match"
        document.getElementById("outcome").style.visibility= "visible"
        document.getElementById("outcome").style.color= "red"
    }
    if(con_pass == "" && actual_pass == ""){
        document.getElementById("outcome").innerText= "Please complete the field"
        document.getElementById("outcome").style.visibility= "visible"
        document.getElementById("outcome").style.color= "red"
    }

}
function disp(){
    var pass = document.getElementById("password").getAttribute("type")
    console.log(pass)
    if(pass == "password"){
        document.getElementById("password").setAttribute("type","text")
        document.getElementById('hide').style.visibility = "visible"
        document.getElementById('eye').style.visibility = "hidden"

    }else{
        document.getElementById("password").setAttribute("type","password")
        document.getElementById('eye').style.visibility = "visible"
        document.getElementById('hide').style.visibility = "hidden"
    }
}
