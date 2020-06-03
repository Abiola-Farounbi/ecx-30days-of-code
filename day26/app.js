document.querySelector('.loaderContent').style.display='none';

// preloader
var loaders;
function loader(){
    loaders=setTimeout(showPage,3000)
}
function showPage(){
    document.querySelector('.loading').style.display='none';
    document.querySelector('.loaderContent').style.display='block';
    document.querySelector('.bodyBackground').classList.add('background');
  
}

var firebaseConfig = {
    apiKey: "AIzaSyDpU6B82WC6_TlzL_6WXxZXEYqnoVO2Anc",
    authDomain: "post-fc173.firebaseapp.com",
    databaseURL: "https://post-fc173.firebaseio.com",
    projectId: "post-fc173",
    storageBucket: "post-fc173.appspot.com",
    messagingSenderId: "152136745387",
    appId: "1:152136745387:web:adccd3f5421fe1113592ee",
    measurementId: "G-TNNMHGYDYW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  

  // [START buttoncallback]
  function toggleSignInGoogle() {
    if (!firebase.auth().currentUser) {
      // [START createprovider]
      var provider = new firebase.auth.GoogleAuthProvider();
      // [END createprovider]
      // [START addscopes]
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      // [END addscopes]
      // [START signin]
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // [START_EXCLUDE]
        document.getElementById('quickstart-oauthtoken').textContent = token;
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // [START_EXCLUDE]
        if (errorCode === 'auth/account-exists-with-different-credential') {
          swal('You have already signed up with a different auth provider for that email.');
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        } else {
          console.error(error);
        }
        // [END_EXCLUDE]
      });
      // [END signin]
    } else {
      // [START signout]
      firebase.auth().signOut();
      // [END signout]
    }
    // [START_EXCLUDE]
    document.getElementById('quickstart-sign-in2').disabled = true;
    // [END_EXCLUDE]
  }






          /**
         * Handles the sign in button press. */
        function toggleSignIn(e) {
          if (firebase.auth().currentUser) {
            firebase.auth().signOut();
          } 
          else { 
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            if (email.length < 4) {
              swal("Enter in an email ");
              return;
            }
            if (password.length < 4) {
              swal("Enter in a password !");
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
          e.preventDefault();
        }
    
        /**
         * Handles the sign up button press.
         */
        function handleSignUp(e) {
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          if (email.length < 4) {
              swal("Enter in an email !");
            return;
          }
          if (password.length < 4) {
              swal("Enter in a password !");
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
          e.preventDefault();
        }
    
        /**
         * Sends an email verification to the user.
         */
        function sendEmailVerification() {
          // [START sendemailverification]
          firebase.auth().currentUser.sendEmailVerification().then(function() {
            // Email Verification sent!
            // [START_EXCLUDE]
            swal("Good",'Email Verification Sent');
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
            swal("Good",'Password reset Email Verification Sent');
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
              console.log(displayName)
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              // [START_EXCLUDE]
              var  names=document.querySelector('.identity').value;
     
              document.querySelector('.named').innerHTML=`Hi ,${names}`
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
    
    
        initApp()


        document.getElementById('addPostBtn').addEventListener('click', function(e){
          var title= document.getElementById('title').value;
          var message= document.getElementById('message').value;
          var author=document.getElementById('author').value;
        
          createPost(title,message,author);
          form.reset();
          e.preventDefault();
      }); 

        function createPost(name,description,creator){
          var article={
              title:name,
              description:description,
              author:creator
          }
          let db=firebase.firestore().collection('articles/');
          db.add(article)
          .then(function(){
              swal('Good Job', 'task added', 'sucess')
              document.getElementById('cardSection').innerHTML=' ';
              readPost();
          })
          
      }
      var count=0;
      function likeIt(x){
        x.classList.add('red')
        // count++
        // document.querySelector('.counts').innerHTML=`${count} Likes`
      }

      function readPost(){
        
        
        firebase.firestore().collection('articles').onSnapshot(function(snapshot){
            document.getElementById('cardSection').innerHTML=' ';
            snapshot.forEach(function(post){
                document.getElementById('cardSection').innerHTML+=`
                <div class="card m-4 p-3 shadow " >
                <span> <i onclick='likeIt(this)'  class="fas fa-heart ml-4" > </i><b class='counts'></b>  <span>
                <div class='author'>${post.data().author}</div>
              
                <div class="card-title">${post.data().title}</div>
                <div class="card-body">${post.data().description}</div>
               </div>
          
                `

      
            });
        });
   
    }
    readPost()

    function reset(){
       document.getElementById('firstSection').innerHTML=`
       <form id="form">
       <div class="form-group m-2 p-1">
           <label for="namse"><i class="fas fa-user"></i></label>
           <input type="text" name="name" id="title" class='form-control identity width' placeholder="Title">
       </div> 
       <div class="form-group m-2 p-1 ">
           <label><i class='fas fa-envelope'></i></label>
           <textarea name="text" id='message' class='form-control identity width' maxlength="200" cols="30" rows="10"> My Fisrt Post </textarea>
       </div>
       <div class="form-group m-2 p-1">
           <label for="namse"><i class="fas fa-user"></i></label>
           <input type="text" name="name" id="author" class='form-control identity width' placeholder="Created By">
       </div> 
 
         <button id='addPostBtn'   class='btn btn-secondary button1  m-3' > Post </button> 
       </form>
        
        
        `;
        
        document.getElementById('addPostBtn').addEventListener('click', function(e){
          var title= document.getElementById('title').value;
          var message= document.getElementById('message').value;
          var author=document.getElementById('author').value;
        
          createPost(title,message,author);
          form.reset();
          e.preventDefault();
      }); 
    }
       

