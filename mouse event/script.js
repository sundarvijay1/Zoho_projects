var content = ['Organization','CEO','Started',"Left-coordinate",'Top-coordinate']
var tr = []
var td = []
function result(name,cmp_id){
    var im = document.getElementById(name)
    im.addEventListener("click",(e)=>{
        fetch("./data.json")
        .then(function(response){
            return response.json();
        })
        .then(function (data){
            for(var j=0;j<data.length;j++){
                if(data[j].id == cmp_id){
                    var tab = document.createElement("table")
                    for(var i=0;i<=4;i++){
                        console.log(i)
                        if(content[i]!="Left-coordinate"||content[i]!="Top-coordinate"){
                            tr[i] = document.createElement("tr")
                            td[i] = document.createElement("td")
                            td[i].innerText = content[i]
                            td[i+1] = document.createElement("td")
                            if(i == 0){
                                td[i+1].innerText = data[j].Organization
                                tr[i].appendChild(td[i])
                                tr[i].appendChild(td[i+1])
                                tab.appendChild(tr[i])
                            }else if(i == 1){
                                td[i+1].innerText = data[j].CEO
                                tr[i].appendChild(td[i])
                                tr[i].appendChild(td[i+1])
                                tab.appendChild(tr[i])
                            }else if(i==2){
                                td[i+1].innerText = data[j].Started
                                tr[i].appendChild(td[i])
                                tr[i].appendChild(td[i+1])
                                tab.appendChild(tr[i])
                            }
                            
                        }
                        if(content[i] == 'Left-coordinate'){
                            console.log(i)
                            tr[i] = document.createElement("tr")
                            td[i] = document.createElement("td")
                            td[i].innerText = content[i]
                            td[i+1] = document.createElement("td")
                            td[i+1].innerText = e.screenX
                            tr[i].appendChild(td[i])
                            tr[i].appendChild(td[i+1])
                            tab.appendChild(tr[i])
                        }
                        if(content[i] == 'Top-coordinate'){
                            console.log(i)
                            tr[i] = document.createElement("tr")
                            td[i] = document.createElement("td")
                            td[i].innerText = content[i]
                            td[i+1] = document.createElement("td")
                            td[i+1].innerText = e.screenY
                            tr[i].appendChild(td[i])
                            tr[i].appendChild(td[i+1])
                            tab.appendChild(tr[i])
                        }
                        var div_disp = document.getElementById("display")
                        div_disp.appendChild(tab) 
                    }

                }
            }
        })
    })
}
