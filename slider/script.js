addEventListener('keydown',keys)
var images = document.querySelectorAll(".slide")
var index = 0
function call(event){
    if(event.button == 0){
        if(index<9){
            index++
        }
        for(let i=0;i<images.length;i++){
            images[i].classList.remove('def')
        }
        images[index].classList.add('def')
    }else if(event.button == 2){
        if(index>0){
            index--
        }
        for(let i=0;i<images.length;i++){
            images[i].classList.remove('def')
        }
        images[index].classList.add('def')
    }
    console.log(images)
}
function keys(event){
    if(event.code == 'ArrowUp' || event.code == 'ArrowRight'){
        console.log("keys")
        if(index<9){
            index++
        }
        for(let i=0;i<images.length;i++){
            images[i].classList.remove('def')
        }
        images[index].classList.add('def')
    }else if(event.code == 'ArrowDown' || event.code == 'ArrowLeft'){
        if(index>0){
            index--
        }
        for(let i=0;i<images.length;i++){
            images[i].classList.remove('def')
        }
        images[index].classList.add('def')
    }
}