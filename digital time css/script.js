var hr
var min
var sec
function get(){
    const d = new Date();
    var a_hr = d.getHours()
    hr = String(a_hr).split('')
    if(a_hr > 9){
        hr1(hr[0]);
        hr2(hr[1]);
    }else{
        hr1(0)
        hr2(hr[1])
    }
    var a_min = d.getMinutes()
    min = String(a_min).split('')
    if(a_min>9){
        min1(min[0])
        min2(min[1])
    }else{
        min1(0)
        min2(min[0])
    }
    var a_sec = d.getSeconds()
    sec = String(a_sec).split('')
    console.log(sec[0])
    console.log(sec[1])
    if(a_sec>9){
        sec1(sec[0])
        sec2(sec[1])
    }else{
        sec1(0)
        sec2(sec[0])
    }

}
function hr1(num){
        if(num == 0){
            document.getElementById("hr1a").style.visibility = "visible"
            document.getElementById("hr1b").style.visibility = "visible"
            document.getElementById("hr1c").style.visibility = "visible"
            document.getElementById("hr1d").style.visibility = "hidden"
            document.getElementById("hr1e").style.visibility = "visible"
            document.getElementById("hr1f").style.visibility = "visible"
            document.getElementById("hr1g").style.visibility = "visible"
        }
        if(num == 1){
            document.getElementById("hr1a").style.visibility = "hidden"
            document.getElementById("hr1b").style.visibility = "hidden"
            document.getElementById("hr1c").style.visibility = "hidden"
            document.getElementById("hr1d").style.visibility = "hidden"
            document.getElementById("hr1e").style.visibility = "hidden"
            document.getElementById("hr1f").style.visibility = "visible"
            document.getElementById("hr1g").style.visibility = "visible"
        }
        if(num == 2){
            document.getElementById("hr1a").style.visibility = "hidden"
            document.getElementById("hr1b").style.visibility = "visible"
            document.getElementById("hr1c").style.visibility = "visible"
            document.getElementById("hr1d").style.visibility = "visible"
            document.getElementById("hr1e").style.visibility = "visible"
            document.getElementById("hr1f").style.visibility = "visible"
            document.getElementById("hr1g").style.visibility = "hidden"
        }
        return

}
function hr2(num){
    if(num == 0){
        document.getElementById("hr2a").style.visibility = "visible"
        document.getElementById("hr2b").style.visibility = "visible"
        document.getElementById("hr2c").style.visibility = "visible"
        document.getElementById("hr2d").style.visibility = "hidden"
        document.getElementById("hr2e").style.visibility = "visible"
        document.getElementById("hr2f").style.visibility = "visible"
        document.getElementById("hr2g").style.visibility = "visible"
    }
    if(num == 1){
        document.getElementById("hr2a").style.visibility = "hidden"
        document.getElementById("hr2b").style.visibility = "hidden"
        document.getElementById("hr2c").style.visibility = "hidden"
        document.getElementById("hr2d").style.visibility = "hidden"
        document.getElementById("hr2e").style.visibility = "hidden"
        document.getElementById("hr2f").style.visibility = "visible"
        document.getElementById("hr2g").style.visibility = "visible"
    }
    if(num == 2){
        document.getElementById("hr2a").style.visibility = "hidden"
        document.getElementById("hr2b").style.visibility = "visible"
        document.getElementById("hr2c").style.visibility = "visible"
        document.getElementById("hr2d").style.visibility = "visible"
        document.getElementById("hr2e").style.visibility = "visible"
        document.getElementById("hr2f").style.visibility = "visible"
        document.getElementById("hr2g").style.visibility = "hidden"
    }
    if(num == 3){
        document.getElementById("hr2a").style.visibility = "hidden"
        document.getElementById("hr2b").style.visibility = "hidden"
        document.getElementById("hr2c").style.visibility = "visible"
        document.getElementById("hr2d").style.visibility = "visible"
        document.getElementById("hr2e").style.visibility = "visible"
        document.getElementById("hr2f").style.visibility = "visible"
        document.getElementById("hr2g").style.visibility = "visible"
    }
    if(num == 4){
        document.getElementById("hr2a").style.visibility = "visible"
        document.getElementById("hr2b").style.visibility = "hidden"
        document.getElementById("hr2c").style.visibility = "hidden"
        document.getElementById("hr2d").style.visibility = "visible"
        document.getElementById("hr2e").style.visibility = "visible"
        document.getElementById("hr2f").style.visibility = "visible"
        document.getElementById("hr2g").style.visibility = "visible"
    }
    if(num == 5){
        document.getElementById("hr2a").style.visibility = "visible"
        document.getElementById("hr2b").style.visibility = "hidden"
        document.getElementById("hr2f").style.visibility = "hidden"
        document.getElementById("hr2c").style.visibility = "visible"
        document.getElementById("hr2d").style.visibility = "visible"
        document.getElementById("hr2e").style.visibility = "visible"
        document.getElementById("hr2g").style.visibility = "visible"
    }
    if(num == 6){
        document.getElementById("hr2a").style.visibility = "visible"
        document.getElementById("hr2b").style.visibility = "visible"
        document.getElementById("hr2c").style.visibility = "hidden"
        document.getElementById("hr2d").style.visibility = "visible"
        document.getElementById("hr2e").style.visibility = "visible"
        document.getElementById("hr2f").style.visibility = "hidden"
        document.getElementById("hr2g").style.visibility = "visible"
    }
    if(num == 7){
        document.getElementById("hr2a").style.visibility = "hidden"
        document.getElementById("hr2b").style.visibility = "hidden"
        document.getElementById("hr2c").style.visibility = "visible"
        document.getElementById("hr2d").style.visibility = "hidden"
        document.getElementById("hr2e").style.visibility = "hidden"
        document.getElementById("hr2f").style.visibility = "visible"
        document.getElementById("hr2g").style.visibility = "visible"
    }
    if(num == 8){
        document.getElementById("hr2a").style.visibility = "visible"
        document.getElementById("hr2b").style.visibility = "visible"
        document.getElementById("hr2c").style.visibility = "visible"
        document.getElementById("hr2d").style.visibility = "visible"
        document.getElementById("hr2e").style.visibility = "visible"
        document.getElementById("hr2f").style.visibility = "visible"
        document.getElementById("hr2g").style.visibility = "visible"
    }
    if(num == 9){
        document.getElementById("hr2a").style.visibility = "visible"
        document.getElementById("hr2b").style.visibility = "hidden"
        document.getElementById("hr2c").style.visibility = "visible"
        document.getElementById("hr2d").style.visibility = "visible"
        document.getElementById("hr2e").style.visibility = "hidden"
        document.getElementById("hr2f").style.visibility = "visible"
        document.getElementById("hr2g").style.visibility = "visible"
    }

}
function min1(num){
    if(num == 0){
        document.getElementById("m1a").style.visibility = "visible"
        document.getElementById("m1b").style.visibility = "visible"
        document.getElementById("m1c").style.visibility = "visible"
        document.getElementById("m1d").style.visibility = "hidden"
        document.getElementById("m1e").style.visibility = "visible"
        document.getElementById("m1f").style.visibility = "visible"
        document.getElementById("m1g").style.visibility = "visible"
    }
    if(num == 1){
        document.getElementById("m1a").style.visibility = "hidden"
        document.getElementById("m1b").style.visibility = "hidden"
        document.getElementById("m1c").style.visibility = "hidden"
        document.getElementById("m1d").style.visibility = "hidden"
        document.getElementById("m1e").style.visibility = "hidden"
        document.getElementById("m1f").style.visibility = "visible"
        document.getElementById("m1g").style.visibility = "visible"
    }
    if(num == 2){
        document.getElementById("m1a").style.visibility = "hidden"
        document.getElementById("m1b").style.visibility = "visible"
        document.getElementById("m1c").style.visibility = "visible"
        document.getElementById("m1d").style.visibility = "visible"
        document.getElementById("m1e").style.visibility = "visible"
        document.getElementById("m1f").style.visibility = "visible"
        document.getElementById("m1g").style.visibility = "hidden"
    }
    if(num == 3){
        document.getElementById("m1a").style.visibility = "hidden"
        document.getElementById("m1b").style.visibility = "hidden"
        document.getElementById("m1c").style.visibility = "visible"
        document.getElementById("m1d").style.visibility = "visible"
        document.getElementById("m1e").style.visibility = "visible"
        document.getElementById("m1f").style.visibility = "visible"
        document.getElementById("m1g").style.visibility = "visible"
    }
    if(num == 4){
        document.getElementById("m1a").style.visibility = "visible"
        document.getElementById("m1b").style.visibility = "hidden"
        document.getElementById("m1c").style.visibility = "hidden"
        document.getElementById("m1d").style.visibility = "visible"
        document.getElementById("m1e").style.visibility = "hidden"
        document.getElementById("m1f").style.visibility = "visible"
        document.getElementById("m1g").style.visibility = "visible"
    }
    if(num == 5){
        document.getElementById("m1a").style.visibility = "visible"
        document.getElementById("m1b").style.visibility = "hidden"
        document.getElementById("m1c").style.visibility = "visible"
        document.getElementById("m1d").style.visibility = "visible"
        document.getElementById("m1e").style.visibility = "visible"
        document.getElementById("m1f").style.visibility = "hidden"
        document.getElementById("m1g").style.visibility = "visible"
    }

}
function min2(num){
    if(num == 0){
        document.getElementById("m2a").style.visibility = "visible"
        document.getElementById("m2b").style.visibility = "visible"
        document.getElementById("m2c").style.visibility = "visible"
        document.getElementById("m2d").style.visibility = "hidden"
        document.getElementById("m2e").style.visibility = "visible"
        document.getElementById("m2f").style.visibility = "visible"
        document.getElementById("m2g").style.visibility = "visible"
    }
    if(num == 1){
        document.getElementById("m2a").style.visibility = "hidden"
        document.getElementById("m2b").style.visibility = "hidden"
        document.getElementById("m2c").style.visibility = "hidden"
        document.getElementById("m2d").style.visibility = "hidden"
        document.getElementById("m2e").style.visibility = "hidden"
        document.getElementById("m2f").style.visibility = "visible"
        document.getElementById("m2g").style.visibility = "visible"
    }
    if(num == 2){
        document.getElementById("m2a").style.visibility = "hidden"
        document.getElementById("m2b").style.visibility = "visible"
        document.getElementById("m2c").style.visibility = "visible"
        document.getElementById("m2d").style.visibility = "visible"
        document.getElementById("m2e").style.visibility = "visible"
        document.getElementById("m2f").style.visibility = "visible"
        document.getElementById("m2g").style.visibility = "hidden"
    }
    if(num == 3){
        document.getElementById("m2a").style.visibility = "hidden"
        document.getElementById("m2b").style.visibility = "hidden"
        document.getElementById("m2c").style.visibility = "visible"
        document.getElementById("m2d").style.visibility = "visible"
        document.getElementById("m2e").style.visibility = "visible"
        document.getElementById("m2f").style.visibility = "visible"
        document.getElementById("m2g").style.visibility = "visible"
    }
    if(num == 4){
        document.getElementById("m2a").style.visibility = "visible"
        document.getElementById("m2b").style.visibility = "hidden"
        document.getElementById("m2c").style.visibility = "hidden"
        document.getElementById("m2d").style.visibility = "visible"
        document.getElementById("m2e").style.visibility = "hidden"
        document.getElementById("m2f").style.visibility = "visible"
        document.getElementById("m2g").style.visibility = "visible"
    }
    if(num == 5){
        document.getElementById("m2a").style.visibility = "visible"
        document.getElementById("m2b").style.visibility = "hidden"
        document.getElementById("m2c").style.visibility = "visible"
        document.getElementById("m2d").style.visibility = "visible"
        document.getElementById("m2e").style.visibility = "visible"
        document.getElementById("m2f").style.visibility = "hidden"
        document.getElementById("m2g").style.visibility = "visible"
    }
    if(num == 6){
        document.getElementById("m2a").style.visibility = "visible"
        document.getElementById("m2b").style.visibility = "visible"
        document.getElementById("m2c").style.visibility = "hidden"
        document.getElementById("m2d").style.visibility = "visible"
        document.getElementById("m2e").style.visibility = "visible"
        document.getElementById("m2f").style.visibility = "hidden"
        document.getElementById("m2g").style.visibility = "visible"
    }
    if(num == 7){
        document.getElementById("m2a").style.visibility = "hidden"
        document.getElementById("m2b").style.visibility = "hidden"
        document.getElementById("m2c").style.visibility = "visible"
        document.getElementById("m2d").style.visibility = "hidden"
        document.getElementById("m2e").style.visibility = "hidden"
        document.getElementById("m2f").style.visibility = "visible"
        document.getElementById("m2g").style.visibility = "visible"
    }
    if(num == 8){
        document.getElementById("m2a").style.visibility = "visible"
        document.getElementById("m2b").style.visibility = "visible"
        document.getElementById("m2c").style.visibility = "visible"
        document.getElementById("m2d").style.visibility = "visible"
        document.getElementById("m2e").style.visibility = "visible"
        document.getElementById("m2f").style.visibility = "visible"
        document.getElementById("m2g").style.visibility = "visible"
    }
    if(num == 9){
        document.getElementById("m2a").style.visibility = "visible"
        document.getElementById("m2b").style.visibility = "hidden"
        document.getElementById("m2c").style.visibility = "visible"
        document.getElementById("m2d").style.visibility = "visible"
        document.getElementById("m2e").style.visibility = "hidden"
        document.getElementById("m2f").style.visibility = "visible"
        document.getElementById("m2g").style.visibility = "visible"
    }

}
function sec1(num){
    if(num == 0){
        document.getElementById("s1a").style.visibility = "visible"
        document.getElementById("s1b").style.visibility = "visible"
        document.getElementById("s1c").style.visibility = "visible"
        document.getElementById("s1d").style.visibility = "hidden"
        document.getElementById("s1e").style.visibility = "visible"
        document.getElementById("s1f").style.visibility = "visible"
        document.getElementById("s1g").style.visibility = "visible"
        
    }
    if(num == 1){
        document.getElementById("s1a").style.visibility = "hidden"
        document.getElementById("s1b").style.visibility = "hidden"
        document.getElementById("s1c").style.visibility = "hidden"
        document.getElementById("s1d").style.visibility = "hidden"
        document.getElementById("s1e").style.visibility = "hidden"
        document.getElementById("s1f").style.visibility = "visible"
        document.getElementById("s1g").style.visibility = "visible"
    }
    if(num == 2){
        document.getElementById("s1a").style.visibility = "hidden"
        document.getElementById("s1b").style.visibility = "visible"
        document.getElementById("s1c").style.visibility = "visible"
        document.getElementById("s1d").style.visibility = "visible"
        document.getElementById("s1e").style.visibility = "visible"
        document.getElementById("s1f").style.visibility = "visible"
        document.getElementById("s1g").style.visibility = "hidden"
    }
    if(num == 3){
        document.getElementById("s1a").style.visibility = "hidden"
        document.getElementById("s1b").style.visibility = "hidden"
        document.getElementById("s1c").style.visibility = "visible"
        document.getElementById("s1d").style.visibility = "visible"
        document.getElementById("s1e").style.visibility = "visible"
        document.getElementById("s1f").style.visibility = "visible"
        document.getElementById("s1g").style.visibility = "visible"
    }
    if(num == 4){
        document.getElementById("s1a").style.visibility = "visible"
        document.getElementById("s1b").style.visibility = "hidden"
        document.getElementById("s1c").style.visibility = "hidden"
        document.getElementById("s1d").style.visibility = "visible"
        document.getElementById("s1e").style.visibility = "hidden"
        document.getElementById("s1f").style.visibility = "visible"
        document.getElementById("s1g").style.visibility = "visible"
    }
    if(num == 5){
        document.getElementById("s1a").style.visibility = "visible"
        document.getElementById("s1b").style.visibility = "hidden"
        document.getElementById("s1c").style.visibility = "visible"
        document.getElementById("s1d").style.visibility = "visible"
        document.getElementById("s1e").style.visibility = "visible"
        document.getElementById("s1f").style.visibility = "hidden"
        document.getElementById("s1g").style.visibility = "visible"
    }
    
}

