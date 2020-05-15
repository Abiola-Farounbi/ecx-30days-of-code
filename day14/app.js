
//varibles to display the output
var word=document.querySelector('.word');
var one=document.querySelector('.one');
var two=document.querySelector('.two');
var partsOfSpeech=document.querySelector('.parts-of-speech');
var syns=document.querySelector('.synonyms');

// the value of the input
const value=document.querySelector('.search').value 


// creating a function to search for word
function searchWord(){
  
// using xhr object to  fetch data from api
const xhr = new XMLHttpRequest();

xhr.open('GET', `http://www.dictionaryapi.com/api/v3/references/collegiate/json/${value}?key=22c7e3b3-2dbf-43a2-95d8-30ea0c96c8ec`, true);

xhr.onload = function () {
  if(this.status === 200) {
    const response = JSON.parse(this.responseText);
    if (value == ' '){
        alert('enter in a word ')
    }
    else{
        if(response == ' '){
            alert('word not found')  
        }
        else{
                    word.innerHTML=value
                    partsOfSpeech.innerHTML= ` Part Of Speech : ${response[0].fl }`
                    one.innerHTML=`-${response[0].shortdef[0]}`
                    two.innerHTML=` -${response[0].shortdef[1]}`
                    syns.innerHTML=`Synonym: ${ (response[0].syns[0].pt[0])[1] }`
                    
            }
        }     
    }
   else{
      console.log('Error gettig source')
     }
   
}

xhr.send();


}

