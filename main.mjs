// consigue las funciones exportadas
import { instanciar, draw, reportArea, reportPerimeter } from './arciris.mjs';
import { instanciarCercle, drawCercle, randInt } from './cercle.mjs';

// consigues el canvas del html
var canva1 = document.getElementById("myCanvas1");

//Puedes hacer bucle para ir instanciando cada color
let colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"]
// Aqui crear un circulo 
let circle1 = instanciar(10, 'blue');
// Llamo la funcion he imprime el calculo
reportArea(circle1.grosor);
//Deberia pasar un parametro del objecto  y calcular llamando la funcion
reportPerimeter(circle1.grosor);

//Posicio del primer color del arc irisen width
let irisPosition = 100;
//grosor de la linea del arc iris
let lineWidth = 15;
//Per cada color genera un cercle
for (let i = 0; i < colors.length; i++) {
    //Crea un cercle en la primera posicio, el primer color i el grosor delinea
    let circle = instanciar(irisPosition, colors[i], lineWidth);
    //Por cada circulo nuevo creado le digo que lo aplica EN EL MISMO CANVA
    draw(circle, canva1);
    irisPosition = irisPosition + circle.grosor;
}

//Genera cercles en posicions al atzar
var canva2 = document.getElementById("myCanvas2");
for (let i = 0; i < 10; i++) {
    let circle2 = instanciarCercle(randInt(100,400),randInt(100,400), 70);
    drawCercle(circle2,canva2);    
}

