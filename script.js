const chilometri = parseInt(prompt ('Quanti chilometri devi percorrere?')) 
console.log (chilometri)

let età =  parseInt(prompt ('Quanti anni hai?')) 
console.log ('età' , età)

let result


if ( isNaN(chilometri) && isNaN(età) ) {
    result = "C'è un errore nella scrittura dei dati";
    console.log (result)
}
const sconto20 = 20

const sconto40 = 40

const priceKm = 0.21

let num = 5.56789;
let n = num.toFixed();

const price = (chilometri * priceKm);
let newPrice = price.toFixed(2)
console.log (newPrice)
let newPrice2 = newPrice

if (età < 18){
    newPrice2 = price - (price / 100 * sconto20)
    console.log ('Prezzo con lo sconto under 18:', newPrice2)
}

else if (età > 65){
    newPrice2= price - (price / 100 * sconto40)
    console.log ('Prezzo con lo sconto over 65:', newPrice2)
}
document.getElementById('prezzo').innerHTML +=  newPrice2;