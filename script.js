
/* ------------------------------------------------------------------------------------------------------------------------------ Login > Index --------------------- */
function login() {
    let user = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    if(user == "" || password == ""){
        swal('¡Ha ocurrido un error!', 'No se admiten espacios en blanco', 'error');  /* Libreria para modificar el diseño de la alerta */
    } else if(user.length < 5 || password.length < 8){
        swal('¡Ha ocurrido un error!', 'Longitud no admitida', 'error');  /* Libreria para modificar el diseño de la alerta */
    } else {
        window.location="index.html";
    }
}

function recuperarContraseña(){
    let correo = document.getElementById("correo").value;
    let verificacion = document.getElementById("verificacion").value;

    if(correo == "" || verificacion == ""){
        swal('¡Ha ocurrido un error!', 'Campos necesarios de verificación', 'error');  /* Libreria para modificar el diseño de la alerta */
    } else {
        window.location="loginhtml";
    }
}

function crearCuenta() {
    let nombre = document.getElementById("nombre").value;
    let numero = document.getElementById("numero").value;
    let contraseña = document.getElementById("contraseña").value;
    let email = document.getElementById("email").value;
    let domicilio = document.getElementById("domicilio").value;
    let confirmacion = document.getElementById("confirmacion").value;

    if(nombre == "" || numero == "" || contraseña == "" || email == "" || domicilio == "" || confirmacion == ""){
        swal('¡Ha ocurrido un error!', 'Rellena los campos indicados', 'error');  /* Libreria para modificar el diseño de la alerta */
    } else {
        window.location="login.html";
    }
}

/* ------------------------------------------------------------------------------------------------------------------------------ Ubicación --------------------- */

function contactanos() {
    let nickname = document.getElementById("nickname").value;
    let mail = document.getElementById("mail").value;
    let comentario = document.getElementById("Comentario").value;

    if(nickname == "" || mail == "" || comentario == ""){
        swal('¡Ha ocurrido un error!', 'Rellena los campos indicados', 'error');  /* Libreria para modificar el diseño de la alerta */
    } else {
        swal('¡Mensaje en camino!');
    }
}

/* ---------------------------------------------------------------------------------------------------------------------------- Libros > Carrito --------------------- */
function compra(){
    let num1 = document.getElementById("1");
    let num2 = document.getElementById("2");

    num1.addEventListener("click", acumulador);
    num2.addEventListener("click", acumulador);
    
    let n1 = 149;
    let n2 = 120;

    function acumulador(){
        let acumulador = 0;

        acumulador = acumulador + n1;
        acumulador = acumulador + n2;

        console.log(acumulador);
    }
    
    acumulador();
}

/* ---------------------------------------------------------------------------------------------------------------------------- Countdown --------------------- */

let horas = 18;
let minutos = 34;
let segundos = 48;

//definir y ejecutar los segundos
function cargarSegundo(){
    let txtSegundos;

    if(segundos < 0){
        segundos = 59;
    }

    if(segundos < 10){
        txtSegundos = `0${segundos}`;
    } else {
        txtSegundos = segundos;
    }

    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos--;

    cargarMinutos(segundos);
}

//definir y ejecutar los minutos

function cargarMinutos(segundos){
    let txtMinutos;

    if(segundos == -1 && minutos !== 0){
        setTimeout(() =>{
            minutos = 59;
        },500);
    }

    //mostrar minutos en pantalla
    if(minutos < 10){
        txtMinutos = `0${minutos}`;
    } else {
        txtMinutos = minutos;
    }

    document.getElementById('minutos').innerHTML = txtMinutos;

    cargarHoras(segundos, minutos);
}

//definir y ejecutar las horas

function cargarHoras(segundos, minutos){
    let txtHoras;

    if(segundos == -1 && minutos == 0 && horas !== 0){
        setTimeout(() =>{
            horas--;
        },500);
    } else if(segundos == -1 && minutos == 0 && horas == 0){
        setTimeout(() =>{
            horas = 2;
        },500);
    }

    //mostrar horas en pantalla
    if(horas < 10){
        txtHoras = `0${horas}`;
    } else {
        txtHoras = horas;
    }

    document.getElementById('horas').innerHTML = txtHoras;
}

setInterval(cargarSegundo,1000);