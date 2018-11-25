for (var i = 0; i < 20; i++)
    for (var j = 0; j < 20; j++) {
        var myCircle = new Path.Circle(new Point(i * 100 + 50, j * 100  + 50), 20);
        myCircle.fillColor = "pink";
    }