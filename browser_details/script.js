 var user = navigator.userAgent
 var browser
 var version = 0
 var height = 0
 var width = 0
 var Chrome=0
 var Firefox=0
 var Safari=0
 var td = []
 var tr = []
 var tr = []
 var data = ["Browser Name","version","screen width", "screen Height"]
 
 if(user.match('Chrome/')){
    Chrome++
    var dum = user.split("Chrome/")
    version = dum[1].split(" ")
    width = window.innerWidth;
    height = window.innerHeight
    console.log(version[0])
 }
 if(user.match('Firefox/')){
    Firefox++
    var dum = user.split("Firefox/")
    version = dum[1].split(" ")
    width = window.innerWidth;
    height = window.innerHeight
    console.log(version[0])
 }
 if(user.match('Safari') && version == 0){
    Safari++
    var dum = user.split("Safari/")
    version = dum[1].split(" ")
    width = window.innerWidth;
    height = window.innerHeight
    console.log(version[0])
 }
 if(Chrome == 1 ){
    browser = "Chrome"
    console.log(browser)
 }
 else if(Firefox){
    browser = "Firefox"
 }else if(Safari){
    browser = "Safari"
 }
 var res = [browser,version[0],width,height]
 var D_data  = document.createElement("div")
 D_data.id = "divtable";
 var tab = document.createElement("table")
 tab.id = "tabledata"


 tr.id = "row"
for(var i=1;i<=4;i++){
    tr[i]= document.createElement("tr")  
    td[i] = document.createElement("td")
    td[i].innerText = data[i-1]
    td[i+1] = document.createElement("td");
    td[i+1].innerText = res[i-1]
    tr[i].appendChild(td[i])
    tr[i].appendChild(td[i+1])
    tab.appendChild(tr[i])
}
 
 D_data.appendChild(tab)
 document.body.appendChild(D_data)
