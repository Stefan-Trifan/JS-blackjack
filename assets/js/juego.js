/* 
    2C - Two of Clubs
    2D - Two of diamonds
    2H - Two of hearts
    2S - Two of shades
*/


let deck         = []                   // Creamos la baraja de cartas
const tipos      = ['C', 'D', 'H', 'S'] // Creamos los tipos
const especiales = ['A', 'J', 'Q', 'K'] // Creamos las cartas especiales

// Función para crear y mezclar la baraja
const crearDeck = () => {
    for(let i = 2; i < 10; i++){     // Ejecutamos, por cada número del 2 al 10
        for(let tipo of tipos){      // Ejecutamos, por cada elemento del arreglo tipos
            deck.push(i + tipo)          
        }
    }
    for (let tipo of tipos){         // Ejecutamos, por cada tipo
        for (let esp of especiales){ // Ejecutamos, por cada carta especial
            deck.push(esp + tipo)    
        }
    }
    console.log(deck) 
    deck = _.shuffle(deck)
    console.log(deck) 
    return deck
}
// Llamamos a la función
crearDeck()