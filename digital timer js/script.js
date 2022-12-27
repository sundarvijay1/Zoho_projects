function getTime(){
    const date = new Date();
    console.log(date.toLocaleTimeString())
    document.getElementById("content").innerHTML = date.toLocaleTimeString()
}
setInterval(getTime,1000)