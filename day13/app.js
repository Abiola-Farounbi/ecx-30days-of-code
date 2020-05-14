//  fetching data from api using fetch

function getJokes(){
    fetch('https://sv443.net/jokeapi/v2/joke/Any/')
    .then(function(response){
        return response.json();
    })
    .then(function(jokes){
        // displaying the data fetched 
        var category=jokes.category
        document.querySelector('.category').innerHTML=`Category ~ ${category}`;
        var setup=jokes.setup
        document.querySelector('.setup').innerHTML=`'${setup}'`;
        var delivery=jokes.delivery
     document.querySelector('.delivery').innerHTML=` : ${delivery}`
    
        
    })
    .catch(function(err){
        console.log(err)
    })
    
    
}

getJokes()
// set the interval to 20secs 
setInterval(getJokes,20000)




