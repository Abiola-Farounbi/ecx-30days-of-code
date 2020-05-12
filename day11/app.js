
const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://jsonplaceholder.typicode.com/users`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);


      const response1=response[0];
  document.getElementById('username1').innerHTML=`${response1.username}`
  document.getElementById('name1').innerHTML=`${response1.name}`
  document.getElementById('email1').innerHTML=`Email-${response1.email}`
  document.getElementById('city1').innerHTML=`City- ${response1.address.city}`
  document.getElementById('website1').innerHTML=`Website- ${response1.website}`
  const response2=response[1];
  document.getElementById('username2').innerHTML=`${response2.username}`
  document.getElementById('name2').innerHTML=`${response2.name}`
  document.getElementById('email2').innerHTML=`Email- ${response2.email}`
  document.getElementById('city2').innerHTML=`City- ${response2.address.city}`
  document.getElementById('website2').innerHTML=`Website- ${response2.website}`
  const response3=response[2];
  document.getElementById('username3').innerHTML=`${response3.username}`
  document.getElementById('name3').innerHTML=`${response3.name}`
  document.getElementById('email3').innerHTML=`Email- ${response3.email}`
  document.getElementById('city3').innerHTML=`City- ${response3.address.city}`
  document.getElementById('website3').innerHTML=`Website- ${response3.website}`
  const response4=response[3];
  document.getElementById('username4').innerHTML=`${response4.username}`
  document.getElementById('name4').innerHTML=`${response4.name}`
  document.getElementById('email4').innerHTML=`Email- ${response4.email}`
  document.getElementById('city4').innerHTML=`City- ${response4.address.city}`
  document.getElementById('website4').innerHTML=`Website- ${response4.website}`
  const response5=response[4];
  document.getElementById('username5').innerHTML=`${response5.username}`
  document.getElementById('name5').innerHTML=`${response5.name}`
  document.getElementById('email5').innerHTML=`Email- ${response5.email}`
  document.getElementById('city5').innerHTML=`City- ${response5.address.city}`
  document.getElementById('website5').innerHTML=`Website- ${response5.website}`
  const response6=response[5];
  document.getElementById('username6').innerHTML=`${response6.username}`
  document.getElementById('name6').innerHTML=`${response6.name}`
  document.getElementById('email6').innerHTML=`Email- ${response6.email}`
  document.getElementById('city6').innerHTML=`City- ${response6.address.city}`
  document.getElementById('website6').innerHTML=`Website- ${response6.website}`
  const response7=response[6];
  document.getElementById('username7').innerHTML=`${response7.username}`
  document.getElementById('name7').innerHTML=`${response7.name}`
  document.getElementById('email7').innerHTML=`Email- ${response7.email}`
  document.getElementById('city7').innerHTML=`City- ${response7.address.city}`
  document.getElementById('website7').innerHTML=`Website- ${response7.website}`
  const response8=response[7];
  document.getElementById('username8').innerHTML=`${response8.username}`
  document.getElementById('name8').innerHTML=`${response8.name}`
  document.getElementById('email8').innerHTML=`Email- ${response8.email}`
  document.getElementById('city8').innerHTML=`City- ${response8.address.city}`
  document.getElementById('website8').innerHTML=`Website- ${response8.website}`
  const response9=response[8];
  document.getElementById('username9').innerHTML=`${response9.username}`
  document.getElementById('name9').innerHTML=`${response9.name}`
  document.getElementById('email9').innerHTML=`Email- ${response9.email}`
  document.getElementById('city9').innerHTML=`City- ${response9.address.city}`
  document.getElementById('website9').innerHTML=`Website- ${response9.website}`
  const response10=response[9];
  document.getElementById('username10').innerHTML=`${response1.username}`
  document.getElementById('name10').innerHTML=`${response10.name}`
  document.getElementById('email10').innerHTML=`Email- ${response10.email}`
  document.getElementById('city10').innerHTML=`City- ${response10.address.city}`
  document.getElementById('website10').innerHTML=`Website- ${response10.website}`


     
    }
    else{
        console.log('Error gettig source')
    }
  }
  


  xhr.send();



  var filters=document.querySelector('.filter');
filters.addEventListener('keyup',filterProfiles)

function filterProfiles(e){
    const text = e.target.value.toLowerCase();
  
  const  collection= document.querySelectorAll('.collection');
  

   collection.forEach(function(profile){
        const item = profile.firstElementChild.nextElementSibling.firstChild.nextElementSibling.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
          profile.style.display = 'block';
        } else {
          profile.style.display = 'none';
        }
      });

    e.preventDefault();
}
