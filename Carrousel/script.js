
let numero = 1;
const duree = 1000;
const nombreSlides = 6;


$(".btn1").click(function () {
    $(".image" + numero).fadeOut(duree);
    numero = numero + 1;
    if (numero > nombreSlides) {
        numero = 1;
    }
    $(".image" + numero).fadeIn(duree);

});


$(".btn2").click(function () {
    $(".image" + numero).fadeOut(duree);
    numero = numero - 1;
    if (numero < 1) {
        numero = nombreSlides;
    }
    $(".image" + numero).fadeIn(duree);
});
