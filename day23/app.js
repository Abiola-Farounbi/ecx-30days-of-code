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


        /**
         * Handles the sign in button press.
         */
        function toggleSignIn() {
            if (firebase.auth().currentUser) {
              firebase.auth().signOut();
            } 
            else {
              var email = document.getElementById('email').value;
              var password = document.getElementById('password').value;
              if (email.length < 4) {
                swal("Enter in an email !", "warning");
                return;
              }
              if (password.length < 4) {
                swal("Enter in a password !", "warning");
                return;
              }
              // Sign in with email and pass.
              // [START authwithemail]
              firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode === 'auth/wrong-password') {
                    swal("Wrong Password", "warning");
                } else {
                  alert(errorMessage);
                }
                console.log(error);
                document.getElementById('quickstart-sign-in').disabled = false;
                // [END_EXCLUDE]
              });
              // [END authwithemail]
            }
            document.getElementById('quickstart-sign-in').disabled = true;
          }
      
          /**
           * Handles the sign up button press.
           */
          function handleSignUp() {
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            if (email.length < 4) {
                swal("Enter in an email !", "warning");
              return;
            }
            if (password.length < 4) {
                swal("Enter in a password !", "warning");
              return;
            }
            // Create user with email and pass.
            // [START createwithemail]
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // [START_EXCLUDE]
              if (errorCode == 'auth/weak-password') {
                swal('Password is too weak', "warning");
              } else {
                alert(errorMessage);
              }
              console.log(error);
              // [END_EXCLUDE]
            });
            // [END createwithemail]
          }
      
          /**
           * Sends an email verification to the user.
           */
          function sendEmailVerification() {
            // [START sendemailverification]
            firebase.auth().currentUser.sendEmailVerification().then(function() {
              // Email Verification sent!
              // [START_EXCLUDE]
              swal("Good",'Email Verification Sent', "info");
              // [END_EXCLUDE]
            });
            // [END sendemailverification]
          }
      
          function sendPasswordReset() {
            var email = document.getElementById('email').value;
            // [START sendpasswordemail]
            firebase.auth().sendPasswordResetEmail(email).then(function() {
              // Password Reset Email Sent!
              // [START_EXCLUDE]
              swal("Good",'Password reset Email Verification Sent', "info");
              // [END_EXCLUDE]
            }).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // [START_EXCLUDE]
              if (errorCode == 'auth/invalid-email') {
                alert(errorMessage);
              } else if (errorCode == 'auth/user-not-found') {
                alert(errorMessage);
              }
              console.log(error);
              // [END_EXCLUDE]
            });
            // [END sendpasswordemail];
          }
      
          /**
           * initApp handles setting up UI event listeners and registering Firebase auth listeners:
           *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
           *    out, and that is where we update the UI.
           */
          function initApp() {
            // Listening for auth state changes.
            // [START authstatelistener]
            firebase.auth().onAuthStateChanged(function(user) {
              // [START_EXCLUDE silent]
              document.getElementById('quickstart-verify-email').disabled = true;
              // [END_EXCLUDE]
              if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                // [START_EXCLUDE]
                document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
                document.getElementById('quickstart-sign-in').textContent = 'Sign out';
                if (!emailVerified) {
                  document.getElementById('quickstart-verify-email').disabled = false;
                }
                // [END_EXCLUDE]
              } else {
                // User is signed out.
                // [START_EXCLUDE]
                document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
                document.getElementById('quickstart-sign-in').textContent = 'Login';
                
                // [END_EXCLUDE]
              }
              // [START_EXCLUDE silent]
              document.getElementById('quickstart-sign-in').disabled = false;
              // [END_EXCLUDE]
            });
            // [END authstatelistener]
      
            document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
            document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
            document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
            document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
        
          }
      
      
            initApp();
          


    document.getElementById('button1').addEventListener('click', function(e){
        var task= document.getElementById('task').value;
        var description= document.getElementById('description').value;
        var name=document.getElementById('name').value;
      
        createTask(task,description,name);
        form.reset();
        e.preventDefault();
    });

    function createTask(taskName,description,nameValue){
        var task={
            task:taskName,
            description:description,
            name:nameValue
        }
        let db=firebase.firestore().collection('tasks/');
        db.add(task)
        .then(function(){
            swal('Good Job', 'task added', 'sucess')
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
                        <h4 class='card-title'> Name- ${taskValue.data().name}</h3>
                         <h6 class='card-title'>Task- ${taskValue.data().task}</h5>
                         <p class='card-text'>${taskValue.data().description}</p>
                          <button type='submit' style='color:white;' class='btn button2 m-2 ' onclick="updateTasks('${taskValue.id}','${taskValue.data().task}','${taskValue.data().description}')"><i class='fas fa-edit'></i> Edit Task  </button>
                   
                         <button type='submit' class='btn button2 m-2' onclick="deleteTask('${taskValue.id}')"><i class='fas fa-trash-alt'></i> Delete Task  </button>

                     </div>
                </div>
                
                `

      
            });
        });
   
    }


    
    function reset(){
        document.getElementById('firstSection').innerHTML=`
        <form class='border p-3 mb-3' id='form'>
            <div class="form-group ">
            <label>Name</label>
            <input type='text' id='name' class='form-control' placeholder="Name">
            </div>
        <div class="form-group">
            <label>Task</label>
            <input type='text' class='form-control' id='task' placeholder="Enter Task">
        </div>

        <div class="form-group">
            <label>Description</label>
            <input type='text' class='form-control' id='description' placeholder="Describe Task">
        </div>

        <button type='submit' id='button1' class='btn btn-secondary'> Add Task </button> 
        <button style='display:none;' type='submit' id='button2' class='btn button2'> <i class='fas fa-edit'></i>  Update </button> 
        <button style='display:none' type='submit' id='button3' class='btn button2'><i class='fas fa-trash-alt'></i>Delete </button> 

         </form>
        
        
        `;
        document.getElementById('button1').addEventListener('click', function(e){
            var name=document.getElementById('name').value;
            var task= document.getElementById('task').value;
            var description= document.getElementById('description').value;
          
            createTask(task,description,name);
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

        <button style='display:none;' type='submit' id='button1' class='btn btn-secondary'> Add Task </button> 
        <button style='display:inline-block;' type='submit' id='button2' class='btn button2'> <i class='fas fa-edit'></i>  Update </button> 
        <button style='display:inline-block' type='submit' id='button3' class='btn button2'><i class='fas fa-trash-alt'></i> Delete </button> 

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
            swal('Good Job!','Task Updated','sucess')
        })
        document.getElementById('cardSection').innerHTML='';
        readTask();
        reset();
    }


    function deleteTask(id){
        console.log(id)
        firebase.firestore().collection('tasks').doc(id).delete()
       
        .then(function(){
            swal(' Task Removed','danger')
        })
        reset();
        document.getElementById('cardSection').innerHTML='';
        readTask();
        
        
    }



