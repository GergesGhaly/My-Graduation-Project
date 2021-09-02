
// STICTHEADER

window.addEventListener('scroll', function(){

    const header = document.querySelector('header')
    header.classList.toggle("sticky",window.scrollY>0)
    
    });
    

function menutogl(){


const menutogl1 = document.querySelector('.menutogle');
const nav= document.querySelector('#nave')

menutogl1.classList.toggle('active');
nav.classList.toggle('active')


}

// BTNUP

var btn = document.getElementById('btn');


window.onscroll = function(){
    if(window.pageYOffset >= 800){

        btn.style.display='block'

    }else{
        btn.style.display='none'
    }

}

btn.onclick = function(){

window.scrollTo(0,0);

}