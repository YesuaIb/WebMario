var slideIndex = 1;
showSlides(idCarrusel, slideIndex);

function plusSlides(idCarrusel, n) {
    showSlides(idCarrusel, slideIndex += n);
}

function currentSlide(n) {
    showSlides(idCarrusel, slideIndex = n);
}
function showSlides(idCarrusel, n) {

    var hijos = document.getElementsByClassName(idCarrusel);
    if (n > hijos.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = hijos.length;
    }

    for (let i = 0; i < hijos.length; i++) {
        hijos[i].style.display = "none";

    }
    hijos[slideIndex - 1].style.display = "flex";


}