var width = document.querySelector("#linkedin");
//var scroll = document.getElementById("scroll");

if (width != undefined) {
    if (screen.width < 475)
        width.style.width = "250px";
    else
        width.style.width = "300px";
}


if (document.documentElement.scrollTop > 20) {
    scroll.style.display = "block";
} else {
    scroll.style.display = "none";
}