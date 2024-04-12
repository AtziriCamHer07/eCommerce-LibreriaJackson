
/* --------------------------------------------------------------------------------- Login > Index --------------------- */
function login() {
    let user = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    if(user == "" || password == ""){
        alert("No se admiten espacios en blanco");
    } else {
        alert(`Bienvenido/a ${user}`);
        window.location="index.html";
    }
}

/* --------------------------------------------------------------------------------- Libros > Carrito --------------------- */

function viaje(){
    let casaDelPeligro = 149;
    console.log(casaDelPeligro);
};

function idk(){
    let idk = 149;
    console.log(idk);
};

/* --------------------------------------------------------------------------------- Libros > Carrito --------------------- */

function compra(){
    window.location="compra.html";
}