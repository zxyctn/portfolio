var map, selected = 1;

textLat = 40.731, textLng = -73.997;

gpsBtn = document.getElementById("gps");
GPSFlag = false;

gpsBtn.addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(success, error, options);
});

function success(pos) {
    gpsBtn.innerHTML = "GPS: ON";
    gpsBtn.classList.remove("btn-danger");
    gpsBtn.classList.add("btn-success");

    var crd = pos.coords;
    GPSFlag = true;

    if (selected === 3) {
        initMap(crd.latitude, crd.longitude, 'map3');

        earthCenter = new google.maps.LatLng(0, 0);
        curCoords = new google.maps.LatLng(crd.latitude, crd.longitude);
        distance = google.maps.geometry.spherical.computeDistanceBetween(earthCenter, curCoords);
        distance = distance.toPrecision(3);
        distText = "Distance to Earth Center: "
        distText += distance / 1000;
        distText += ' KM';
        document.getElementById('distanceEarthCenter').innerHTML = distText;

    } else if (selected == 2) {
        initMap(crd.latitude, crd.longitude, 'map2');
        var curCoords = new google.maps.LatLng(crd.latitude, crd.longitude);
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ 'location': curCoords }, function (results, status) {
            var city = '', country = '';
            if (status === 'OK') {
                for (i = 0; i < results.length; i++) {
                    if (results[i].address_components[0].types[0] === 'administrative_area_level_1')
                        city = results[i].address_components[0].long_name;
                    else if (results[i].address_components[0].types[0] === 'country')
                        country = results[i].address_components[0].long_name;
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }

            geocoder.geocode({ 'address': city + ', ' + country }, function (results, status) {
                if (status === 'OK') {
                    distance = google.maps.geometry.spherical.computeDistanceBetween(curCoords, results[0].geometry.location) / 1000;
                    distance = distance.toPrecision(3);
                    distText = "Distance to City Center: "
                    distText += distance;
                    distText += ' KM';
                    document.getElementById('distanceCityCenter').innerHTML = distText;
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            })
        });
    }

    test("Test case 1: GPS is ON", function (assert) {
        assert.equal(GPSFlag, true);
    });
};

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
function error(err) {
    alert("GPS location cannot be retireved.");
    console.warn(`ERROR(${err.code}): ${err.message}`);

    test("Test case 2: GPS is OFF", function (assert) {
        assert.equal(GPSFlag, false);
    });
}

var latitude = '', longitude = '';

document.getElementById('csubmit').addEventListener("click", function () {
    latitude = '', longitude = '';
    var coords = document.getElementById('coordinates').value;

    for (i = 0; i < coords.length; i++)
        if (coords[i] !== ' ')
            latitude += coords[i];
        else {
            space = i;
            break;
        }

    for (i = space + 1; i < coords.length; i++)
        longitude += coords[i];

    latitude = parseFloat(latitude);
    longitude = parseFloat(longitude);

    textLat = latitude;
    textLng = longitude;

    if (selected === 1) {
        initMap(latitude, longitude, 'map');


    } else if (selected === 3) {
        initMap(latitude, longitude, 'map3');

        earthCenter = new google.maps.LatLng(0, 0);
        curCoords = new google.maps.LatLng(latitude, longitude);
        distance = google.maps.geometry.spherical.computeDistanceBetween(earthCenter, curCoords);
        distance = distance.toPrecision(3);
        distText = "Distance to Earth Center: "
        distText += distance / 1000;
        distText += ' KM';
        document.getElementById('distanceEarthCenter').innerHTML = distText;
    }
});

function initMap(lat, lng, mapID) {
    map = new google.maps.Map(document.getElementById(mapID), {
        center: { lat: lat, lng: lng },
        zoom: 8
    });

    var latlng = new google.maps.LatLng(lat, lng);

    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });

    if (mapID == 'map') {
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            var city = '';
            if (status === 'OK') {
                for (i = 0; i < results.length; i++)
                    if (results[i].address_components[0].types[0] === 'administrative_area_level_1')
                        city = results[i].address_components[0].long_name;
            }
            document.getElementById('city').innerHTML = "Your City: " + city;
        });
    }
}

document.getElementById('opt2').addEventListener("click", function () {
    if (gpsBtn.classList.contains('btn-success')) {
        gpsBtn.innerHTML = "GPS: OFF";
        gpsBtn.classList.remove("btn-success");
        gpsBtn.classList.add("btn-danger");
    }
    gpsBtn.classList.remove('disabled');
    document.getElementById('csubmit').classList.add("disabled");
    selected = 2;
});

document.getElementById('opt1').addEventListener("click", function () {
    if (!gpsBtn.classList.contains('disabled'))
        gpsBtn.classList.add('disabled');
    if (gpsBtn.classList.contains('btn-success')) {
        gpsBtn.innerHTML = "GPS: OFF";
        gpsBtn.classList.remove("btn-success");
        gpsBtn.classList.add("btn-danger");
    }
    document.getElementById('csubmit').classList.remove("disabled");
    selected = 1;
});

document.getElementById('opt3').addEventListener("click", function () {
    gpsBtn.innerHTML = "GPS: OFF";
    gpsBtn.classList.remove("btn-success");
    gpsBtn.classList.add("btn-danger");

    gpsBtn.classList.remove('disabled');
    document.getElementById('csubmit').classList.remove("disabled");

    selected = 3;
});

initMap(40.731, -73.997, 'map');