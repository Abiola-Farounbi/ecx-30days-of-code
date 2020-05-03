var canvas=document.getElementById('canvas');
var canvasTem=canvas.getContext('2d');
var r=canvas.height / 2;
canvasTem.translate(r,r);
r=r*0.90;


const drawClock= () =>{
   drawFace(canvasTem,r);
   fillNumbers(canvasTem,r)
   fixTime(canvasTem,r)
}


function drawFace(canvasTem,r){
    canvasTem.beginPath();
    canvasTem.arc(0,0,r,0,2*Math.PI);
    canvasTem.fillStyle='white';
    canvasTem.fill();
    canvasTem.beginPath();
    canvasTem.arc(0,0,r*0.1,0,2*Math.PI);
    canvasTem.fillStyle='brown';
    canvasTem.fill();
    var gradient=canvasTem.createRadialGradient(0,0,r*0.095,0,0,r*0.15);
    gradient.addColorStop(0,"white");
    gradient.addColorStop(0.5,"black");
    gradient.addColorStop(1,"white");
    canvasTem.strokeStyle=gradient;
    canvasTem.lineWidth=r*0.1;
    canvasTem.stroke();
}
function fillNumbers(canavasTem,r){
    canvasTem.font=20 +'px arial';
    canvasTem.fillStyle="brown"
    canavasTem.textBaseline='middle';
    canavasTem.textAlign='center';
    for (num=1; num<13; num++){
        var angle= num*Math.PI /6;
        canvasTem.rotate(angle);
        canvasTem.translate(0,-r*0.85);
        canvasTem.rotate(-angle);
        canvasTem.fillText(num.toString(),0,0);
        canvasTem.rotate(angle);
        canvasTem.translate(0,r*0.85);
        canvasTem.rotate(-angle);
    }
}
function fixHand(canvasTem,position,length,width){
    canvasTem.beginPath();
    canvasTem.lineWidth=width;
    canvasTem.lineCap='round';
    canvasTem.strokeStyle="black"
    canvasTem.moveTo(0,1);
    canvasTem.rotate(position);
    canvasTem.lineTo(0,-length);
    canvasTem.stroke();
    canvasTem.rotate(-position);
}

function fixTime(canvasTem,r){ 
    var Time=new Date();
    var hour=Time.getHours();
    var minute=Time.getMinutes();
    var second=Time.getSeconds();

    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(6*60*60));
     fixHand(canvasTem,hour,r*0.5,r*0.05);

    minute=(minute*Math.PI/(30))+(second*Math.PI/(30*60));
    fixHand(canvasTem,minute,r*0.7,r*0.05);

    second=(second*Math.PI/(30));
    fixHand(canvasTem,second,r*0.8,r*0.01);
   
}
setInterval(drawClock,1000)

var Time=new Date();
var year=Time.getFullYear(); 
var months=["January",'February',"March","April","May","June",'July','August','September','October',"November","December"];
 var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday',"Saturday" ];
 var month=Time.getMonth();
var day=Time.getDate();
var month_1 =months[month];
var day_1=days[Time.getUTCDay()]


var date=document.getElementById('date').innerHTML=`${day_1}   ${day},  ${month_1}  ${year}`
