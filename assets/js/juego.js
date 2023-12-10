/* 
    2C - Two of Clubs
    2D - Two of diamonds
    2H - Two of hearts
    2S - Two of shades

    'J', 'Q', 'K' = 10

    'A' = 1 u 11
*/

let deck         = []                   // Creamos la baraja de cartas
const tipos      = ['C', 'D', 'H', 'S'] // Creamos los tipos
const especiales = ['A', 'J', 'Q', 'K'] // Creamos las cartas especiales

let puntosJugador = 0
    puntosComputadora = 0

// Referencias HTML
const btnPedir = document.querySelector('#btnPedir')
const puntosHTML = document.querySelectorAll('small')

// Función para crear y mezclar la baraja
const crearDeck = () => {
    for(let i = 2; i <= 10; i++){     // Ejecutamos, por cada número del 2 al 10
        for(let tipo of tipos){      // Ejecutamos, por cada elemento del arreglo tipos
            deck.push(i + tipo)          
        }
    }
    for (let tipo of tipos){         // Ejecutamos, por cada tipo
        for (let esp of especiales){ // Ejecutamos, por cada carta especial
            deck.push(esp + tipo)    
        }
    }
    deck = _.shuffle(deck)
    // console.log(deck) 
    return deck
}
crearDeck()

// Esta función me permite tomar una carta de la baraja
const pedirCarta = () => {

    // Comprobamos si hay cartas en el arreglo
    if (deck.length === 0){
        // Mensaje de error
        throw 'No hay cartas en el deck'
    }

    // Removemos la última carta de la baraja
    const carta = deck.pop()
    return carta
}
// pedirCarta()    

// Esta función determina el valor numérico de cada carta
const valorCarta = ( carta ) => {
    // Trabajamos el string como un arreglo
    // 📌 substring - Sirve para cortar un arreglo
    const valor = carta.substring(0, carta.length - 1)

    /* Forma corta */
    // condición ? valorSiCierto : valorSiFalso
    return (isNaN(valor)) ?        // Condición: Si el valor no es número
        (valor === 'A') ? 11 : 10  // True (No es número) => Es A ? Si es A vale 11 : Si no es A vale 10.
        : valor * 1                // Flase (Es número)

    /* Forma larga
    
    if(isNaN(valor)){
        // Nos es número
        // Si el valor es A, devuelve 11. Si no es A, devuelve 10
        puntos = ( valor === 'A') ? 11 : 10;
        return puntos
    } else {
        // Es número
        puntos = valor * 1 // Convertimos el string a un número
        return puntos
    } */
}

// Extraemos el valor de la carta aleatoria
const valor = valorCarta(pedirCarta())

/* Eventos */

// Evento pedir carta
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta()
    puntosJugador = puntosJugador + valorCarta(carta)
    
    puntosHTML[0].innerText = puntosJugador
    

})





