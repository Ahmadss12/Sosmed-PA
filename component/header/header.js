var prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("headerContainer").style.top = "0";
    } else {
        document.getElementById("headerContainer").style.top = "-100px";
    }

    prevScrollPos = currentScrollPos;
}
