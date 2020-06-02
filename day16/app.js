// loader
var spinner= document.querySelector('.loader')
spinner.style.display="none";
// creating a function to fetch the api
function getCountryName(){
    spinner.style.display="block";
    fetch('https://restcountries.eu/rest/v2/all')
    .then(function(response){
        return response.json();
    })
    .then(function(values){
    spinner.style.display="none";
    //looping through the array 
    for(var i=0; i<250; i++){
        let html=' ';

        values.forEach(function(value){
            //appending each value in the html variable
          html +=` <div class="item">
          <img src ="${value.flag}" class='img-fluid mb-2'>
          <h4 class="heading2">${value.name}</h4>
        
               <li class='list'>Capital: ${value.capital}</li>
               <li class='list'>Region: ${value.region}</li>
               <li class='list'>language: ${value.languages[0].name}</li>
               
               
           
           <span class='badge badge-secondary  style='background-color:hsla(203.1, 100%, 75.1%, 0.98);'> Population: ${value.population} </span>
           <span class='badge badge-secondary' style='background-color:hsla(203.1, 100%, 75.1%, 0.98);' > Calling Codes: ${value.callingCodes[0]}</span>
           <span class='badge badge-secondary'  style='background-color:hsla(203.1, 100%, 75.1%, 0.98);'> currency:${value.currencies[0].symbol}</span>
         
      </div>`
            });

          //insert list items in grid
          document.querySelector('.grid').innerHTML=html;  
    }
    
        
    })
    .catch(function(err){
        console.log(err)
    })
}
// calling the function
getCountryName()

//getting the class for the search button
var filters=document.querySelector('.filter');
filters.addEventListener('keyup',filterProfiles)

// function to search for country
function filterProfiles(e){
    const text = e.target.value.toLowerCase();
  
  const  collection= document.querySelectorAll('.item');
  

   collection.forEach(function(profile){
        const item = profile.firstElementChild.nextElementSibling.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
          profile.style.display = 'block';
        } else {
          profile.style.display = 'none';
        }
      });

    e.preventDefault();
}
