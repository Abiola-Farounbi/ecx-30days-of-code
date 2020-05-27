//button to search the for the news by category

var search1=document.querySelector('.business');
search1.addEventListener('click',getBusiness)

var search2=document.querySelector('.entertainment');
search2.addEventListener('click',getEntertainment)

var search3=document.querySelector('.general');
search3.addEventListener('click',getGeneral)

var search4=document.querySelector('.health');
search4.addEventListener('click',getHealth)

var search5=document.querySelector('.science');
search5.addEventListener('click',getScience)

var search6=document.querySelector('.sport');
search6.addEventListener('click',getSport)

var search7=document.querySelector('.technology');
search7.addEventListener('click',getTechnology)


function getBusiness(){
     //search for business news
     fetch(`http://newsapi.org/v2/top-headlines?country=ng&category=business&pageSize=20&apiKey=2ef1ed45b44142f8961be51bbe656703`)
     .then(function(response){
         return response.json();
     })
     .then(function(values){
             var article=values.articles
         let output1=''
         document.querySelector('.display3').innerHTML=`Business News `
           for(var i=0; i<article.length; i++){
             console.log(article[i].url)
              output1+=`  
              <div class='grid'>
              <div><img  class='image' src='${article[i].urlToImage}' alt='Image not available' ></div>   
               <div class='body'>
               <span><a style='color:black; text-decoration:none; font-weight:bold;' target='_blank'href='${article[i].url}' >${article[i].title}</a></span>
               <p>
               ${article[i].description}
               <span style='float:right; font-size:10px; font-style:italic; '>Published -${article[i].publishedAt}</span>
               </p>
               </div>     
           </div>`
 
              document.querySelector('.display2').innerHTML=output1;
           }
     })
   
     .catch(function(err){
         console.log(err)
     })
     
 }

 function getEntertainment(){

    //search for entertainment news
    fetch(`https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&pageSize=20&apiKey=2ef1ed45b44142f8961be51bbe656703`)
    .then(function(response){
        return response.json();
    })
    .then(function(values){
            var article=values.articles
        let output1=''
        document.querySelector('.display3').innerHTML=`Entertainment News `
          for(var i=0; i<article.length; i++){
            console.log(article[i].url)
             output1+=`  
             <div class='grid'>
           <div><img  class='image' src='${article[i].urlToImage}' alt='Image not available' ></div>   
            <div class='body'>
            <span><a style='color:black; text-decoration:none; font-weight:bold;'target='_blank'href='${article[i].url}' >${article[i].title}</a></span>
            <p>
            ${article[i].description}
            <span style='float:right; font-size:10px; font-style:italic; '>Published -${article[i].publishedAt}</span>
            </p>
            </div>     
        </div>`

             document.querySelector('.display2').innerHTML=output1;
          }
    })
  
    .catch(function(err){
        console.log(err)
    }) 
}

function getSport(){
    //search for sport news
    fetch(`https://newsapi.org/v2/top-headlines?country=ng&category=sport&pageSize=20&apiKey=2ef1ed45b44142f8961be51bbe656703`)
    .then(function(response){
        return response.json();
    })
    .then(function(values){
            var article=values.articles
        let output1=''
        document.querySelector('.display3').innerHTML=`Sport News `
          for(var i=0; i<article.length; i++){
            console.log(article[i].url)
             output1+=`  
             <div class='grid'>
           <div><img  class='image' src='${article[i].urlToImage}' alt='Image not available' ></div>   
            <div class='body'>
            <span><a style='color:black; text-decoration:none; font-weight:bold;' target='_blank' href='${article[i].url}' >${article[i].title}</a></span>
            <p>
            ${article[i].description}
            <span style='float:right; font-size:10px; font-style:italic; '>Published -${article[i].publishedAt}</span>
            </p>
            </div>     
        </div>`

             document.querySelector('.display2').innerHTML=output1;
          }
    })
  
    .catch(function(err){
        console.log(err)
    }) 
     
}

function getGeneral(){

      //search for general news
    fetch(`https://newsapi.org/v2/top-headlines?country=ng&category=general&pageSize=20&apiKey=2ef1ed45b44142f8961be51bbe656703`)
    .then(function(response){
        return response.json();
    })
    .then(function(values){
            var article=values.articles
        let output1=''
        document.querySelector('.display3').innerHTML=`General News `
          for(var i=0; i<article.length; i++){
            console.log(article[i].url)
             output1+=`  
             <div class='grid'>
           <div><img  class='image' src='${article[i].urlToImage}' alt='Image not available' ></div>   
            <div class='body'>
            <span><a style='color:black; text-decoration:none; font-weight:bold;' target='_blank' href='${article[i].url}' >${article[i].title}</a></span>
            <p>
            ${article[i].description}
            <span style='float:right; font-size:10px; font-style:italic; '>Published -${article[i].publishedAt}</span>
            </p>
            </div>     
        </div>`

             document.querySelector('.display2').innerHTML=output1;
          }
    })
  
    .catch(function(err){
        console.log(err)
    }) 
}

