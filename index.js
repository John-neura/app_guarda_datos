const caras = document.querySelectorAll('.main__imagen');
const boton = document.getElementById('abrir__ojos');
const cuenta = document.getElementById('usuario');
const clave = document.getElementById('contraseña');
const botonSistema = document.getElementById("sistema");
const sonido = document.getElementById("sonido");

let abiertos = false;

boton.textContent = 'Abrir ojos';

// ---------------------------
//   REGISTRO DE USUARIO
// ---------------------------

if (!localStorage.getItem("usuario") || !localStorage.getItem("clave")) {

    const nuevoUsuario = prompt("Crea tu nombre de USUARIO:");
    const nuevaClave = prompt("Crea tu CONTRASEÑA:");

    if (nuevoUsuario && nuevaClave) {
        localStorage.setItem("usuario", nuevoUsuario);
        localStorage.setItem("clave", nuevaClave);
        alert("Usuario creado correctamente ✔");
    } else {
        alert("Debes crear usuario y contraseña para continuar");
        location.reload(); // vuelve a pedirlos
    }
}

// Obtener usuario/clave guardados
const adminGuardado = localStorage.getItem("usuario");
const claveGuardada = localStorage.getItem("clave");

// ---------------------------
//      FUNCIONES SONIDO
// ---------------------------

function reproducirSonido() {
    sonido.currentTime = 0; // desde el inicio
    sonido.play();
}

function detenerSonido() {
    sonido.pause();
    sonido.currentTime = 0; // vuelve al inicio
}

// ---------------------------
//   EVENTO BOTÓN "ABRIR OJOS"
// ---------------------------

boton.addEventListener('click', () => {

    // Validación con lo del usuario registrado
    if (cuenta.value === adminGuardado && clave.value === claveGuardada) {

        // Abrir/cerrar ojos visualmente
        caras.forEach(cara => {
            cara.classList.toggle('abiertos');
        });

        abiertos = !abiertos;
        boton.textContent = abiertos ? 'Cerrar ojos' : 'Abrir ojos';

        if (abiertos) {
            reproducirSonido();          // sonido al abrir
            botonSistema.style.display = 'inline-block';
        } else {
            detenerSonido();             // detener sonido al cerrar
            botonSistema.style.display = 'none';
        }

    } else {
        alert('Usuario y contraseña incorrectos');
    }
});

