const canvas = document.getElementById('myCanvas2');

//Funcio que genera un numero random
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

//Contructor per un cercle
function instanciarCercle(centerX, centerY, radius) {
    return {
        centerX: centerX,
        centerY: centerY,
        radius: radius,
    };
}
//Instacia un cercle en el canvas del html amb les propietats del obj
function drawCercle(objCercle, canvaCircle) {
    var ctx = canvaCircle.getContext("2d");
    const centerX = objCercle.centerX;
    const centerY = objCercle.centerY;
    const radius = 70;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    //Genera una gama de grisos
    let randColor = randInt(50, 240);
    ctx.fillStyle = `rgb(${randColor},${randColor},${randColor})`;
    ctx.fill();
    return ctx;
}

export { instanciarCercle, drawCercle ,randInt};