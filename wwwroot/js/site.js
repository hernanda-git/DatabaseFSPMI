// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


window.addEventListener('scroll', function () {
    if (this.scrollY == 0)
        document.getElementById('nav').className = "navtop";
    else
        document.getElementById('nav').className = "navOnScroll";

});