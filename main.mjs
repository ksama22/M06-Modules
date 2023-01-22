// consigue las funciones exportadas
import { instanciar, draw, reportArea, reportPerimeter } from './circle.mjs';
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


//lo hago cada "3" porque el grosor es "3", Si el grosor es 2, lo haria cada 2
let iris = 10;
for (let i = 0; i < colors.length; i++) {
    //No se sobrescriben porque cada circulo esta en un "iris" "center" o "grandaria" diferente como quieras llamarlo
    let circle = instanciar(iris, colors[i]);
    //Por cada circulo nuevo creado le digo que lo aplica EN EL MISMO CANVA
    draw(circle, canva1);
    iris = iris + 3;
}