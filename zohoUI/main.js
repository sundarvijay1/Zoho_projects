var move
var iter=1
var i=1
function toggle(){
    console.log(document.getElementById('navigationBar').className)
    switch(document.getElementById('navigationBar').className){
        case 'navigator':
                        document.getElementById('navigationBar').classList.add('navigatorExpand');
                        document.getElementById('navigationBar').classList.remove('navigator');
                        document.getElementById('contain').classList.add('contain_move')
                        document.getElementById('arrow').classList.add('arrow_move')
                        document.getElementById('blue_bg').classList.add('icon_hide')
                        document.getElementById('icon1').style.marginTop = 0
                        document.getElementById('menus').classList.remove('menu')
                        document.getElementById('menus').classList.add('menu2')
                        for(var i=1;i<=5;i++){
                            document.getElementById('icon'+i).classList.remove('icons')
                            document.getElementById('icon'+i).classList.add('icons_bg_change')
                            document.getElementById('tog'+i).classList.remove('toggle')
                        }
                        for(var i=1;i<=5;i++){
                            var image = document.getElementById('icon'+i).getElementsByTagName('img')[0]
                            var ac = image.src.replace('White','Blue')
                            image.src = ac   
                            document.getElementsByClassName('names')[i-1].style.visibility='visible';
                        }
                        break;
        case 'navigatorExpand':
                        document.getElementById('navigationBar').classList.add('navigator');
                        document.getElementById('navigationBar').classList.remove('navigatorExpand');
                        document.getElementById('contain').classList.remove('contain_move')
                        document.getElementById('arrow').classList.remove('arrow_move')
                        document.getElementById('blue_bg').classList.remove('icon_hide')
                        document.getElementById('icon1').style.marginTop = '60px'
                        document.getElementById('menus').classList.remove('menu2')
                        document.getElementById('menus').classList.add('menu')
                        for(var i=1;i<=5;i++){
                            document.getElementById('icon'+i).classList.add('icons')
                            document.getElementById('icon'+i).classList.remove('icons_bg_change')
                            document.getElementById('tog'+i).classList.add('toggle')
                        }
                        for(var i=1;i<=5;i++){
                            var image = document.getElementById('icon'+i).getElementsByTagName('img')[0]
                            var ac = image.src.replace('Blue','White')
                            image.src = ac   
                            document.getElementsByClassName('names')[i-1].style.visibility='hidden';
                        }
                        break;
    }
}
function image_change(id){
    if(document.getElementById(id).className == 'icons_bg_change'){
       var image= document.getElementById(id).getElementsByTagName('img')[0]
       var ac = image.src.replace('Blue','White')
       image.src = ac
       document.getElementById(id).style.width = "230px"
       document.getElementById(id).style.height="60px"
       document.getElementById(id).style.background="transparent linear-gradient(180deg, #227CFF 0%, #113E80 100%) 0% 0% no-repeat padding-box"
    }
}
function image_revert(id){
    if(document.getElementById(id).className == 'icons_bg_change'){
       var image= document.getElementById(id).getElementsByTagName('img')[0]
       var ac = image.src.replace('White','Blue')
       image.src = ac
       document.getElementById(id).style.width = ""
       document.getElementById(id).style.height=""
       document.getElementById(id).style.background=""
    }
}

function modes(){
    var mode 
    if(document.querySelector('.mode_images').getElementsByTagName('img')[0].classList.contains('active')){
        mode = 'Dark'
    }else{
        mode = 'Light'
    }
    switch(mode){
        case 'Dark':
                    console.log('dark')
                    document.getElementById('moon').classList.remove('active')
                    document.getElementById('sun').classList.remove('inactive')
                    document.getElementById('sun').classList.add('active')
                    document.getElementById('moon').classList.add('inactive')
                    document.body.style.background = "#000000" 
                    document.body.classList.add('dark')
                    break;    
        case 'Light':
                    console.log('light')
                    document.getElementById('sun').classList.remove('active')
                    document.getElementById('moon').classList.remove('inactive')
                    document.getElementById('moon').classList.add('active')
                    document.getElementById('sun').classList.add('inactive')
                    document.body.style.background = ""
                    document.body.classList.remove('dark')
                    break;
    }
}
function mobileNumber(){
    document.getElementById('mobilePopup').classList.add('open')
    document.getElementById('whole_container2').classList.add('wholeContainer2')
    document.body.style.overflow = "hidden"
}
function cancel(id){
    document.getElementById(id).classList.remove('open')
    document.getElementById('whole_container2').classList.remove('wholeContainer2')
    clearInput()
    document.body.style.overflow = ""
}
function revert(){
    document.getElementById("OTPPopup").classList.remove('open')
    document.getElementById('mobilePopup').classList.add('open')
}
function otpOpen(){
    var number = document.getElementById('dataMobile').value
    console.log(number.length)
    if(number.length == 10){
        document.getElementById("OTPPopup").classList.add('open')
        document.getElementById('mobilePopup').classList.remove('open')
    } 
}
function changefocus(event){
    if(event.code=='Digit0'||event.code=='Digit1'||event.code=='Digit2'||event.code=='Digit3'||event.code=='Digit4'||event.code=='Digit5'||event.code=='Digit6'||event.code=='Digit7'||event.code=='Digit8'||event.code=='Digit9'){
        if(document.getElementById('input_digit_'+i).value != null && i<6){
            document.getElementById('input_digit_'+(i+1)).disabled = false
            document.getElementById('input_digit_'+(i+1)).focus()
            i++
        }
    }
    if(event.code == 'Backspace' && document.getElementById('input_digit_'+i).value!=null){
        document.getElementById('input_digit_'+(i-1)).value = ""
        if(i!=1){
            document.getElementById('input_digit_'+(i)).disabled = true
            document.getElementById('input_digit_'+(i-1)).focus()
            i--
        }
    }else if(event.code == 'Backspace'&&document.getElementById('input_digit_'+i).value==null){
        document.getElementById('input_digit_'+(i-1)).value = ""
        if(i!=1){
            document.getElementById('input_digit_'+(i-1)).disabled = true
            document.getElementById('input_digit_'+(i-2)).focus()
            i-=2
        } 
    }
}
function verifyOTP(){
    var arr = ['1','2','3','4','5','6']
    for(iter;iter<=6;iter++){
        console.log(iter)
        if(document.getElementById("input_digit_"+iter).value == arr[iter-1]){
            if(iter == 6){
                createData()
                document.body.style.overflow = ""
                iter=1
                break
            }
        }else{
            alert("wrong OTP")
            break
        }
    }
}
function createData(){
        document.getElementById('pan4').style.display='none'
        document.getElementById('addnum').style.display = 'block'
        var div = document.createElement('div')
        div.className='div_mobileNumber'
        var img = document.createElement('img')
        img.src = './Interview Icons/smartphone.png'
        img.className = 'mobile_img'
        div.appendChild(img)
        var p = document.createElement('p')
        p.className = 'font_medium16'
        p.innerText = document.getElementById('dataMobile').value
        div.appendChild(p)
        document.getElementById('addnum').appendChild(div)
        var addNumber = document.getElementById('newNumber')
        addNumber.parentNode.insertBefore(div,addNumber)
        document.getElementById('OTPPopup').classList.remove('open')
        document.getElementById('whole_container2').classList.remove('wholeContainer2')
        clearInput()
}
function clearInput(){
    for(var j=1;j<=6;j++){
        document.getElementById('input_digit_'+j).value = ""
        i=1
    }
    document.getElementById('dataMobile').value = ""
}