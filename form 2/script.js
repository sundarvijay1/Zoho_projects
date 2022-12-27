function result(){
	var firstname = document.getElementById("fname").value;
	var lastname = document.getElementById("lname").value;
	var Email = document.getElementById("mail").value;
	var pass1 = document.getElementById("passwrd").value;
	var gen = document.myform.gender.value;
	var mob = document.getElementById("mobile").value;
	var br1 = document.getElementById("del1");
	var br2  =document.getElementById("del2");
	var br3  =document.getElementById("del3");
	var count = 0;
	var rr = 0; 
	
	var fn = document.getElementById("fname");
	fn.addEventListener("focus",remove1);
	var ln = document.getElementById("lname");
	ln.addEventListener("focus",remove2);
	var ma = document.getElementById("mail");
	ma.addEventListener("focus",remove3);
	var ps = document.getElementById("passwrd");
	ps.addEventListener("focus",remove4);
	var g1 = document.getElementById("g1");
	g1.addEventListener("click",remove5);
	var g1 = document.getElementById("g2");
	g2.addEventListener("click",remove5);
	var g1 = document.getElementById("g3");
	g3.addEventListener("click",remove5);
	var mo = document.getElementById("mobile");
	mo.addEventListener("focus",remove6);
	
	
	if(document.getElementById("firID")!=null&&firstname==""||firstname==null){
		rr++;
	}
	if(document.getElementById("lID")!=null&&lastname==""||lastname==null){
		rr++;
	}
	if(document.getElementById("Mail")!=null&&Email==""||Email==null){
		rr++;
	}
	if(document.getElementById("pass2")!=null&&pass1==""||pass1==null){
		rr++;
	}
	if(document.getElementById("gene")!=null&&gen==""||gen==null){
		rr++;
	
	}if(document.getElementById("mobi")!=null&&mob==""||mob==null){
		rr++;
	}
	if(rr>=1){
		return false;
	}else{
	
	if(firstname==null||firstname==""){
		var pos = document.getElementById("fnames");
		var h = document.createElement("h6");
		h.id = "firID";
		var text = document.createTextNode("Please enter the FirstName")
		h.appendChild(text);
		pos.appendChild(h);	
		count++;
	}//firstname
	if(lastname==null||lastname==""){
		var pos = document.getElementById("lnames");
		var h = document.createElement("h6");
		h.id = "lID";
		var text = document.createTextNode("Please enter the LastName")
		h.appendChild(text);
		pos.appendChild(h);	
		count++;
		
	}//lastname
	if(Email==null||Email==""){
		var pos = document.getElementById("mail1");
		var h = document.createElement("h6");
		h.id = "Mail";
		var text = document.createTextNode("Please enter the Mail Id")
		h.appendChild(text);
		pos.appendChild(h);	
		count++;
		br2.id = "br2";
		
	}
	if(pass1==null||pass1==""){
		var pos = document.getElementById("pass");
		var h = document.createElement("h6");
		h.id = "pass2";
		var text = document.createTextNode("Please enter the Password")
		h.appendChild(text);
		pos.appendChild(h);	
		count++;
		br2.id = "br2";
	}
	if(gen==null||gen==""){
		var pos = document.getElementById("genders");
		var h = document.createElement("h6");
		h.id = "gene";
		var text = document.createTextNode("Please fill the gender")
		h.appendChild(text);
		pos.appendChild(h);	
		count++;
	}
	if(mob==null||mob==""){
		var pos = document.getElementById("genders");
		var h = document.createElement("h6");
		h.id = "mobi";
		var text = document.createTextNode("Please fill the mobile number")
		h.appendChild(text);
		pos.appendChild(h);	
		count++;
	}
	if(count>=1){
		return false;
	}

}

}//result ends

//validate
function validateFName(firstname){
	var re = /^[a-zA-Z0-9]+$/;
    var num = /^[0-9]*$/;
    var sp = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	re.test(firstname);
    num.test(firstname);
    sp.test(firstname);
    console.log(re.test(firstname),num.test(firstname))
    if(num.test(firstname)==true){
        if(document.getElementById("firID")){
            document.getElementById("firID").innerText =""
            document.getElementById("firID").innerText = "Please remove number"
        }
        else{
            console.log("tt")
            var pos = document.getElementById("fnames");
            var h = document.createElement("h6");
            h.id = "firID";
            var text = document.createTextNode("Please remove number")
            h.appendChild(text);
            pos.appendChild(h);
        }
    }
	else if(sp.test(firstname)==true){
        if(document.getElementById("firID")){
            document.getElementById("firID").innerText =""
            document.getElementById("firID").innerText = "Please remove special character"
        }else{
            var pos = document.getElementById("fnames");
            var h = document.createElement("h6");
            h.id = "firID";
            var text = document.createTextNode("Please remove special character")
            h.appendChild(text);
            pos.appendChild(h);
        }
    }
	else if(document.getElementById("firID")){
		document.getElementById("firID").removeChild(document.getElementById("firID").lastChild);
		
	}
}
function validateLName(lastname){
	var re = /^[a-zA-Z0-9]+$/;
    var num = /^[0-9]*$/;
    var sp = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	re.test(lastname);
    num.test(lastname);
    sp.test(lastname);
	if(num.test(lastname)==true){
        if(document.getElementById("lid")){
            document.getElementById("lID").innerText =""
            document.getElementById("lID").innerText = "Please remove number"
        }else{
            var pos = document.getElementById("lnames");
            var h = document.createElement("h6");
            h.id = "lID";
            var text = document.createTextNode("Please remove number")
            h.appendChild(text);
            pos.appendChild(h);	
        }
	}else if(sp.test(lastname) == true){
        if(document.getElementById("lID")){
            document.getElementById("lID").innerText =""
            document.getElementById("lID").innerText = "Please remove special character"
        }else{
            var pos = document.getElementById("lnames");
            var h = document.createElement("h6");
            h.id = "lID";
            var text = document.createTextNode("Please remove special character")
            h.appendChild(text);
            pos.appendChild(h);
        }
    }
    else if(document.getElementById("lID")){
		document.getElementById("lID").removeChild(document.getElementById("lID").lastChild);
	}
}
//email
function validateEmail(email){
	var re = /^[A-Za-z0-9-_.]*@[a-z0-9-]+([.a-z])+(\.[a-z0-9-]+)*(\.[a-z]{3,4})$/;
	console.log("Email")
	re.test(email);
	console.log(re.test(email))
	if(!re.test(email) && email){
		var pos = document.getElementById("mail1");
		var h = document.createElement("h6");
		h.id = "Mail";  
		var text = document.createTextNode("Enter a valid MailID")
		h.appendChild(text);
		pos.appendChild(h);	
	}else if(document.getElementById("Mail")){
		document.getElementById("Mail").removeChild(document.getElementById("Mail").lastChild);
	}
}

