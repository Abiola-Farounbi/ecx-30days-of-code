//button to search the by categories
 var trending=document.querySelector('.one');
trending.addEventListener('click',getTrending)

var popular=document.querySelector('.two');
popular.addEventListener('click',getPopular)

var rated=document.querySelector('.three');
rated.addEventListener('click',getRated)

document.querySelector('#searchBtn').addEventListener('click', getSearch)




getShow()


function getShow(){
    

    // var lyric=document.querySelector('.searchLyrics').value
     //search for lyrics
      fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=23d3e5b3f085a72f85a21217806d544d`)
      .then(function(response){
         return response.json()
      })
      .then(function(values){
         let output1=values.results
          let html=' ';
           for(let i=0 ; i<3 ;  i++){
             let output2=output1[i].poster_path;
            
             
              html +=`
             
              
              <div >
              <img class='image2' src='https://images.tmdb.org/t/p/original${output2}'>
              
            </div>
            
          
              `
              
              
               //insert list items in div
           document.querySelector('.grid2').innerHTML=html;  
              
  
  
  
           }
  
  
  
    
  
      })
    
      .catch(function(err){
          console.log(err)
      })
  
  

}  
function getSearch(){
    
var searchValue=document.querySelector('.search').value;

   fetch(`https://api.themoviedb.org/3/search/movie?api_key=23d3e5b3f085a72f85a21217806d544d&query=${searchValue}`)
   .then(function(response){
      return response.json()
   })
   .then(function(values){
      
      let output1=values.results
    for(var i=0 ; i<output1.length; i++){
       let html=' ';
       let output2=output1[i].id
          fetch(`https://api.themoviedb.org/3/movie/${output2}?api_key=23d3e5b3f085a72f85a21217806d544d&language=en-US`)
           .then(function(response){
           return response.json()
        })
        .then(function(value){
      
            console.log(value.original_title)
            let output3=value.poster_path;
            let output4=value.original_title;
            let output5=value.overview;
            let output6=value.homepage
            let output7=value.vote_average;
            let output8=value.release_date;
            
         console.log(value) 
         
       
          
           html +=`
           <div class='display'>
           <img class='image3' src='https://images.tmdb.org/t/p/original${output3}'>
           
           <li class='i'><a style='color:white;'href='Name -${output6}' target='_blank'>${output4}</a></li>
           <li class='u'>${output5}</li>
           <li class='v'>Ratings ${output7}</li>
           <li class='v'>Released ${output8}</li>

           
           </div>
           
           `
      //insert list items in div
      document.querySelector('.container1').innerHTML=html;       
   
    })    

  
    } 
    

        



 

   })
 
   .catch(function(err){
       console.log(err)
   })

}






// creating a function to fetch the api
function getTrending(){

  // var lyric=document.querySelector('.searchLyrics').value
   //search for lyrics
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=23d3e5b3f085a72f85a21217806d544d`)
    .then(function(response){
       return response.json()
    })
    .then(function(values){
       let output1=values.results
        let html=' ';
         for(let i=0 ; i<8 ;  i++){
           let output2=output1[i].poster_path;
           let output5=output1[i].vote_average;
           let output6=output1[i].media_type
           let output3=output1[i].genre_ids[0]
           fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=23d3e5b3f085a72f85a21217806d544d&language=en-US`)
            .then(function(response){
            return response.json()
         })
         .then(function(value){
             
            output4=value.genres
         
          
         })
           
            html +=`
            <div><img class='image' src='https://images.tmdb.org/t/p/original${output2}'>
            
            <li>Rating: ${output5}</li>
            <li>Type: ${output6}</li>
            <li>${output4[i].name}</li>
            </div>
            `
            
            
             //insert list items in div
         document.querySelector('.grid').innerHTML=html;  
            



         }



  

    })
  
    .catch(function(err){
        console.log(err)
    })


    
}

function getPopular(){

    // var lyric=document.querySelector('.searchLyrics').value
     //search for lyrics
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=23d3e5b3f085a72f85a21217806d544d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(function(response){
         return response.json()
      })
      .then(function(values){
        let output1=values.results
         let html=' ';
          for(let i=0 ; i<8 ;  i++){
            let output2=output1[i].poster_path;
            let output5=output1[i].vote_average;
            let output6=output1[i].original_title
            let output3=output1[i].genre_ids[0]
            fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=23d3e5b3f085a72f85a21217806d544d&language=en-US`)
             .then(function(response){
             return response.json()
          })
          .then(function(value){
              
             output4=value.genres
          
           
          })
            
             html +=`
             <div><img class='image' src='https://images.tmdb.org/t/p/original${output2}'>
             
             <li>Rating: ${output5}</li>
             <li>Name: ${output6}</li>
             <li>${output4[i].name}</li>
             </div>
             `
             
             
              //insert list items in div
          document.querySelector('.grid').innerHTML=html;  
             
 
 
 
          }
 
 
 
   
 
     })
        .catch(function(err){
            console.log(err)
        })
    
  
}
function getRated(){

    // var lyric=document.querySelector('.searchLyrics').value
     //search for lyrics
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=23d3e5b3f085a72f85a21217806d544d&language=en-US&certification_country=US&certification=R&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1`)
      .then(function(response){
         return response.json()
      })
      .then(function(values){
        let output1=values.results
         let html=' ';
          for(let i=0 ; i<8 ;  i++){
            let output2=output1[i].poster_path;
            let output5=output1[i].vote_average;
            let output6=output1[i].original_title
            let output3=output1[i].genre_ids[0]
            fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=23d3e5b3f085a72f85a21217806d544d&language=en-US`)
             .then(function(response){
             return response.json()
          })
          .then(function(value){
              
             output4=value.genres
          
           
          })
            
             html +=`
             <div><img class='image' src='https://images.tmdb.org/t/p/original${output2}'>
             
             <li>Rating : ${output5}</li>
             <li>Name: ${output6}</li>
             <li>${output4[i].name}</li>
             </div>
             `
             
             
              //insert list items in div
          document.querySelector('.grid').innerHTML=html;  
             
 
 
 
          }
 
 
 
   
 
     })
  
        .catch(function(err){
            console.log(err)
        })
    
  
}


