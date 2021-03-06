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


  

const btnLogin=document.getElementById('loginBtn');
const btnLogOut=document.getElementById('logoutBtn');
btnLogOut.style.display='none';
btnLogin.addEventListener('click', e=> {
  firebase.auth().signInAnonymously()

})
btnLogOut.addEventListener('click', e=> {
  firebase.auth().signOut();

})
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser ){
  
    btnLogin.style.display='none';
    btnLogOut.style.display='block';
  }
  else{
    btnLogin.style.display='block';
    btnLogOut.style.display='none';
  }
})


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
              swal('Saved🥳')
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
       

