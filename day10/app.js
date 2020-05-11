var show1=document.getElementById('show1')
show1.style.display='none';
var show2=document.getElementById('show2')
show2.style.display='none';
var show3=document.getElementById('show3')
show3.style.display='none';


var button1=document.querySelector('.button1');
button1.addEventListener('click', display1) ;
function display1(e){
    show1.style.display='block';
e.preventDefault();
   
}
function shows(e){
    show1.style.display='none';
}

var button2=document.querySelector('.button2');
button2.addEventListener('click', display2) ;
function display2(e){
    show2.style.display='block';
e.preventDefault();
   
}
function shows2(e){
    show2.style.display='none';
}

var button1=document.querySelector('.button3');
button1.addEventListener('click', display3) ;
function display3(e){
    show3.style.display='block';
e.preventDefault();
   
}
function shows3(e){
    show3.style.display='none';
}