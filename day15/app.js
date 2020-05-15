// calling the github class
const github=new Github;
//calling the ui class
const ui=new UI;

// adding an event listner to the search bar

searchUser=document.getElementById('searchUser')
searchUser.addEventListener("keyup", (e)=> {
const userText=e.target.value;
//checking if the input is empty
  if (userText != ""){
      github.getUser(userText)
      .then(data => {
        //checking if the user exists
        if (data.profile.message==='Not Found'){
           ui.showAlert("User not found", 'alert alert-danger')
        } 
        //showing the profile  
        else{
             ui.showProfile(data.profile);
            //  ui.showRepos(data.repos);
        }        
      })
  }
  else{
     ui.clearProfile();
  }

})

