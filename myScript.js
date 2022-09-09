console.log('JS-OK');

/* SNACK 1*/
/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/

function numberRandom(maxNumber) {
    const outputRandom = Math.floor(Math.random() * maxNumber);
    return outputRandom;
}

const containerSquadre = [
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
];

//containerSquadre.forEach(element, index, array) => { }
MAX_GOAL_FAULS = 10

containerSquadre.forEach(element => {
    //console.log(element.nome);
    element.puntiFatti = numberRandom(10);
    element.falliSubiti = numberRandom(10);
    if (element.puntiFatti === 1) {
        console.log(`La squadra ${element.nome} ha fatto ${element.puntiFatti} punto e ha subito ${element.falliSubiti} falli.`);
    } else {
        console.log(`La squadra ${element.nome} ha fatto ${element.puntiFatti} punti e ha subito ${element.falliSubiti} falli.`);
    }

});

/* SNACK 2*/
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */

function creaNuovoArray(array, numA, numB) {
    const rangeArray = [];
    for (let i = 0; i < 100; i++) {
        //console.log(array[i]);
        if (numA <= array[i] && numB >= array[i]) {
            rangeArray.push(array[i]);
        }
    }
    return rangeArray;
}

const nuovoArray = [];
for (let i = 1; i <= 100; i++) {
    nuovoArray.push(i);
}
//console.log(nuovoArray);

const numeroA = 20;
const numeroB = 35;

const rangeArray = creaNuovoArray(nuovoArray, numeroA, numeroB);
console.log(rangeArray);

/* SNACK 3*/
/*
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */


//con un ciclo creo un oggetto, a cui verranno assegnati dei valori diversi ogni volta
const zucchineArray = []

for(let i = 0; i < 10; i++){

    const zucchina = {
        lunghezza: numberRandom(30),
        peso: numberRandom(200)
    }

    zucchineArray.push(zucchina)
};

console.log('Queste sono tutte le zucchine:', zucchineArray)

//con un ciclo foreach andrò a selezionare le zucchina con lunghezza inferiore e maggiore di 15

LENGHT_DIFFERENT = 15

const zucchineCorte = []
const zucchineLunghe = []

zucchineArray.forEach(element =>{

    element.lunghezza < LENGHT_DIFFERENT ? zucchineCorte.push(element) : zucchineLunghe.push(element);

});

console.log('Queste sono le zucchine corte:', zucchineCorte)
console.log('Queste sono le zucchine corte:', zucchineLunghe)
//con un operatore ternario le smisterò in due array

//dato un array e una chiave mi faro restituire il valore della somma dei valori

function getSumValues(array, key){

    let totalWeight = 0

    array.forEach(element =>{

        totalWeight += element[key]

    })

    return totalWeight

}


console.log('Le zucchine corte pesano: ', getSumValues(zucchineCorte, 'peso'), 'grammi');
console.log('Le zucchine lunghe pesano: ', getSumValues(zucchineLunghe, 'peso'), 'grammi');
