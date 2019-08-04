function dist(latitude, longitude) {
    earthCenter = new google.maps.LatLng(0, 0);
    curCoords = new google.maps.LatLng(latitude, longitude);

    distance = google.maps.geometry.spherical.computeDistanceBetween(earthCenter, curCoords) / 1000;
    return distance;
}

function distGPS() {
    navigator.geolocation.getCurrentPosition(success, error, options);
}

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;
    var distance = 0;

    var curCoords = new google.maps.LatLng(crd.latitude, crd.longitude);
    var earthCenter = new google.maps.LatLng(0, 0);

    distance = google.maps.geometry.spherical.computeDistanceBetween(earthCenter, curCoords);
    distance = distance.toPrecision(3);
    distance /= 1000;

    test("From Bilka, Study Room #2, It should return 5540", function (assert) {
        assert.equal(distance, 5540);
    });
};

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

test("For (0, 0) it should return 0", function (assert) {
    assert.equal(dist(0, 0), 0);
});

distGPS();