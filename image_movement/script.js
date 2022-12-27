var inte
var x=0;
var m = 0
function start(){
    if(m==0){
        m++;
        inte = setInterval(function(){
            x=x+1
            console.log(x)
            document.getElementById('zoho').style.marginLeft = x+'px'
        },10)
    }
}
function stop(){
    console.log("pause")
    clearInterval(inte)
    document.getElementById("zoho").style.marginLeft = x+'px'
}
function reset(){
    x=0;
    m=0
    document.getElementById("zoho").style.marginLeft = x+'px'
}