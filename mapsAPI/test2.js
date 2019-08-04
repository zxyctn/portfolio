GPSFlag = false;

navigator.geolocation.getCurrentPosition(success, error, options);

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;
    GPSFlag = true;
    var distance = 0;

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
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }

            test("In Bilka, Study Room #2, It should Return 11.5 KM", function (assert) {
                assert.equal(distance, 11.5);
            });
        });
    });

    test("GPS should be turned on", function (assert) {
        assert.equal(GPSFlag, true);
    });
};

function error(err) {
    alert("GPS location cannot be retireved.");
    console.warn(`ERROR(${err.code}): ${err.message}`);

    test("GPS should be turned off", function (assert) {
        assert.equal(GPSFlag, false);
    });
}