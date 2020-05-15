class UI{
    constructor(){
        this.profile=document.getElementById('profile');
    }
    showProfile(user){
        this.profile.innerHTML=` 
        <div class='card card-body mb-3' >
           <div class='row'>
             <div class='col-md-3'>
                <img class='img-fluid mb-2' src='${user.avatar_url}">
               <span class='badge badge-secondary'> <a href='${user.html_url}' target='_blank'>View Profile</a></span>
             </div>
             <div class='col-md-9'>
             <span class='badge badge-primary'> Public Repos: ${user.public_repos} </span>
             <span class='badge badge-secondary'> Public Gists: ${user.public_gists} </span>
             <span class='badge badge-success'> Followers: ${user.followers} </span>
             <span class='badge badge-warning'> Following: ${user.following} </span>
             <br><br>
             <ul class="list-group">
                 <li class="list-group-item">Website:${user.blog}</li>
                 <li class="list-group-item">Location:${user.location}</li>
                 <li class="list-group-item">Joined:${user.created_at}</li>
             </ul>
             </div>
         </div>
        </div>
        `;
    }

    showAlert(message,className){
        this.clearAlert();
         const div = document.createElement('div');
         div.className=className;
         div.appendChild(document.createTextNode(message));
         const container=document.querySelector('.searchContainer');
         const search=document.querySelector('.search');
         container.insertBefore(div,search);

         setTimeout( () => {
             this.clearAlert();
         },3000);    
        }
    clearAlert(){
        const currentAlert=document.querySelector('.alert');
        if (currentAlert){
            currentAlert.remove();
        }

   }
    clearProfile(){
        this.profile.innerHTML=" ";
    }
}