

function increase(){
	var row = document.getElementById("incROW").value;
	var tab = document.createElement("div");
	tab.id = "divdata";
	var rows = document.createElement("table");
	rows.id = "rows";
	for(var i=0;i<row;i++){
		var tr =  document.createElement("tr");
		var td = document.createElement("td");
		td.innerText = i+1;
		tr.appendChild(td);
		rows.appendChild(tr);
	}
	tab.appendChild(rows);
	document.body.appendChild(tab)
}
function decrease(){
	var delrow = document.getElementById("decROW").value;
	var rows = document.getElementById("rows");
	var max = document.getElementById("incROW").value;
	console.log(max);
	for(var i=max;i>=(max-(delrow-1));i--){
		rows.removeChild(rows.lastChild)
	}
}