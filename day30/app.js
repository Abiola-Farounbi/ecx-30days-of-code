var spinner=  document.getElementById('loader');
spinner.style.display='none';



//  document.getElementById('searchForState').addEventListener('click', searchForState)
 
 function searchForState(statePicked){
	
	// let searchValue=document.getElementById('searchInput').value;
	// //converting string to lower case
	// searchValue=searchValue.toLowerCase()





	
		spinner.style.display='block';
	
		var requsetOptions={
			method:'GET',
			redirect:'follow'
		};
	//fetches for the cases in Nigeria
	fetch('https://covidnigeria.herokuapp.com/api', requsetOptions)
	.then(response => response.json())
	.then(function(result){
		spinner.style.display='none';
		let resultValue=result.data.states;
	
		var count=0;	
		 
		if(true){
	
		resultValue.forEach(state => {
			
			let display='';
			var theState=state.state;
			theState=theState.toLowerCase()
			
			
			
			if(theState == statePicked){
			
				count++

				
				display +=`
				<div class='globalDiv'>
                   
                <div>
                  <div class="card-body">
                     <span class='Cases'> Total Cases</span>
                </div>
                <div class="card-body">
                  <span id='totalCases3' class='casesBody'>${state.confirmedCases}</span>
             </div>
                </div>
                <div>
                  <div class="card-body">
                     <span class='Cases'>Total Recovered</span>
                </div>
                <div class="card-body">
                  <span id='totalRecovered3' class='casesBody'>${state.discharged}</span>
             </div>
                </div>
                <div>
                  <div class="card-body">
                     <span class='Cases'>Total Deaths</span>
                </div>
                <div class="card-body">
                  <span id='totalDeaths3' class='casesBody'>${state.death}</span>
             </div>
                </div>
              
			   </div>
			   `
			   document.querySelector('.output').innerHTML=display
			}
			
		});
	}
	 if(count == 0  ) {
		document.querySelector('.error').innerHTML=' State Not Found !!!'
	}
	
	});	
	}




 

var requsetOptions={
	method:'GET',
	redirect:'follow'
};

//fetches for the cases in Nigeria
fetch('https://covidnigeria.herokuapp.com/api', requsetOptions)
.then(response => response.json())
.then(function(result){
	let resultValue=result.data;
	document.getElementById('totalCases2').innerHTML=resultValue.totalConfirmedCases
	document.getElementById('totalRecovered2').innerHTML=resultValue.discharged
	document.getElementById('totalDeaths2').innerHTML=resultValue.death
	
      
});







var requsetOptions={
	method:'GET',
	redirect:'follow'
};

//fetches for the cases in the world
fetch('https://api.covid19api.com/summary', requsetOptions)
.then(response => response.json())
.then(function(result){

	let resultValue=result;
	
	document.getElementById('totalCases').innerHTML=resultValue.Global. TotalConfirmed
	document.getElementById('totalRecovered').innerHTML=resultValue.Global. TotalRecovered
	document.getElementById('totalDeaths').innerHTML=resultValue.Global. TotalDeaths
	
	
	
	
})




.catch(function(){
    document.getElementById('totalCases').innerHTML='Loading...'
	document.getElementById('totalRecovered').innerHTML='Loading...'
	document.getElementById('totalDeaths').innerHTML='Loading...'
	
});
