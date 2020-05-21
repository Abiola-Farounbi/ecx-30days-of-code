
    function initMap(){
       var options={
           zoom:7,
           // dark mode for map 
           styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ],

           center:{lat:8.6753, lng:9.0820 }
       }
       // for new map
       var map=new google.maps.Map(document.getElementById('map'),options);

       ////add marker 
       var marker= new  google.maps.Marker({
            position:{ lat: 3.3792, lng:6.5244},
            map:map,

       });

     var infoWindow=new google.maps.InfoWindow({
         content:'<h3>Lagos<h3><i>Commercial Capital </i>'
        })
        marker.addListener('click', function(){
              infoWindow.open(map,marker)
        });


         ////add marker 
       var marker1= new  google.maps.Marker({
         position:{ lat: 7.3986, lng:9.0765},
         map:map,

    });

  var infoWindow1=new google.maps.InfoWindow({
      content:'<h3>Abuja<h3><i>Nations Capital </i>'
     })
     marker1.addListener('click', function(){
           infoWindow1.open(map,marker)
     });
    }
