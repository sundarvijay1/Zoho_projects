function checker(){
    if(document.getElementById("policy").checked != true){
        document.getElementById("err").innerText = "Please complete the checkbox"
    }else{
        document.getElementById("err").innerText = ""
    }
}
