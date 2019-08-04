var city = '';

function initMap(lat, lng) {
    
    var latlng = new google.maps.LatLng(lat, lng);

    var geocoder = new google.maps.Geocoder;
    geocoder.geocode({ 'location': latlng }, function (results, status) {

        test("Status should be OK", function (assert) {
            assert.equal(status, 'OK');
        });

        if (status === 'OK') {
            for (i = 0; i < results.length; i++)
                if (results[i].address_components[0].types[0] === 'administrative_area_level_1')
                    city = results[i].address_components[0].long_name;
        }
    });

    return city;
}

city = initMap(40, 32);

test("This should return Ankara", function (assert) {
    assert.equal(city, 'Ankara');
});