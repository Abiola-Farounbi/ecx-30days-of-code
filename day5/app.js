const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');
const clearTask=document.querySelector('.clearTask');


loadEventListeners();


function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getTasks);
  form.addEventListener('submit', addTask);
  taskList.addEventListener("click", removeTask)
  clearTask.addEventListener("click",clearTasks)

 
}

{/* <button class="check"> <i class="fas fa-check-circle" style="color:black;"></i> Done </button>' */}

function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
 
  tasks.forEach(function(task){
  const li = document.createElement('li');
  li.className = 'collection-item';
 const check=document.createElement("a");
 check.className='check';
  check.innerHTML= '<button class="check"> <i class="far  fa-check-circle" style="color:black;"></i> </button>'  ;
  li.appendChild(check);
  li.appendChild(document.createTextNode(task));
  const link = document.createElement('a');
  link.className = 'remove';
  link.innerHTML = '  <button class="remove">  <i class="fas fa-trash" style="color:red;"></i> </button> <hr>';
  li.appendChild(link);
  taskList.appendChild(li);
 
  });
}

function addTask(e) {
  if(taskInput.value === '') {
    alert('Add an Item');
 
  }
  else{
  const li = document.createElement('li');
  li.className = 'collection-item';

  const check=document.createElement("a");
  check.className='check';
   check.innerHTML= '  <button class="check"> <i class="far fa-check-circle" style="color:black;"></i> </button>';
   li.appendChild(check);
   li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement('a');
  link.className = 'remove';
  link.innerHTML = '    <button class="remove">  <i class="fas  fa-trash" style="color:red;"></i> </button>';
  li.appendChild(link);
  taskList.appendChild(li);

  storeTaskInLocalStorage(taskInput.value);
  taskInput.value = '';

  }
  
  e.preventDefault();
}


function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
 function checkTask(e){
     if(e.target.parentElement.classList.contains('check')){
    const checkers=e.target.parentElement.parentElement.parentElement;
    checkers.style.textDecoration='line-through';
    checkers.style.color='grey';

     
     
     }
 }  


function removeTask(e) {
    if(e.target.parentElement.classList.contains('remove')) {
      if(confirm('Are You Sure?')) {
        e.target.parentElement.parentElement.parentElement.remove();
        
        removeTaskFromLocalStorage(e.target.parentElement.parentElement.parentElement);
      }
    }
      
      
   else{
        checkTask(e)
      
    }
   
    e.preventDefault();
  }

 


  function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task,index ){
      if(taskItem.textContent === task){
        tasks.splice(index, 1);
      }
    });
  
     localStorage.setItem('tasks', JSON.stringify(tasks));

  }
  
  
function clearTasks() {
    taskList.innerHTML = '';
    clearTasksFromLocalStorage()
  }
  
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

