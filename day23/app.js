 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD27S-n1t5uAFohUsLWURH7pv8AsDlzwpw",
    authDomain: "todo-app-88222.firebaseapp.com",
    databaseURL: "https://todo-app-88222.firebaseio.com",
    projectId: "todo-app-88222",
    storageBucket: "todo-app-88222.appspot.com",
    messagingSenderId: "247830035113",
    appId: "1:247830035113:web:82197f704e9439684fc7b8",
    measurementId: "G-4E3PYCMD0V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();



    document.getElementById('button1').addEventListener('click', function(e){
        var task= document.getElementById('task').value;
        var description= document.getElementById('description').value;
      
        createTask(task,description);
        form.reset();
        e.preventDefault();
    });

    function createTask(taskName,description){
        var task={
            task:taskName,
            description:description
        }
        let db=firebase.firestore().collection('tasks/');
        db.add(task)
        .then(function(){
            alert('task added')
            document.getElementById('cardSection').innerHTML=' ';
            readTask();
        })
        
    }
    
    function readTask(){
        firebase.firestore().collection('tasks').onSnapshot(function(snapshot){
            document.getElementById('cardSection').innerHTML=' ';
            snapshot.forEach(function(taskValue){
                document.getElementById('cardSection').innerHTML+=`
                <div class='card mb-3'>
                     <div class='card-body'>
                         <h5 class='card-title'>${taskValue.data().task}</h5>
                         <p class='card-text'>${taskValue.data().description}</p>
                          <button type='submit' style='color:white;' class='btn btn-warning' onclick="updateTasks('${taskValue.id}','${taskValue.data().task}','${taskValue.data().description}')"><i class='fas fa-edit'></i> Edit Task  </button>
                   
                         <button type='submit' class='btn btn-danger' onclick="deleteTask('${taskValue.id}')"><i class='fas fa-trash-alt'></i> Delete Task  </button>

                     </div>
                </div>
                
                `

      
            });
        });
   
    }


    
    function reset(){
        document.getElementById('firstSection').innerHTML=`
        <form class='border p-3 mb-3' id='form'>
        <div class="form-group">
            <label>Task</label>
            <input type='text' class='form-control' id='task' placeholder="Enter Task">
        </div>

        <div class="form-group">
            <label>Description</label>
            <input type='text' class='form-control' id='description' placeholder="Describe Task">
        </div>

        <button type='submit' id='button1' class='btn btn-secondary'> ADD </button> 
        <button style='display:none;' type='submit' id='button2' class='btn btn-secondary'> UPDATE </button> 
        <button style='display:none' type='submit' id='button3' class='btn btn-secondary'> DELETE </button> 

         </form>
        
        
        `;
        document.getElementById('button1').addEventListener('click', function(e){
            var task= document.getElementById('task').value;
            var description= document.getElementById('description').value;
          
            createTask(task,description);
            form.reset();
            e.preventDefault();
        });
    }
    function updateTasks(id,name,description){
        document.getElementById('firstSection').innerHTML=`
        <form class='border p-3 mb-3' id='form2'>
        <div class="form-group">
            <label>Task</label>
            <input type='text' class='form-control' id='task' placeholder="Enter Task">
        </div>

        <div class="form-group">
            <label>Description</label>
            <input type='text' class='form-control' id='description' placeholder="Describe Task">
        </div>

        <button style='display:none;' type='submit' id='button1' class='btn btn-secondary'> ADD </button> 
        <button style='display:inline-block;' type='submit' id='button2' class='btn btn-secondary'> UPDATE </button> 
        <button style='display:inline-block' type='submit' id='button3' class='btn btn-secondary'> DELETE </button> 

         </form>
        
        `
        document.getElementById('form2').addEventListener('submit', function(e){
            e.preventDefault();
        });
        document.getElementById('button3').addEventListener('click', function(e){
            reset();
        });
        document.getElementById('button2').addEventListener('click', function(e){
            updateTasks2(id,document.getElementById('task').value, document.getElementById('description').value);
        });
        document.getElementById('task').value=name;
        document.getElementById('description').value=description;
    }
    function updateTasks2(id,name,description){
        var taskUpdated={
            task:name,
            description:description
        }
        let db=firebase.firestore().collection('tasks').doc(id);
        db.set(taskUpdated)
        .then(function(){
            console.log('Good Job!','Task Updated')
        })
        document.getElementById('cardSection').innerHTML='';
        readTask();
        reset();
    }


    function deleteTask(id){
        console.log(id)
        firebase.firestore().collection('tasks').doc(id).delete()
       
        .then(function(){
            alert(' Task Removed')
        })
        reset();
        document.getElementById('cardSection').innerHTML='';
        readTask();
        
        
    }

