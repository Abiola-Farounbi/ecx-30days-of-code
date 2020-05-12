const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new Ui();


document.addEventListener('DOMContentLoaded', getWeather);


document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  weather.changeLocation(city, state);

  storage.setLocationData(city, state);


  getWeather();
  $('#locModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
    .then(results => {

      ui.paint(results);
    })
    .catch(err => console.log(err));
}

     var date=new Date();
      var month=date.getMonth();
    var day=date.getDate();
    var year= date.getFullYear();
    var months=["January",'February',"March","April","May","June",'July', 'August','September','October',"November","December"];
    var month_1=months[month];
    document.querySelector('.time').innerHTML = `${day},   ${month_1}  ${year}`;


