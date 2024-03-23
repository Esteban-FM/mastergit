var markers = [
    {
        "title": 'Qué pescados! Mariscos market chihuahua', 
        "lat": '28.63035296253828',
        "lng": '-106.06978425037694', 
        "description": '<h3>Que pescados!</h3>'+'C. 4a 2417, Bolívar, Zona Centro, 31000 Chihuahua, Chih.'+'<img src="http://quepescados.com/fachada.png" width="250" height="220"'
},
    {
        "title": 'Qué pescados! Suc. San Francisco', 
        "lat": '28.66580575910996',
        "lng": '-106.1304260979513', 
        "description": '<h3>Que pescados!</h3>'+'Av Francisco Villa, Jardines de San Francisco, 31115 Chihuahua, Chih. Teléfono: 6145982559'+'<img src="http://quepescados.com/fachada2.png" width="250" height="220"'
},
    
];
window.onload = function () {
    LoadMap();
}
function LoadMap() {
    var mapOptions = {
        center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
        zoom: 13,
        minZoom:5,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
    

    //Create and open InfoWindow.
    var infoWindow = new google.maps.InfoWindow();

    for (var i = 0; i < markers.length; i++) {
        var data = markers[i];
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);
        var image = 'http://www.quepescados.com/pescados_marker.png';
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: image,
            title: data.title
        });

        //Attach click event to the marker.
        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                infoWindow.setContent("<div style = 'width:250px;min-height:200px;font-size:15px;'>" + data.description + "</div>");
                infoWindow.open(map, marker);
            });
        })(marker, data);
    }
}
