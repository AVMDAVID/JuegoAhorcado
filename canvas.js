
var dibujo = document.getElementById("dibujo").getContext("2d");
var renglones = document.getElementById("renglones").getContext("2d");
var letrasUsadas = document.getElementById("letras-usadas").getContext("2d");
var juegoTerminado = document.getElementById("juego-terminado").getContext("2d");

function comenzarDibujo(){
    dibujo.lineWidth = 10;
    dibujo.lineCap="round";
    dibujo.strokeStyle = "#0A3871";
    dibujo.beginPath();
    dibujo.moveTo(50,315);
    dibujo.lineTo(450,315);
    dibujo.stroke();
    dibujo.closePath();
    dibujo.beginPath();    
    dibujo.moveTo(150,20)
    dibujo.lineTo(150,315)    
    dibujo.stroke();
    dibujo.closePath();
    dibujo.beginPath();    
    dibujo.moveTo(150,20)
    dibujo.lineTo(350,20)    
    dibujo.stroke();
    dibujo.closePath();
}

function crearRenglones(){
    renglones.lineWidth = 6;
    renglones.strokeStyle = "#0A3871";   
    var n = 0;
    if (palabra.length < 9){
        var ancho = 800/palabra.length;
    } else{
        ancho = 80;
    }   

    for ( i = 0; i < palabra.length; i ++){

        if ( i <= 9){             
            renglones.moveTo(0 + (ancho*i), 50)
            renglones.lineTo(60 + (ancho*i), 50)
        } else{
            renglones.moveTo(0 + (80*n), 107)
            renglones.lineTo(60 + (80*n), 107)
            n = n + 1;
        }
    }
    renglones.stroke();
    renglones.closePath();
}


function escribirLetraCorrecta(index){
    renglones.font = "bold 52px Inter";
    renglones.fillStyle = "#0A3871";
    if (palabra.length < 9){
        var ancho = 800/palabra.length;
    } else{
        ancho = 80;
    }   

    if ( i <= 9){             
        renglones.fillText(palabra[index], 12 + (ancho*index), 40)
    } else{
        renglones.fillText(palabra[index], 12 + (80*(index-10)), 97)
    }
    renglones.stroke();
}

function escribirLetraInorrecta(letra, errorLeft){
    letrasUsadas.font = "bold 30px Inter";
    letrasUsadas.fillStyle = "#0A3871";
    letrasUsadas.fillText(letra, 30*(10-errorLeft), 100, 30 )
}

function declararVictoria(){
    juegoTerminado.font = "bold 70px Inter";    
    juegoTerminado.fillStyle = "#000000";
    juegoTerminado.fillText ("GANASTE", 40,200);
    setTimeout( recargar , 10000);
}

function terminarJuego(){
    juegoTerminado.font = "bold 70px Inter";    
    juegoTerminado.fillStyle = "#000000";
    juegoTerminado.fillText ("Fin del juego", 0,200);
    setTimeout( recargar , 10000);
}

function recargar(){
    location.reload(); 
}

function dibujarAhorcado() {
    dibujo.lineWidth = 8
    dibujo.lineCap="round"
    dibujo.strokeStyle = "#0A3871"
    if(errores==7){
    dibujo.moveTo(300,20)
    dibujo.lineTo(300,60)
    }
    if(errores==6){
    dibujo.moveTo(330,90)
    dibujo.arc(300,90,30,0,Math.PI*2)
    }
    if(errores==5){
    dibujo.moveTo(300,120)
    dibujo.lineTo(300,220)
    }
    if(errores==4){
    dibujo.moveTo(300,140);
    dibujo.lineTo(285,165);
    dibujo.lineTo(285,190);
    }
    if(errores==3){
    dibujo.beginPath();
    dibujo.moveTo(300,140);
    dibujo.lineTo(315,165);
    dibujo.lineTo(315,190);
    }
    if(errores==2){        
    dibujo.beginPath();
    dibujo.moveTo(300,220)
    dibujo.lineTo(278,280)
    }
    if(errores==1){
    dibujo.moveTo(300,220)
    dibujo.lineTo(322,280)
    }
    if(errores==0){
    dibujo.lineWidth=3;
    dibujo.strokeStyle = "darkred";
    dibujo.moveTo(285,80)
    dibujo.lineTo(295,90)
    dibujo.stroke();
    dibujo.moveTo(295,80)
    dibujo.lineTo(285,90)
    dibujo.stroke();    
    dibujo.moveTo(315,80)
    dibujo.lineTo(305,90)
    dibujo.stroke();
    dibujo.moveTo(305,80)
    dibujo.lineTo(315,90)
    }
    dibujo.stroke();
    dibujo.closePath();
}