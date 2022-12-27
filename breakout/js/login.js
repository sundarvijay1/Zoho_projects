window.history.forward();
var user1;
function start(){
    user1 = document.getElementById("user").value
    console.log(user1)
    if(user1==""||user1==null){
         return false
    }else{
        
        return true;
    }
}
function show(Sid){
    console.log((document.getElementById(Sid).style.visibility))
    if(document.getElementById(Sid).style.visibility == "hidden"){
        console.log("visible")
        document.getElementById(Sid).style.visibility = "visible"
    }else if(document.getElementById(Sid).style.visibility == "visible"){
        console.log("hidden")
        document.getElementById(Sid).style.visibility = "hidden"
    }
    if(Sid == 'creatormain' && document.getElementById(Sid).style.visibility == "hidden") {
        document.getElementById('num').style.visibility = "hidden"
        document.getElementById('mailID').style.visibility = "hidden"
        document.getElementById('githubID').style.visibility = "hidden"
    }     
}