function sec2(num){
    if(num == 0){
        document.getElementById("s2a").style.visibility = "visible"
        document.getElementById("s2b").style.visibility = "visible"
        document.getElementById("s2c").style.visibility = "visible"
        document.getElementById("s2d").style.visibility = "hidden"
        document.getElementById("s2e").style.visibility = "visible"
        document.getElementById("s2f").style.visibility = "visible"
        document.getElementById("s2g").style.visibility = "visible"
        
    }
    if(num == 1){
        document.getElementById("s2a").style.visibility = "hidden"
        document.getElementById("s2b").style.visibility = "hidden"
        document.getElementById("s2c").style.visibility = "hidden"
        document.getElementById("s2d").style.visibility = "hidden"
        document.getElementById("s2e").style.visibility = "hidden"
        document.getElementById("s2f").style.visibility = "visible"
        document.getElementById("s2g").style.visibility = "visible"
    }
    if(num == 2){
        document.getElementById("s2a").style.visibility = "hidden"
        document.getElementById("s2b").style.visibility = "visible"
        document.getElementById("s2c").style.visibility = "visible"
        document.getElementById("s2d").style.visibility = "visible"
        document.getElementById("s2e").style.visibility = "visible"
        document.getElementById("s2f").style.visibility = "visible"
        document.getElementById("s2g").style.visibility = "hidden"
    }
    if(num == 3){
        document.getElementById("s2a").style.visibility = "hidden"
        document.getElementById("s2b").style.visibility = "hidden"
        document.getElementById("s2c").style.visibility = "visible"
        document.getElementById("s2d").style.visibility = "visible"
        document.getElementById("s2e").style.visibility = "visible"
        document.getElementById("s2f").style.visibility = "visible"
        document.getElementById("s2g").style.visibility = "visible"
    }
    if(num == 4){
        document.getElementById("s2a").style.visibility = "visible"
        document.getElementById("s2b").style.visibility = "hidden"
        document.getElementById("s2c").style.visibility = "hidden"
        document.getElementById("s2d").style.visibility = "visible"
        document.getElementById("s2e").style.visibility = "hidden"
        document.getElementById("s2f").style.visibility = "visible"
        document.getElementById("s2g").style.visibility = "visible"
    }
    if(num == 5){
        document.getElementById("s2a").style.visibility = "visible"
        document.getElementById("s2b").style.visibility = "hidden"
        document.getElementById("s2c").style.visibility = "visible"
        document.getElementById("s2d").style.visibility = "visible"
        document.getElementById("s2e").style.visibility = "visible"
        document.getElementById("s2f").style.visibility = "hidden"
        document.getElementById("s2g").style.visibility = "visible"
    }
    if(num == 6){
        document.getElementById("s2a").style.visibility = "visible"
        document.getElementById("s2b").style.visibility = "visible"
        document.getElementById("s2c").style.visibility = "hidden"
        document.getElementById("s2d").style.visibility = "visible"
        document.getElementById("s2e").style.visibility = "visible"
        document.getElementById("s2f").style.visibility = "hidden"
        document.getElementById("s2g").style.visibility = "visible"
    }
    if(num == 7){
        document.getElementById("s2a").style.visibility = "hidden"
        document.getElementById("s2b").style.visibility = "hidden"
        document.getElementById("s2c").style.visibility = "visible"
        document.getElementById("s2d").style.visibility = "hidden"
        document.getElementById("s2e").style.visibility = "hidden"
        document.getElementById("s2f").style.visibility = "visible"
        document.getElementById("s2g").style.visibility = "visible"
    }
    if(num == 8){
        document.getElementById("s2a").style.visibility = "visible"
        document.getElementById("s2b").style.visibility = "visible"
        document.getElementById("s2c").style.visibility = "visible"
        document.getElementById("s2d").style.visibility = "visible"
        document.getElementById("s2e").style.visibility = "visible"
        document.getElementById("s2f").style.visibility = "visible"
        document.getElementById("s2g").style.visibility = "visible"
    }
    if(num == 9){
        document.getElementById("s2a").style.visibility = "visible"
        document.getElementById("s2b").style.visibility = "hidden"
        document.getElementById("s2c").style.visibility = "visible"
        document.getElementById("s2d").style.visibility = "visible"
        document.getElementById("s2e").style.visibility = "hidden"
        document.getElementById("s2f").style.visibility = "visible"
        document.getElementById("s2g").style.visibility = "visible"
    }

}

setInterval(get,1000)