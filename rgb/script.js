var colors = [];
var squares = document.querySelectorAll(".square");
var clr = document.querySelector("#clr");
var stat = document.querySelector("#message");
var h1 = document.querySelector("h1");
var rst = document.querySelector("#rst");
var ez = document.querySelector("#ez");
var pro = document.querySelector("#pro");
var key;
var n = 6;
var touch = document.querySelector("#touch");

touch.addEventListener("click", function() {
    window.history.back();
});

reset(n);

rst.addEventListener("click", function () {
    reset(n);
})

for (var i = 0; i < n; i++) {
    squares[i].addEventListener("click", function() {
       var color = this.style.backgroundColor;
       if (color === key) {
            h1.style.backgroundColor = key;
            stat.textContent = "Correct!";
            changeColors();
            rst.textContent = "Play Again?";
       }
       else {
           this.style.backgroundColor = "#232323";
           stat.textContent = "Try Again";
       }
    });
}

function changeColors() {
    for (var i = 0; i < n; i++)
        squares[i].style.backgroundColor = key;
}

function pick(n) {
    return colors[Math.floor(Math.random() * n)];
}

function rand(n) {
    var rands = [];
    for (var i = 0; i < n; i++) {
        var rnd = "rgb(";

        rnd += (Math.floor(Math.random() * 256));
        rnd += ', ';
        rnd += (Math.floor(Math.random() * 256));
        rnd += ', ';
        rnd += (Math.floor(Math.random() * 256));
        rnd += ')';

        console.log(rnd);
        rands.push(rnd);
    }

    return rands;
}

function reset(n) {
    h1.style.backgroundColor = "steelblue";
    rst.textContent = "New Colors";
    stat.textContent = "";
    colors = rand(n);
    for (var i = 0; i < n; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }

    for (var i = n; i < 6; i++)
        squares[i].style.display = "none";
    key = pick(n);
    clr.textContent = key;
}

ez.addEventListener("click", function() {
    n = 3;
    reset(n);
    this.classList.add("selected");
    pro.classList.remove("selected");
});

pro.addEventListener("click", function() {
    n = 6;
    reset(n);
    this.classList.add("selected");
    ez.classList.remove("selected");
});