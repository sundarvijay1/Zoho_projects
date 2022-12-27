window.history.forward();
window.addEventListener("mousemove",paddle);
document.addEventListener("keydown",paddle);
document.addEventListener("keydown",initiate);
var ball = document.getElementById("ball");
var pad = document.getElementById("paddle");
var directionx = 1;
var directiony = 1;
var stint = 50;
var count = 0;
var i=true;
var level = 1;
var win = 0;
var padhit = true;
var score = 0;
var s=1;
var life = 3;
var second2 = 0;
var second1 = 0;
var minutes2 = 0;
var minutes1 = 0;
var spflag = false;
var end;
var time;
var main;
var controlmode = document.ctrl.control.value;

function settings(){
    if(document.getElementById("controler").style.display == "none"){
        document.getElementById("controler").style.display = "block";
    }else{
        document.getElementById("controler").style.display = "none";
    }
    controlmode = document.ctrl.control.value;
}
function initiate(event){
    if(event.code == "Space"){
        spflag = true;
    }else if(event.code == "Enter"){
        spflag = false;
    }
}
function ballmove(event){
    var bLeft = parseInt(getComputedStyle(ball).getPropertyValue("left"));
    var bTop = parseInt(getComputedStyle(ball).getPropertyValue("top"));
    if(spflag){
        ball.style.left = (bLeft+(10*directionx)) +"px";
        ball.style.top = (bTop-(10*directiony)) + "px";
    }
}
function direction(){
    var bLeft = parseInt(getComputedStyle(ball).getPropertyValue("left"));
    var bTop = parseInt(getComputedStyle(ball).getPropertyValue("top"));
    var Ballposition = ball.getBoundingClientRect()
    if(bTop<70||bTop>innerHeight){
        directiony = -directiony;
        if(Ballposition.bottom >= window.innerHeight){
            //padhit = true;
            if(life>0){
                life--;
                spflag = false
                
                ballposi();

            }
            document.getElementById("life").innerText = "Life:"+life
            if(life == 0){
                gameover();
            }
        }
    }else if(bLeft<0 || bLeft>innerWidth){
        directionx = -directionx;
    }
}

function hit(){
    var blocks = Array.from(document.querySelectorAll(".container div"))
    blocks.forEach(element => {
        var Ballposition = ball.getBoundingClientRect();
        var Blockposition = element.getBoundingClientRect();
        var removedBlock = element.classList.contains("remove");
        if(Blockposition.left < Ballposition.right && Blockposition.right > Ballposition.left && 
            Blockposition.top < Ballposition.bottom && Blockposition.bottom > Ballposition.top && !removedBlock){
            element.style.visibility = "hidden";
            element.classList.add("remove");
            directiony = -directiony;
            count++;
            if(padhit == false){
                s++;
                score = score + (s*10);
                document.getElementById("score").innerText = "Score :"+score;
            }else{
                score = score+10;
                document.getElementById("score").innerText = "Score:"+score;
                padhit = false;
                s=1;
            }
            if(count == 3){
                i=true;
                count = 0;
                level++;
                win++;
                document.getElementById("level").innerText = "Level : "+level;
                ballposi();
                delhidden();
                if(win<3){
                    document.getElementById("popup").style.visibility = "visible";
                }
                spflag = false;
                stint = stint-5;
                end = setInterval(start,stint);
                if(win==3){
                    document.getElementById("gamecomplete").style.visibility = "visible";
                    spflag = false;
                }
            }

        }
    })
}
function gameover(){
    delhidden();
    document.getElementById("gameEnd").style.visibility = "visible";
    spflag = false;

}
function restart(){
    window.location.href = "./login.html";
}
function clearpopup(){
    document.getElementById("popup").style.visibility = "hidden";
}
function paddle(event){
    var x = document.getElementById("paddle");
    var xval = parseInt(getComputedStyle(x).getPropertyValue("margin-left"));
    if(controlmode == "Keyboard"){
        if(event.code == "ArrowLeft" && xval > -650)
        {
            xval = xval-40;
            x.style.marginLeft = xval + "px";

        }else if(event.code == "ArrowRight" && xval < 690){
            xval = xval+40;
            x.style.marginLeft = xval + "px";
        }
    }else if(controlmode == "mouse"){
        xval = 0
        x.style.marginLeft = "0px";
        xval = event.clientX;
        x.style.marginLeft = (xval-650) + "px"
    }
}
function bounce(){
    var paddle = pad.getBoundingClientRect()
    var Bbounce = ball.getBoundingClientRect()
    if(paddle.left < Bbounce.right && paddle.right > Bbounce.left && 
        paddle.top < Bbounce.bottom && paddle.bottom > Bbounce.top){
            var collipt = (paddle.x+105) - Bbounce.x
            directionx=1
            if(collipt<=50){
                directiony = -directiony
                directionx = directionx
            }else if(collipt>=56){
                directiony = -directiony
                directionx = -directionx
            }else if(collipt>=51 && collipt<=55){
                directionx = 0
                directiony = -directiony
            }
            padhit = true
    }
}
function ballposi(){
    document.getElementById("ball").style.left = "48%"
    document.getElementById("ball").style.top = "87%"
    document.getElementById("paddle").style.marginLeft= "0"
}
function delhidden(){
    var cont  = document.getElementById("main")
    for(var j=0;j<=69;j++){
        cont.removeChild(cont.lastChild)
    }
    document.body.append(cont)
}

function createbrick(){
    var cont = document.getElementById("main")
    for(var j=0;j<=69;j++){
        var div = document.createElement("div")
        cont.appendChild(div)
    }
    document.body.append(cont)
    i = false
}
function start(){
    if(win<3){
        if(i){
            createbrick()
        }
        
        ballmove()
        direction()
        hit()
        bounce()
    }else{
        return;
    }
}
function timer(){
    if(spflag){
        if(win<3){
            second2++
            if(second2>9){
                    second1++
                    second2=0
            }
            if(second1==6&&second2==0){
                minutes2++
                second2=0
                second1=0
            }
            if(minutes2>9){
                minutes1++
                minutes2 = 0
            }
                document.getElementById("timer").innerText = "Timer : "+minutes1+minutes2+":"+second1+second2
        }else{
            clearInterval(time)
        }
    }
}
time = setInterval(timer,1000)
main = setInterval(start,stint)