//funcion que me permita obtener la fecha actual
function fechaActual(){
//declaramos una variable para almacenar la fecha
var fecha=new Date();
document.write("Hoy es: "+fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+(fecha.getFullYear()));
}

//creamos una funcion para mostrar cuantos clics se han hecho
function mostrar(){
    //mandamos un alert
    alert("la variable es");
}
function mostrar1(){
    var nom=document.getElementById("nombre").value;
    var ed=document.getElementById("edad").value;
    alert("Ingreso el nombre: "+ nom);
    alert("su edad es: "+ed);
}