function getTechnology(){

      //search for technology news
    fetch(`https://newsapi.org/v2/top-headlines?country=ng&category=technology&pageSize=20&apiKey=2ef1ed45b44142f8961be51bbe656703`)
    .then(function(response){
        return response.json();
    })
    .then(function(values){
            var article=values.articles
        let output1=''
        document.querySelector('.display3').innerHTML=`Technology News `
          for(var i=0; i<article.length; i++){
            console.log(article[i].url)
             output1+=`  
             <div class='grid'>
           <div><img  class='image' src='${article[i].urlToImage}' alt='Image not available' ></div>   
            <div class='body'>
            <span><a style='color:black; text-decoration:none; font-weight:bold;' target='_blank' href='${article[i].url}' >${article[i].title}</a></span>
            <p>
            ${article[i].description}
            <span style='float:right; font-size:10px; font-style:italic; '>Published -${article[i].publishedAt}</span>
            </p>
            </div>     
        </div>`

             document.querySelector('.display2').innerHTML=output1;
          }
    })
  
    .catch(function(err){
        console.log(err)
    }) 
}

function getScience(){

   //search for science news
   fetch(`https://newsapi.org/v2/top-headlines?country=ng&category=science&pageSize=20&apiKey=2ef1ed45b44142f8961be51bbe656703`)
   .then(function(response){
       return response.json();
   })
   .then(function(values){
           var article=values.articles
       let output1=''
       document.querySelector('.display3').innerHTML=`Science News `
         for(var i=0; i<article.length; i++){
           console.log(article[i].url)
            output1+=`  
            <div class='grid'>
          <div><img  class='image' src='${article[i].urlToImage}' alt='Image not available' ></div>   
           <div class='body'>
           <span><a style='color:black; text-decoration:none; font-weight:bold;' target='_blank' href='${article[i].url}' >${article[i].title}</a></span>
           <p>
           ${article[i].description}
           <span style='float:right; font-size:10px; font-style:italic; '>Published -${article[i].publishedAt}</span>
           </p>
           </div>     
       </div>`

            document.querySelector('.display2').innerHTML=output1;
         }
   })
 
   .catch(function(err){
       console.log(err)
   })    
}

function getHealth(){

      //search for health news
    fetch(`https://newsapi.org/v2/top-headlines?country=ng&category=health&pageSize=20&apiKey=2ef1ed45b44142f8961be51bbe656703`)
    .then(function(response){
        return response.json();
    })
    .then(function(values){
            var article=values.articles
        let output1=''
        document.querySelector('.display3').innerHTML=`Health News `
          for(var i=0; i<article.length; i++){
            console.log(article[i].url)
             output1+=`  
             <div class='grid'>
           <div><img  class='image' src='${article[i].urlToImage}' alt='Image not available' ></div>   
            <div class='body'>
            <span><a style='color:black; text-decoration:none; font-weight:bold;' target='_blank' href='${article[i].url}' >${article[i].title}</a></span>
            <p>
            ${article[i].description}
            <span style='float:right; font-size:10px; font-style:italic; '>Published -${article[i].publishedAt}</span>
            </p>
            </div>     
        </div>`

             document.querySelector('.display2').innerHTML=output1;
          }
    })
  
    .catch(function(err){
        console.log(err)
    }) 
}


// creating a function to fetch the api
function getLatestNews(){

   //searchntry=ng&pa for random news
    fetch(`https://newsapi.org/v2/top-headlines?country=ng&pageSize=15&apiKey=2ef1ed45b44142f8961be51bbe656703`)
    .then(function(response){
        return response.json();
    })
    .then(function(values){
            var article=values.articles
        let output1=''
          for(var i=0; i<article.length; i++){
             output1+=`  
             <li><a style='color:black; text-decoration:none; font-weight:bold;' target='_blank' href='${article[i].url}' >${article[i].title}</a>
                <p style='margin-left:10px; '>${article[i].description}     <span style='float:right; font-size:10px; '>Published -${article[i].publishedAt}</span></p>
             
             </li>`

             document.querySelector('.list').innerHTML=output1;
          }
    })
  
    .catch(function(err){
        console.log(err)
    })


    
}
getLatestNews()
