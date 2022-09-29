const logo = document.querySelector(".logo");
const paginaPrincipal = document.querySelector(".pagina-principal");
const paginaAgregar = document.querySelector(".pagina-agregar");
const paginaJuego = document.querySelector(".pagina-juego");
const botonIniciar = document.querySelector(".btn-iniciar");
const botonAgregar = document.querySelector(".btn-agregar");
const botonGuardar = document.querySelector(".guardar");
const botonCancelar = document.querySelector(".cancelar");
const input = document.querySelector (".input-texto");
var palabras = ["SILLA", "ESCRITORIO", "PIZARRON", "MARCADOR", "LAPIZ", "CUADERNO","DIRECCION", "ASUNTOSACADEMICOS"];
var palabra;
var letra;
var letrasCorrectas = [];
var letrasIncorrectas = [];
var errores = 8;
var repetido;

//---------------------- FUNCIONES DE NAVEGACIÓN---------------------------

function irPaginaPrincipal(){
    paginaPrincipal.style.display = "block";
    paginaAgregar.style.display = "none";
    paginaJuego.style.display = "none";
}

function irPaginaAgregar(){
    paginaPrincipal.style.display = "none";
    paginaAgregar.style.display = "block";
    paginaJuego.style.display = "none";
}

function irPaginaJuego(){
    paginaPrincipal.style.display = "none";
    paginaAgregar.style.display = "none";
    paginaJuego.style.display = "block";
    sortearPalabra();
    comenzarDibujo();
    crearRenglones();
    console.log(palabra);
    document.onkeydown = (e) => {
        var letra = e.key.toUpperCase();
        if (letra && palabra.includes(letra)){      
            verificarRepetidaCorrecta(letra);       
            for ( i = 0; i < palabra.length; i++){
                if (palabra[i] === letra && repetido == false){
                    escribirLetraCorrecta(i);
                }
            }            
            revisarVictoria();      
        }
        else {            
            verificarRepetidaIncorrecta(letra);
            if (repetido == false) {                    
            escribirLetraInorrecta(letra, errores);                     
            errores -= 1;        
            }
            dibujarAhorcado();
            revisarErrores();
        }  
    }       
}

//---------------------- FUNCIONES DE PAGINA AGREGAR---------------------------

function guardarPalabra(nuevaPalabra){
    nuevaPalabra = nuevaPalabra.toUpperCase();
    palabras.push(nuevaPalabra);
}

function guardarYjugar(){
    if (input.value.trim() == ""){
        irPaginaAgregar();
    } else {
        guardarPalabra(input.value);
        irPaginaJuego();
    }
}

//---------------------- FUNCIONES DE PAGINA JUEGO---------------------------

function sortearPalabra(){
    palabra = palabras[Math.floor(Math.random() * palabras.length)];
    return palabra
}

function verificarRepetidaCorrecta(letra){
    if (letrasCorrectas.includes(letra)){        
        repetido =true;
        return repetido;
    } else {
        for ( i = 0; i < palabra.length; i++){
            if (palabra[i] === letra){            
                letrasCorrectas.push(letra);
                console.log(letrasCorrectas);
            }        
        }        
        repetido = false;
        return repetido;
    }
}

function verificarRepetidaIncorrecta(letra){
    if (letrasIncorrectas.includes(letra)){        
        repetido = true;
        return repetido;       
    } else {        
        letrasIncorrectas.push(letra);
        console.log(letrasIncorrectas);
        repetido = false;
        return repetido;
    }
}

function revisarErrores(){
    if (errores == 0){
        terminarJuego();        
        document.onkeydown = "none";        
    }
}

function revisarVictoria(){
    if (letrasCorrectas.length == palabra.length){
        declararVictoria();
        document.onkeydown = "none";
    }
}

logo.addEventListener("click", function () {
    location.reload();
});
botonCancelar.addEventListener("click", function () {
    location.reload();
});
botonIniciar.onclick = irPaginaJuego;
botonAgregar.onclick = irPaginaAgregar;
botonGuardar.onclick = guardarYjugar;
