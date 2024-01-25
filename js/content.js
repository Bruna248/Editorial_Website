document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() { myFunction() };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.scrollY >= sticky) {
            navbar.style.position = "fixed";
            navbar.style.top = "0";
        } else {
            navbar.style.position = "relative";
        }
    }
})