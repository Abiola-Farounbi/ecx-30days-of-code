//creating the variables
const form = document.querySelector('#note-form');
const noteList = document.querySelector('.collection');
// const noteInput = document.querySelector('#name');
const words=document.querySelector('.textArea');
const clearNotes=document.querySelector('.clearNote');

//loading the event listeners
loadEventListeners();


function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getNote);
  form.addEventListener('submit', addNote);
  noteList.addEventListener("click", removeNote);
  clearNotes.addEventListener("click",clearNote);

}

// collecting the inputs
function getNote() {
  let notes;
  if(localStorage.getItem('notes') === null){
    notes = [];
  } else {
    notes= JSON.parse(localStorage.getItem('notes'));
  }
 
  notes.forEach(function(note){
  const div = document.createElement('div');
  div.className = 'collection-item';
  div.appendChild(document.createTextNode(note));
 const edit=document.createElement("a");
 edit.className='check';
 edit.innerHTML= '<button class="check"> <i class="fas fa-pencil-alt" ></i> </button>'  ;
 div.appendChild(edit);
  const link = document.createElement('a');
  link.className = 'remove';
  link.innerHTML = '  <button class="remove">  <i class="fas fa-trash"></i> </button> ';
  div.appendChild(link);
  const time = document.createElement('span');
  time.className = 'time';
  var date=new Date();
  var month=date.getMonth();
var day=date.getDate();
var months=["January",'February',"March","April","May","June",'July', 'August','September','October',"November","December"];
var month_1=months[month];
 timeString= ` written ---- ${day},   ${month_1}`
 timedString=timeString.toString()
  time.innerHTML = `${timedString}`;
  div.appendChild(time);
  noteList.appendChild(div);
 
  });
}

function addNote(e) {
  if(words.value === '') {
    alert('Add your note');
 
  }
  else{
    
      const div = document.createElement('div');
      div.className = 'collection-item';
      div.appendChild(document.createTextNode(words.value));
     const edit=document.createElement("a");
     edit.className='check';
      edit.innerHTML= '<button class="check"> <i  class="fas fa-pencil-alt"></i> </button>'  ;
      div.appendChild(edit);
      const link = document.createElement('a');
      link.className = 'remove';
      link.innerHTML = '  <button class="remove">  <i class="fas fa-trash" ></i> </button> <hr>';
      div.appendChild(link);
      const time = document.createElement('span');
      time.className = 'time';
      var date=new Date();
      var month=date.getMonth();
    var day=date.getDate();
    var months=["January",'February',"March","April","May","June",'July', 'August','September','October',"November","December"];
    var month_1=months[month];
    console.log(typeof month_1.toString())
    timeString= ` written ---- ${day},   ${month_1}`
    timedString=timeString.toString()
     time.innerHTML = `${timedString}`;
      div.appendChild(time);
      noteList.appendChild(div);

  storeNoteInLocalStorage(words.value);
  words.value = '';

  }

  e.preventDefault();
}


function storeNoteInLocalStorage(note) {
  let notess;
  if(localStorage.getItem('notes') === null){
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem('notes'));
  }

  notes.push(note);

  localStorage.setItem('notes', JSON.stringify(notes));
} 

function editNote(e){
if(e.target.parentElement.classList.contains('check')){
 var edited= e.target.parentElement.parentElement.parentElement.textContent ;
    words.value=edited
    e.target.parentElement.parentElement.parentElement.remove()


  e.preventDefault();

}}


function removeNote(e) {
    if(e.target.parentElement.classList.contains('remove')) {
      if(confirm('Are You Sure?')) {
        e.target.parentElement.parentElement.parentElement.remove();
        
        removeNoteFromLocalStorage(e.target.parentElement.parentElement.parentElement);
      }
    }
    else{
      editNote(e);
    }
      
      
  
   
    e.preventDefault();
  }

 


  function removeNoteFromLocalStorage(Item) {
      let notes = JSON.parse(localStorage.getItem('notes'));
    

  

    notes.forEach(function(note,index ){
      if(Item.textContent === note){
        notes.splice(index, 1);
      }
    });
  
    localStorage.setItem('notes', JSON.stringify(notes));



   

  }
  
  
function clearNote() {
    noteList.innerHTML = '';
    clearNotesFromLocalStorage()
  }
  
function clearNotesFromLocalStorage() {
  localStorage.clear();
}

