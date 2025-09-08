function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada) { 
    let resultado = ""
    if (jugada == 1) { 
        resultado = "Piedra 🥌"
    } else if (jugada == 2) { 
        resultado = "Papel 🧻"
    } else if (jugada == 3) {
        resultado = "Tijera ✂"
    } else {
        resultado = "No elegiste"
    }
    return resultado
}
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1,3)
    jugador = prompt ("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    // Para concatenar el if y el else, debemos escribir el "else if" justo después de que se cierra la primer llave del if. 

    alert("Tu eliges: " + eleccion(jugador))
    alert("Pc elige: " + eleccion(pc))
    
    // COMBATE
    // Para ejecutar el código de la partida solo necesitamos aquellos escenarios donde ganemos.
    // Por eso solo existen tres "else if"
    if (pc == jugador) { 
        alert ("Empate")
    } else if (jugador == 1 && pc == 3) {
        alert ("Ganaste")
        triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1) {
        alert ("Ganaste")
        triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
        alert("Ganaste")
        triunfos = triunfos + 1
    } 
    //Sí no se cumplen las tres condiciones de antes, significa que perdimos.
    else { 
        alert("Pierdes")
        perdidas = perdidas + 1
    }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
// Estamos declarando que el valor del número seleccionado por pc será aleatorio.
// Invocamos la función Math.floor 

