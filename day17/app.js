// loader
var spinner= document.querySelector('.loader')
spinner.style.display="none";
//button to search the for the lyrics
var searchButton=document.querySelector('.searchBtn');
searchButton.addEventListener('click',getLyrics)

// creating a function to fetch the api
function getLyrics(){
    spinner.style.display="block";
   var lyric=document.querySelector('.searchLyrics').value
   //search for lyrics
    fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${lyric}&page_size=10&page=1&s_track_rating=desc&apikey=c49f4264dfb706cfdf1a348d4d3c6dbf`)
    .then(function(response){

        return response.json();
    })
    .then(function(values){
        spinner.style.display="none";
     let trackId=values.message.body.track_list;
   
    
  
     var trackIdLength=trackId.length;
     let html=' ';
     for(let i=0 ; i<trackIdLength ;  i++){
    
     var  trackIds=trackId[i].track.track_id;
     var  name=trackId[i].track.track_name;
     
   
     //getting the lyrics
     fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackIds}&apikey=c49f4264dfb706cfdf1a348d4d3c6dbf`)
    .then(function(results){
        return results.json();
    })
    .then(function(result){
      var final=result.message.body.lyrics;
  
      html +=`
      <div>
      <li class='song-title'> Song:${trackId[i].track.track_name} --- By ${trackId[i].track.artist_name}</li>
      <li class='song-body'><i class=fas fa-music></i>Lyrics- ${final.lyrics_body}<span class='song-link'> <a style='text-decoration:none;'href= 'https://www.musixmatch.com/lyrics/${trackId[i].track.artist_name}/${trackId[i].track.track_name}'  target="_blank"> Full Lyrics</a></span></li>
      <img src='${final.pixel_tracking_url}'>
      <li class='song-copy'>${final.lyrics_copyright}</li>
      </div>`


         //insert list items in div
  document.querySelector('.flex').innerHTML=html;  

    
        });
      

     
  }

  

    })
  
    .catch(function(err){
        console.log(error)
      document.querySelector('.error').innerHTML='Error Fetching Source'
    })


    
}
