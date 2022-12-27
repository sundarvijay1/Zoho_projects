var digit = [];
var sign ;
var signs = [];
var i=0;
var j=0;
var res = 0;
function val(a){
	var value = a;
	display(value);
}
function operators(operation){
	sign = operation
	if(sign == 'cos'||sign == 'sin'|| sign == 'tan'){
		trigo_fn()
	}else if (sign == '√‾'||sign == 'ln'||sign == 'x2'|| sign == 'π'||sign =='±' ){
		single();
	}else{
		perform();
	}
}
function perform(){
	while(sign){
		digit[i] = document.getElementById('panel').value
		var ac_dg = Number(digit[i])
		erase()
		signs[j] = sign
		if(res == 0 || res == ""){
			res = ac_dg
			i++;
			j++;
			break;
		}
		if(signs[j-1] == '+'||signs[j-1] == '='){
			res = res + Number(ac_dg);
 			console.log(res)
		}else if(signs[j-1] == '-'||signs[j-1] == '='){
			res = res - Number(ac_dg)
			console.log(res)
		}else if(signs[j-1] == '*'||signs[j-1] == '='){
			res = res * Number(ac_dg)
			console.log(res)
		}else if(signs[j-1] == '/'||signs[j-1] == '='){
			res = res / Number(ac_dg)
			console.log(res)
		}else if(signs[j-1] == '%'||signs[j-1] == '='){
			res = (res/100)*Number(ac_dg) 
			console.log(res)
		}else if(signs[j-1] == '^'||signs[j-1] == '='){
			res =  res ** Number(ac_dg)
			console.log(res)
		}else if(signs[j-1] == 'ln'||signs[j-1] == '='){
			res =  res ** Number(ac_dg)
			console.log(res)
		}
		if(signs[j] == '='){
			document.getElementById("panel").value = res
		}
		i++;
		j++;
		break;	

	}
}
function single(){
	while(sign){
		digit[i] = document.getElementById('panel').value
		var ac_dg = Number(digit[i])
		signs[j] = sign
		console.log('single')
		console.log(ac_dg)
		console.log(signs[j])
		if(res == 0 || res == ""){
			res = ac_dg
			i++;
			j++;
		}
		if(signs[j-1] == 'x2'){
			res = res*res;
			console.log(res)
		}
		if(signs[j-1] == 'π'){
			res = 3.14159265358*res
			console.log(res)
		   }
		if(signs[j-1] == '±'){
			if(res>0){
				res = -(res)
				console.log("p-n")
			}
		}
		if(signs[j-1] == 'ln'){
			res = Math.log(res)
			console.log(res)
		}
		if(signs[j-1] == '√‾'){
			res = Math.sqrt(res)
			console.log(res)
		}
		if(signs[j] == '='){
			console.log('=')
			document.getElementById("panel").value = res
		}
		i++;
		j++;
		break;
	}
	
}
function trigo_fn(){
	while(sign){
		digit[i] = document.getElementById('panel').value
		var ac_dg = Number(digit[i])
		signs[j] = sign
		console.log('trigo')
		console.log(ac_dg)
		console.log(signs[j])
		if(res == 0 || res == ""){
			res = ac_dg
			i++;
			j++;
		}
		if(signs[j-1] == 'cos'){
			console.log('coss')
			res = Math.cos(res)
			console.log(res)
		}
		if(signs[j-1] == 'sin'){
			console.log('coss')
			res = Math.sin(res)
			console.log(res)
		}
		if(signs[j-1] == 'tan'){
			console.log('coss')
			res = Math.tan(res)
			console.log(res)
		}
		if(signs[j] == '='){
			document.getElementById("panel").value = res
		}
		i++;
		j++;
		break;
	}
}
function display(content){
	if(content!= '+' ||content!= '='){
		document.getElementById('panel').value += content; 
	}
	
}
function erase(){
	document.getElementById('panel').value  = ""
}
function del_scr(){
	location.reload()
}