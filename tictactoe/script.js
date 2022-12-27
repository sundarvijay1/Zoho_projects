var click = 0
var winner = 0
var win = [
    ['1','2','3'],['1','3','2'],['1','5','9'],['1','9','5'],['1','7','4'],['1','4','7'],
    ['2','5','8'],['2','1','3'],['2','3','1'],['2','8','5'],
    ['3','2','1'],['3','1','2'],['3','5','7'],['3','7','5'],['3','6','9'],['3','9','6'],
    ['4','1','7'],['4','7','1'],['4','5','6'],['4','6','5'],
    ['5','1','9'],['5','9','1'],['5','2','8'],['5','8','2'],['5','3','7'],['5','7','3'],['5','4','6'],['5','6','4'],
    ['6','5','4'],['6','4','5'],['6','3','9'],['6','9','3'],
    ['7','4','1'],['7','1','4'],['7','8','9'],['7','9','8'],['7','5','3'],['7','3','5'],
    ['8','5','2'],['8','2','5'],['8','7','9'],['8','9','7'],
    ['9','8','7'],['9','7','8'],['9','6','3'],['9','3','6'],['9','5','1'],['9','1','5'],
]
function fill(ipID){
    click++;
    if(click%2 != 0){
        document.getElementById(ipID).value = "X"
        document.getElementById(ipID).disabled = "true"
    }
    else{
        document.getElementById(ipID).value = "O"
        document.getElementById(ipID).disabled = "true"
    }
    if(click>= 5){
        for(var i=0;i<win.length;i++){
            var current = win[i]
            if(document.getElementById(current[0]).value == "X"){
                if(document.getElementById(current[1]).value == "X"){
                    if(document.getElementById(current[2]).value == "X"){
                        document.getElementById('winner').innerText = "X is the winner";
                        disableall()
                        winner++
                        break
                    }
                }
            }
            else if(document.getElementById(current[0]).value == "O"){
                if(document.getElementById(current[1]).value == "O"){
                    if(document.getElementById(current[2]).value == "O"){
                        document.getElementById('winner').innerText = "O is the winner"
                        disableall();
                        winner++
                        break
                    }
                }
            }
        }
    }
    console.log(click)
    console.log(winner)
    if(click == 9 && winner == 0){
        document.getElementById('winner').innerText = "Match Tie"
    }
}
function disableall(){
    for(var i=1;i<=9;i++){
        document.getElementById(i).disabled = "true"
    }
}
function rset(){
    location.reload();
}