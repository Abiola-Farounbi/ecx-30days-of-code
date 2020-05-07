


//image array
var images=[
       "1.png",
       "2.png",
       "3.png",
       "3.png",
       "4.png",
       "5.png",
       "6.png",
       "7.png",
        
];




//creating variables
var button=document.getElementById('bold')
var source=document.getElementById("ide")
var quote1=document.getElementById('word');


//add event listener
button.addEventListener('click', getImage)

//creating function to get random image
function getImage(){
    var i = Math.floor((Math.random() * images.length) );
     var image=images[i]
     var imagePath="images/" + image;

     source.setAttribute('src',imagePath)
    
    

}

