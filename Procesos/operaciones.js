
//primera funcion
function factoria() {
    var n = parseInt(prompt("ingresa un numero"));
    var f = 1;
    for (var i = 1; i <= n; i++) {
        f *= i;
    }
    document.write("El factorial es: " + f)
}
//segunda funcion
function suma() {
    var n1 = parseInt(prompt("ingrese numero 1"));
    var n2 = parseInt(prompt("ingrese numero 2"));
    var s = n1 + n2;
    document.write("la suma es: " + s)
}
//funcion llamar doc html
function abrir() {
    open(URL = "./ejer/index.html")
}

//funcion que me permita obtener la fecha actual
function fechaActual() {
    //declaramos una variable para almacenar la fecha
    var fecha = new Date();
    document.write("Hoy es: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + (fecha.getFullYear()));
}

//funcion que ejecuta las funciones que se han creado
function mostrar() {
    var opcion = parseInt(document.getElementById("opcion").value);
    switch (opcion) {
        case 1:
            factoria();
            break;
        case 2:
            suma();
            break;
        case 3:
            abrir();
        case 4:
            fechaActual();
            break;
    }
}