function validatePassword(passwd){
	//var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    var lower = /[a-z]/;
    var upper = /[A-Z]/;
    var number = /[0-9]/;
    var special = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/
	console.log(passwd);
	lower.test(passwd);
    upper.test(passwd);
    number.test(passwd);
    special.test(passwd);
    console.log(lower.test(passwd),upper.test(passwd),number.test(passwd), special.test(passwd))
	if(passwd.length<8){
        if(document.getElementById("pass2")){
            document.getElementById("pass2").innerText = ""
            document.getElementById("pass2").innerText = "Password must be min 8 character"
        }else{
            var pos = document.getElementById("pass");
            var h = document.createElement("h6");
            h.id = "pass2";
            var text = document.createTextNode("Password must be min 8 character")
            h.appendChild(text);
            pos.appendChild(h);	
        }		
}else if(upper.test(passwd) == false){
    if(document.getElementById("pass2")){
        document.getElementById("pass2").innerText = ""
        document.getElementById("pass2").innerText = "Password must contain min 1 UpperCase"
    }else{
        var pos = document.getElementById("pass");
        var h = document.createElement("h6");
        h.id = "pass2";
        var text = document.createTextNode("Password must contain min 1 UpperCase")
        h.appendChild(text);
        pos.appendChild(h);	
        }	
    }else if(lower.test(passwd) == false){
        if(document.getElementById("pass2")){
            document.getElementById("pass2").innerText = ""
            document.getElementById("pass2").innerText = "Password must  containmin 1 LowerCase"
        }else{
            var pos = document.getElementById("pass");
            var h = document.createElement("h6");
            h.id = "pass2";
            var text = document.createTextNode("Password must contain min 1 LowerCase")
            h.appendChild(text);
            pos.appendChild(h);	
            }	
        }else if(special.test(passwd) == false){
            if(document.getElementById("pass2")){
                document.getElementById("pass2").innerText = ""
                document.getElementById("pass2").innerText = "Password must contain min 1 special character"
            }else{
                var pos = document.getElementById("pass");
                var h = document.createElement("h6");
                h.id = "pass2";
                var text = document.createTextNode("Password must contain min 1 special character")
                h.appendChild(text);
                pos.appendChild(h);	
            }	
        }
        else if(number.test(passwd) == false){
            if(document.getElementById("pass2")){
                document.getElementById("pass2").innerText = ""
                document.getElementById("pass2").innerText = "Password must contain min 1 number"
            }else{
                var pos = document.getElementById("pass");
                var h = document.createElement("h6");
                h.id = "pass2";
                var text = document.createTextNode("Password must contain min 1 number")
                h.appendChild(text);
                pos.appendChild(h);	
            }	
        }
        else if(document.getElementById("pass")){
            document.getElementById("pass").removeChild(document.getElementById("pass").lastChild);	
        }
}
function validatePhoneNumber(number){
	var re = /^[6-9]\d{9}$/gi;
	console.log("number")
	re.test(number);
	console.log(re.test(number))
	if(!re.test(number)){
		var pos = document.getElementById("genders");
		var h = document.createElement("h6");
		h.id = "mobi";
		var text = document.createTextNode("Enter a valid Phone Number")
		h.appendChild(text);
		pos.appendChild(h);	
}else if(document.getElementById("mobi")){
		document.getElementById("mobi").removeChild(document.getElementById("mobi").lastChild);
		
	}
}
function remove1(){
	var h = document.getElementById("firID");
	h.style.visibility = "hidden";
}
function remove2(){
	var h = document.getElementById("lID");
	h.style.visibility = "hidden";
}
function remove3(){
	var h = document.getElementById("Mail");
	h.style.visibility = "hidden";
}
function remove4(){
	var h = document.getElementById("pass1");
	h.style.visibility = "hidden";
}
function remove5(){
	var h = document.getElementById("gene");
	h.style.visibility = "hidden";
}
function remove6(){
	var h = document.getElementById("mobi");
	h.style.visibility = "hidden";
}