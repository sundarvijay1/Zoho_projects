var snake = [{x:25,y:10}]
var foodposi = {x:15,y:20}
var food_sp
var specialposi = {x:20,y:20}
var powerposi = {x:19,y:9}
var board = document.getElementById("board")
var content = document.getElementById("content")
var direction = {x:-1,y:0}
var predirection = 'Left'
var food_div
var snake_div
var eatflag = true
var dynamicposition 
var dynamicpositionsp
var fdcount=1
var score = 0
var minute1=0
var minute2=0
var second1=0
var second2=0
var powersecond1 = 0
var powersecond2 = 0
var time
var speedup = 0
var create = false
var flag = false
var specialflag = false
var minutesSum
var speed = 300
var powerupCase = 0
var powerupval = false
var food_power
var power_special_eat_pt = 0
var power_eat_pt = 0
var power_timer = false
var power_interval
var passthro = false
var controltimer = 0
var yellow_food
var yellowposi = [{x:0,y:0}]
var yellow_create = false
var yellow_count = 0
var playerName
var dynamicpositionpower
document.addEventListener("keydown",keymove)
document.addEventListener("keydown",pause)
function pause(event){
    if(event.code == 'Space'){
        document.getElementById("board").style.backgroundColor = "#7f11ed"
        document.getElementById("instructions").style.visibility = "hidden"
        flag = true   
    }else if(event.code == 'Enter'){
        flag = false
    }
    if(event.code == 'Space' && document.getElementById("over").style.visibility == "visible"){
        location.reload()
    }
}
function username(){
    var playerName=document.getElementById("user").value
    if(playerName != ""){
        document.getElementById("player").innerText = "Player : "+playerName
        document.getElementById("name").style.display = "none"
        document.getElementById("board").style.opacity = "none"
        document.getElementById("instructions").style.visibility = "visible"
    }
}
function run(){
    if(flag && speed){
        move()
        bite()
        build()
        foodfn()
        eat()
    }
    setTimeout(()=>{window.requestAnimationFrame(run)},speed)
}
window.requestAnimationFrame(run)
time = setInterval(timer,1000)
function move(){
    for(var i=snake.length-2;i>=0;i--){
        snake[i+1] = {...snake[i]}
    }
    snake[0].x = snake[0].x + direction.x
    snake[0].y = snake[0].y + direction.y
    if((snake[0].x==0 || snake[0].x == 26) && (predirection != "Up" || predirection !="Down")){
        gameover()
    }else if((snake[0].y==0 || snake[0].y == 26)&& (predirection != "Left" || predirection !="Right")){
        gameover()
    }
}
function gameover(){
    document.getElementById("board").style.backgroundColor = " #ccc"
    document.getElementById("over").style.visibility = "visible"
    document.getElementById("restart").style.visibility = "visible"
    flag = false
}
function build(){
    board.innerHTML = ""    
    snake.forEach(element =>{
        snake_div = document.createElement('div')
        snake_div.classList.add('snake')
        snake_div.style.gridRowStart = element.y
        snake_div.style.gridColumnStart = element.x
        board.appendChild(snake_div)
    })
}
function foodfn(){
    eatflag = false
    food_div = document.createElement('div')
    food_div.id = 'fd'
    food_div.classList.add('food')
    food_div.style.gridRowStart = foodposi.x
    food_div.style.gridColumnStart = foodposi.y
    board.appendChild(food_div) 
    if(parseInt(minutesSum)%2 == 0 && minutesSum != '00' && create == true){
        special()
        specialflag = true
    }
    if(specialflag == true){
        eatspecial()
    }
    if(powerupval == true){
        createpowerup()
        powerup()
    }
    if(yellow_create == true){
        yellow_fd()
        yellow_eat()
    }
}
function getFoodposi(min,max){
    dynamicposition = Math.floor(Math.random() * (max - min + 1)) + min
}
function getFoodposisp(min,max){
    dynamicpositionsp = Math.floor(Math.random() * (max - min + 1)) + min
}
function special(){
    getFoodposisp(1,25)
    food_sp = document.createElement('div')
    food_sp.id = 'spfd'
    food_sp.classList.add('foodsp')
    food_sp.style.gridRowStart = specialposi.x
    food_sp.style.gridColumnStart = specialposi.y
    board.appendChild(food_sp)
}
function eatspecial(){
    if(snake[0].y == specialposi.x && snake[0].x == specialposi.y){
        document.getElementById("spfd").style.visibility = "hidden"
        food_sp.classList.add("remove")
        grow()
        score = score +(20+power_special_eat_pt)
        specialposi.x = dynamicpositionsp
        specialposi.y = dynamicpositionsp
        document.getElementById('score').innerText = "Score : "+score
        create = false
        specialflag = false
    }
}
function eat(){
    if(snake[0].y == foodposi.x && snake[0].x == foodposi.y){
        document.getElementById("fd").style.visibility = "hidden"
        food_div.classList.add("remove")
        score = score +(10+power_eat_pt)
        document.getElementById('score').innerText = "Score : "+score
        grow()
        foodposi.x=0
        foodposi.y=0
        getFoodposi(1,25)
        foodposi.x=dynamicposition
        foodposi.y=dynamicposition
        eatflag = true
    }
}
function grow(){
    snake[fdcount] = {...foodposi[fdcount]}
    fdcount++
    speedup++
    console.log(snake.length)
    if(speedup == 5){
        powerupval = true
        speed = speed - 10
        speedup = 0
    }
}
function bite(){
    if(passthro == false){
        for(var i=5;i<snake.length;i++){
            if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
                gameover()
            }
        }
    }
}
function createpowerup(){
    food_power = document.createElement('div')
    food_power.id = 'powerfd'
    food_power.classList.add('foodpower')
    food_power.style.gridRowStart = powerposi.x
    food_power.style.gridColumnStart = powerposi.y
    board.appendChild(food_power)
}
function powercase(){
    powerupCase = Math.floor(Math.random()*4)+1
}
function getpowerposi(min,max){
    dynamicpositionpower = Math.floor(Math.random() * (max - min + 1)) + min
}
function powerup(){
    powercase()
    console.log(powerupCase)
    // powerupCase = 1
    switch(powerupCase){
        case 1: 
                console.log("double_point")
                if(powerposi.y!=26){
                    powerposi.y = (powerposi.y+1)
                    powerposi.x = powerposi.x
                }else{
                    powerposi.y = 1
                    // powerposi.x = (powerposi.x+1)
                    // if(powerposi.x==26){
                    //     powerposi.x=1
                    // }
                }
                if(snake[0].x == powerposi.y && snake[0].y == powerposi.x){
                    document.getElementById("powerfd").style.visibility = "hidden"
                    power_timer = true
                    powerupval = false
                    controltimer = 3
                    document.getElementById('power').innerText = ""
                    document.getElementById('power').innerText = "Special Power : DoublePoint"
                    document.getElementById('power').style.color = "green"
                    getpowerposi(1,25)
                    powerposi.x = dynamicpositionpower
                    powerposi.y = dynamicpositionpower
                }
                if(document.getElementById("powerfd").style.visibility == "hidden"){
                    power_eat_pt = 10
                    power_special_eat_pt = 20
                }
                power_interval = setInterval(power_time,1000)
                break;
        case 2: 
                console.log("Reduce_size")
                if(powerposi.y!=26){
                    powerposi.y = (powerposi.y+1)
                }else{
                    powerposi.y = 1
                    // powerposi.x = (powerposi.x+1)
                    // if(powerposi.x==26){
                    //     powerposi.x=1
                    // }
                }
                if(snake[0].x == powerposi.y && snake[0].y == powerposi.x){
                    document.getElementById("powerfd").style.visibility = "hidden"
                    var reduce = Math.floor((snake.length/100)*20)
                    snake.length -= reduce
                    powerupval = false
                    document.getElementById('power').innerText = ""
                    document.getElementById('power').innerText = "Special Power : Reduce Size"
                    getpowerposi(1,25)
                    powerposi.x = dynamicpositionpower
                    powerposi.y = dynamicpositionpower
                }
                break;
        case 3:
                console.log("yellow_fruit")
                if(powerposi.y!=26){
                    powerposi.y = (powerposi.y+1)
                }else{
                    powerposi.y = 1
                    // powerposi.x = (powerposi.x+1)
                    // if(powerposi.x==26){
                    //     powerposi.x=1
                    // }
                }
                if(snake[0].x == powerposi.y && snake[0].y == powerposi.x){
                    document.getElementById("powerfd").style.visibility = "hidden"
                    power_timer = true
                    powerupval = false
                    controltimer = 1
                    yellow_create = true
                    document.getElementById('power').innerText = ""
                    document.getElementById('power').innerText = "Special Power : Yellow Fruit"
                    document.getElementById('power').style.color = "green"
                    getpowerposi(1,25)
                    powerposi.x = dynamicpositionpower
                    powerposi.y = dynamicpositionpower
                }
                power_interval = setInterval(power_time,1000)
                break;
        case 4: 
                console.log("decrese_speed")
                if(powerposi.y!=26){
                    powerposi.y = (powerposi.y+1)
                }else{
                    powerposi.y = 1
                    // powerposi.x = (powerposi.x+1)
                    // if(powerposi.x==26){
                    //     powerposi.x=1
                    // }
                }
                if(snake[0].x == powerposi.y && snake[0].y == powerposi.x){
                    document.getElementById("powerfd").style.visibility = "hidden"
                    power_timer = true
                    powerupval = false
                    speed = speed + 300
                    controltimer = 6
                    document.getElementById('power').innerText = ""
                    document.getElementById('power').innerText = "Special Power : Decrease Speed"
                    document.getElementById('power').style.color = "green"
                    getpowerposi(1,25)
                    powerposi.x = dynamicpositionpower
                    powerposi.y = dynamicpositionpower
                }
                power_interval = setInterval(power_time,1000)
                break;
        case 5:
                console.log("pass_thorugh")
                if(powerposi.y!=26){
                    powerposi.y = (powerposi.y+1)
                }else{
                    powerposi.y = 1
                    // powerposi.x = (powerposi.x+1)
                    // if(powerposi.x==26){
                    //     powerposi.x=1
                    // }
                }
                if(snake[0].x == powerposi.y && snake[0].y == powerposi.x){
                    document.getElementById("powerfd").style.visibility = "hidden"
                    power_timer = true
                    powerupval = false
                    passthro = true
                    controltimer = 3
                    document.getElementById('power').innerText = ""
                    document.getElementById('power').innerText = "Special Power : Pass Through"
                    document.getElementById('power').style.color = "green"
                    getpowerposi(1,25)
                    powerposi.x = dynamicpositionpower
                    powerposi.y = dynamicpositionpower
                }
                power_interval = setInterval(power_time,1000)
                break;
    }
}
function yellow_fd(){
    for(var a=1;a<=25;a++){
        for(var b=1;b<=25;b++){
            yellow_food = document.createElement('div')
            yellow_food.id = "yellow_fd"
            yellow_food.classList.add('yellowfood')
            yellowposi.x = {...a}
            yellowposi.y = {...b}
            yellow_food.style.gridRowStart = yellowposi.x
            yellow_food.style.gridColumnStart = yellowposi.y
            board.appendChild(yellow_food)
        }
    }
}
function yellow_eat(){
    yellow_count++
    grow()
}
function power_time(){
    console.log("power time")
    console.log(power_timer,powersecond1)
    if(power_timer == true && powersecond1<controltimer){
        powersecond2++
        if(powersecond2>9){
            powersecond1++
            powersecond2 = 0
        }
    }else{
        document.getElementById('power').style.color = "black"
        console.log("clear")
        clearInterval(power_interval)
        power_eat_pt = 0
        power_special_eat_pt = 0
        powersecond1 = 0
        powersecond2 = 0
        power_timer = false
        if(speed>300){
            speed = speed - 300
        }
        passthro = false
        yellow_create = false
        if(yellow_count>0){
            score = score + (yellow_count*20)
            yellow_count = 0
        }
        controltimer=0
    }
}
function timer(){
    if(flag){
        second2++
        if(second2>9){
                second1++
                second2=0
        }
        if(second1==6&&second2==0){
            minute2++
            second2=0
            second1=0
        }
        if(minute2>9){
            minute1++
            minute2 = 0
        }
        document.getElementById("timer").innerText = "Timer : "+minute1+minute2+":"+second1+second2
        minutesSum = ''+minute1+minute2
        if(minutesSum%2){
            create = true
        }
    }
}
function keymove(event){
    switch(event.code){
        case "ArrowUp":
                if(predirection!='Up' && predirection!='Down'){
                    direction = {x:0,y:-1};
                    setTimeout(function(){predirection = 'Up'},speed);
                }
                break;
        case "ArrowDown":
                if(predirection!='Up' && predirection!='Down'){
                    direction = {x:0,y:1};
                    setTimeout(function(){predirection = 'Down'},speed);
                }
                break;
        case "ArrowLeft":
                if(predirection!='Left' && predirection!='Right'){
                    direction = {x:-1,y:0};
                    setTimeout(function(){predirection = 'Left'},speed);
                }
                break;
        case "ArrowRight":
                if(predirection!='Left' && predirection!='Right'){
                    direction = {x:1,y:0};
                    setTimeout(function(){predirection = 'Right'},speed);
                }
                break;
    }
}
