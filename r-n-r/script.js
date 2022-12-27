var data = [
    {number:1000, roman:'M' },
    {number:900, roman:'CM' },
    {number:500, roman:'D' },
    {number:400, roman:'CD' },
    {number:100, roman:'C' },
    {number:90, roman:'XC' },
    {number:50, roman:'L' },
    {number:40, roman:'XL' },
    {number:10, roman:'X' },
    {number:9, roman:'IX' },
    {number:5, roman:'V' },
    {number:4, roman:'IV' },
    {number:1, roman:'I' },
]

function convert(){
    var num = document.getElementById("valN").value
    var romanlet = '';
    for(var i=0;i<data.length;i++){
        if(data[i].number <= num){
            num = num - data[i].number
            romanlet = romanlet + data[i].roman
            i--
        }
    }
    document.getElementById("valR").value = romanlet
}

function revert(){
        let data2 = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        }
        var val = document.getElementById("valR").value
        if(val == "IVI"||val == "IXI"|| val == "VIV"){
            document.getElementById("err").innerText = "Enter a Valid number"
        }
        else{
        document.getElementById("err").innerText = ""
        let result = 0;
        for (let i = 0; i < val.length; i++) {
            var val1 = val[i];
            var val2 = val[i+1]
            if (data2[val1] < data2[val2]) {
                result-=data2[val1]
            } 
            else {
                result+=data2[val1]
            }
        }
        document.getElementById("valN").value = result
    }
}

function rset(){
    document.getElementById('result').innerHTML = ""
}