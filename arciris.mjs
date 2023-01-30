const name = 'circle';
//Voy a crear un circulo con lo basico
function instanciar(iris, color, grosor) {
    return {
        posx: 400,
        posY: 400,
        //Esto lo consegui con luis, es para hacer el medio arco iris teniendo esa forma
        grau: 1 * Math.PI,
        grosor: grosor,
        //Iris es como la grandaria del siguiente, por eso varia
        iris: iris,
        // Y el color tambien varia
        color: color
    };
}
//Voy a crear un circulo en el canva
function draw(objCercle, canvaCircle) {
    //Aqui pillo el canva del html y lo pongo en el ctx
    var ctx = canvaCircle.getContext("2d");
    ctx.beginPath();
    //todos los valores del ctx seran definidos en el OBJ Cercle
    ctx.lineWidth = objCercle.grosor; // el tamaña de linea
    ctx.strokeStyle = objCercle.color; // el color de la linea
    ctx.arc(objCercle.posx, objCercle.posY, objCercle.iris, objCercle.grau, false); // la posicion del arco
    ctx.stroke();
    //Devuelve ese ctx para luego aplicarlo en el main
    return ctx;
}
//No tengo ni puta idea xd, es un report  pero me da palo calcular
function reportArea(length) {
    console.log("Pero que area quieres si es un semicirculo");
}
function reportPerimeter(length) {
    console.log(4 * length);
}
//Cada funcion que usas la tienes que exportar para luego utilizar
export { name, instanciar, reportArea, reportPerimeter, draw };