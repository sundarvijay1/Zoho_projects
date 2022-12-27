var name1 
var date1 
var number 
var ge 
var td = []
var tr = []
function submit()
{
    var uname = document.getElementById("user_name").value;
    var dob = document.getElementById("DOB").value; 
    var gen = document.getElementById('gender').value;
    var mob = document.getElementById('mobile').value;
    name1 = 0;
    date1 = 0;
    number = 0;
    ge = 0
    validate_name(uname)
    validate_DOB(dob)
    validate_gen(gen)
    validate_mob(mob)
    console.log((date1+number+name1+ge))
    console.log(name1)
    console.log(date1)
    console.log(number)
    console.log(ge)
    var res = (date1+number+name1+ge)+1
    if(res == 1){
        var res = [uname,dob,gen,mob]
        var div_data = document.getElementById("table_container")
        var tab_data = document.createElement("table")
         tr = document.createElement("tr")
        for(var i=0;i<4;i++){
            td[i] = document.createElement('td');
            td[i].innerHTML = res[i]
            tr.appendChild(td[i])
        }
        tab_data.appendChild(tr)
        div_data.appendChild(tab_data)
        document.body.appendChild(div_data)
        console.log("completed")
    }
}
function validate_name(name){
	var re = /^[a-zA-Z]*$/;
	console.log(name);
	re.test(name);
	console.log(re.test(name))
    if(!re.test(name)||name == ""){
        console.log("change1")
        document.getElementById('tooltiptext_name').style.visibility = "visible"
        name1++
    }else if( document.getElementById('tooltiptext_name').style.visibility = "visible"){
        document.getElementById('tooltiptext_name').style.visibility = "hidden"
        if(name1>1)
            name1 = 0
    }

}
function validate_DOB(date){
    var re = /^((0?[1-9]|1[012])[-](0?[1-9]|[12][0-9]|3[01])[-](19|20)?[0-9]{2})*$/;
    console.log(date);
	re.test(date);
	console.log(re.test(date))
    if(!re.test(date)|| date == ""){
        console.log("change2")
        document.getElementById('tooltiptext_DOB').style.visibility = "visible";
        date1++
    }else if( document.getElementById('tooltiptext_DOB').style.visibility = "visible"){
        document.getElementById('tooltiptext_DOB').style.visibility = "hidden"
        if(date1>1)
            date1 = 0
    }
}
function validate_gen(gend){
    console.log(gend)
    if(gend == 'none'){
        console.log("change3")
        document.getElementById('tooltiptext_gen').style.visibility = "visible"
        ge++
    }else if( document.getElementById('tooltiptext_gen').style.visibility = "visible"){
        document.getElementById('tooltiptext_gen').style.visibility = "hidden"
        if(ge>1)
            ge = 0
    }
}
function validate_mob(mobi){
    var re = /^[6-9]{1}[0-9]{9}$/;
	re.test(mobi);
    console.log(re.test(mobi))
	if(!re.test(mobi)){
        console.log("change4")
        document.getElementById('tooltiptext_mob').style.visibility = "visible"
        number++
    }else if( document.getElementById('tooltiptext_mob').style.visibility = "visible"){
        document.getElementById('tooltiptext_mob').style.visibility = "hidden"
        if(number>1)
            number = 0
    }
}
function reset(){
    location.reload();
}