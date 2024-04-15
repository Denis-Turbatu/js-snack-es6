const bici = [  //Dichiarazione array per le bici
    { 
        nome: "Graziella", 
        peso: 15 
    },
    { 
        nome: "Mountain Bike", 
        peso: 22 
    },
    { 
        nome: "Bici da corsa", 
        peso: 10 
    },
    { 
        nome: "Elettrica", 
        peso: 24 
    },
    { 
        nome: "BMX", 
        peso: 12
    }
];

// CICLO FOR PER CAPIRE COME SCRIVERE IL FOREACH
// for (let i = 0; i < bici.length; i++) {
//     const curBici = bici[i];
//     console.log(curBici);
// }

//Dichiarazione per bici con peso piu basso
let pesoMinore = null;

// foreach per stampare tutte le bici con nome e peso
bici.forEach((curBici) => {;
    console.log(curBici.nome, curBici.peso);
    // if statment per immettere il primo valore del peso dentro la variabile per il peso minore
    if(pesoMinore == null){
        pesoMinore = curBici.peso;
    }
    //else if per capire se il primo valore è maggiore del peso della prossima bici iterata dal foreach, se cosi allora lo assegna alla variabile pesoMinore, tutto cio fino ala fine del ciclo
    else if(pesoMinore !== null && pesoMinore > curBici.peso){
        pesoMinore = curBici.peso;
    }
});

//Stampa finale della bici con peso minore
console.log(pesoMinore);