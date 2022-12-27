var slide = 2
function slideChange(){
    console.log(slide)
    for(var i=1;i<=3;i++){
        document.getElementById('container'+i).classList.add('hide')  
        if(document.getElementById('title'+i).classList.contains('slideup')){
            document.getElementById('title'+i).classList.remove('slideup')
            document.getElementById('description'+i).classList.remove('slideup')
            document.getElementById('btn'+i).classList.remove('slideup')
            document.getElementById('move'+i).classList.remove('move')
            document.getElementById('move2'+i).classList.remove('move')
        }
    }
    if(slide<=3){
        document.getElementById('container'+slide).classList.add('display')
        document.getElementById('container'+slide).classList.remove('hide')
        slideupAni()
        slide++ 
    }else{
        slide = 1
        document.getElementById('container'+slide).classList.add('display')
        document.getElementById('container'+slide).classList.remove('hide')
        slideupAni()
    }
}
function slideRevert(){

    for(var i=1;i<=3;i++){
        document.getElementById('container'+i).classList.add('hide')
        if(document.getElementById('title'+i).classList.contains('slideup')){
            document.getElementById('title'+i).classList.remove('slideup')
            document.getElementById('description'+i).classList.remove('slideup')
            document.getElementById('btn'+i).classList.remove('slideup')
            document.getElementById('move'+i).classList.remove('move')
            document.getElementById('move2'+i).classList.remove('move')
        }
    }
    if(slide<=3 && slide>=1){
        if(slide == 1){
            slide = 4
        }
        slide--
        document.getElementById('container'+slide).classList.add('display')
        document.getElementById('container'+slide).classList.remove('hide')
        slideupAni()
    }else{
        slide=3
        document.getElementById('container'+slide).classList.add('display')
        document.getElementById('container'+slide).classList.remove('hide')
        slideupAni()
    }

}
function slideupAni(){
        document.getElementById('title'+slide).classList.add('slideup')
        document.getElementById('description'+slide).classList.add('slideup')
        document.getElementById('btn'+slide).classList.add('slideup')
        document.getElementById('move'+slide).classList.add('move')
        document.getElementById('move2'+slide).classList.add('move')
}
function Section7_button(BtnId){
    if(BtnId == 'Section7Btn1'){
        document.getElementById(BtnId).classList.add('Section7_button_change')
        document.getElementById('Section7Btn2').classList.remove('Section7_button_change')
    }else if(BtnId == 'Section7Btn2'){
        document.getElementById(BtnId).classList.add('Section7_button_change')
        document.getElementById('Section7Btn1').classList.remove('Section7_button_change')
    }  
}
window.onload=function(){
    document.getElementById('title1').classList.add('slideup')
    document.getElementById('description1').classList.add('slideup')
    document.getElementById('btn1').classList.add('slideup')
    document.getElementById('move1').classList.add('move')
    document.getElementById('move21').classList.add('move')
    document.getElementById("Section7Btn1").classList.add('Section7_button_change')
    document.getElementById('th1').classList.add('active_cell')
    document.getElementById('map_card1').classList.add('profile_active')
    document.getElementById('tick1').classList.add('tick_active')
    document.getElementById('mapImage1').classList.add('image_bright')
    document.getElementById('carousel2').classList.add('mover')
}
function Section8_slider(){
    for(var i=1;i<=5;i++){
        if(document.getElementById('card'+i).classList.contains('active_slide')){
            document.getElementById('card'+i).classList.remove('active_slide')
            document.getElementById('card'+i).classList.add('first_slide')
        }else if(document.getElementById('card'+i).classList.contains('second_slide')){
            document.getElementById('card'+i).classList.remove('second_slide')
            document.getElementById('card'+i).classList.add('active_slide')
            document.getElementById('th'+i).classList.add('active_cell')
            if(i==1){
                document.getElementById('th5').classList.remove('active_cell')
            }else{
                document.getElementById('th'+(i-1)).classList.remove('active_cell')
            }
        }else if(document.getElementById('card'+i).classList.contains('second_last_slide')){
            document.getElementById('card'+i).classList.remove('second_last_slide')
            document.getElementById('card'+i).classList.add('second_slide')
        }else if(document.getElementById('card'+i).classList.contains('last_slide')){
            document.getElementById('card'+i).classList.remove('last_slide')
            document.getElementById('card'+i).classList.add('second_last_slide')
        }else if(document.getElementById('card'+i).classList.contains('first_slide')){
            document.getElementById('card'+i).classList.remove('first_slide')
            document.getElementById('card'+i).classList.add('last_slide')
        }
    }
}
var time
function change_slide_image(num){
    for(var j=1;j<=5;j++){
        document.getElementById('card'+j).className = ''
        document.getElementById('card'+j).classList.add('Section8_cards')
        document.getElementById('th'+j).className = ''
    }
    document.getElementById('card'+num).classList.add('active_slide')
    document.getElementById('th'+num).classList.add('active_cell')
    if(num==1){
        document.getElementById('card5').classList.add('first_slide')
    }else{
        document.getElementById('card'+(num-1)).classList.add('first_slide')
    }
    if(num==5){
        document.getElementById('card1').classList.add('second_slide')
    }else{
        document.getElementById('card'+(num+1)).classList.add('second_slide')
    }
    if(num==4){
        document.getElementById('card1').classList.add('second_last_slide')
        document.getElementById('card2').classList.add('last_slide')
    }else if(num!=4 && num!=5 && num!=3){
        document.getElementById('card'+(num+2)).classList.add('second_last_slide')
        document.getElementById('card'+(num+3)).classList.add('last_slide')
    }
    if(num==5){
        document.getElementById('card2').classList.add('second_last_slide')
        document.getElementById('card3').classList.add('last_slide')
    }
    if(num==3){
        document.getElementById('card5').classList.add('second_last_slide')
        document.getElementById('card1').classList.add('last_slide')
    }
    time=setTimeout(revert,3000)
}
function revert(){
    document.getElementById('th'+number).classList.remove('active_cell')
    clearTimeout(time)
}
setInterval(Section8_slider,3000)
function profilecard(card){
    console.log(card)
    for(var i=1;i<=5;i++){
        if(document.getElementById('map_card'+i).classList.contains('profile_active')){
            document.getElementById('map_card'+i).classList.remove('profile_active')
            document.getElementById('tick'+i).classList.remove('tick_active')
            document.getElementById('mapImage'+i).classList.remove('image_bright')
        }
    }
    document.getElementById('map_card'+card).classList.add('profile_active')
    document.getElementById('tick'+card).classList.add('tick_active')
    document.getElementById('mapImage'+card).classList.add('image_bright')
}
function select(data,element){
    document.getElementById(element).innerText = data
}
var section6 = 2
function Section6_carousel_Right(){
    if(section6<3&&section6>=1){
        section6++
    }else{
        section6 = 1
    }
    section6_carousel()
}
function Section6_carousel_left(){
    if(section6<=3&&section6<2){
        section6--
    }else{
        section6 = 3
    }
    
    section6_carousel()
}
function section6_carousel(){
    for(var i=1;i<=3;i++){
        document.getElementById('carousel'+i).className = ''
        document.getElementById('carousel'+i).classList.add('Carousel')
    }
    switch(section6){

        case 1:
                document.getElementById('carousel1').classList.add('mover')
                document.getElementById('carousel2').classList.add('slide3')
                document.getElementById('carousel3').classList.add('slide1')
                break;
        case 2:
                document.getElementById('carousel1').classList.add('slide1')
                document.getElementById('carousel2').classList.add('mover')
                document.getElementById('carousel3').classList.add('slide3')
                break;
        case 3:
                document.getElementById('carousel1').classList.add('slide3')
                document.getElementById('carousel2').classList.add('slide1')
                document.getElementById('carousel3').classList.add('mover')
                break;
    }
    section6++
    if(section6>3){
        section6 = 1
    }
}
setInterval(section6_carousel,2000)