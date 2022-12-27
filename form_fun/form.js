function move(){
    console.log(document.getElementById('ip_num').value.length)
    if(document.getElementById('ip_num').value.length == 10){
        document.getElementById('btn').className = ""
        document.getElementById('btn').classList.add('button')
        document.getElementById('btn').classList.add('align')
        document.getElementById('ip_num').style.outlineColor = '#00FFFF'
     }else{
        if(document.getElementById('btn').classList.contains('left')){
            document.getElementById('btn').classList.remove('left')
            document.getElementById('btn').classList.add('right')
        }else if(document.getElementById('btn').classList.contains('right')){
            document.getElementById('btn').classList.remove('right')
            document.getElementById('btn').classList.add('left')
        }
        document.getElementById('ip_num').style.borderColor = 'red'
     }
}