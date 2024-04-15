const squadreCalcio = [
    { 
        nome: "Inter", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },
    { 
        nome: "Milan", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },
    { 
        nome: "Juventus", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },
    { 
        nome: "Roma", 
        puntiFatti: 0,
        falliSubiti: 0 
    },
    { 
        nome: "Napoli", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },
    {  
        nome: "Lazio", 
        puntiFatti: 0, 
        falliSubiti: 0 
    }
];


// Ciclo forEach per salvare ad ogni iterazione i punti e i falli per ogni squadra
squadreCalcio.forEach((curSquadra) => {
    //assegnazione dei punti
    curSquadra.puntiFatti = generatorePuntiFalli(1,75);
    //assegnazione dei falli
    curSquadra.falliSubiti = generatorePuntiFalli(1,40);
    // stampa delle squadre
    console.log(curSquadra);
});

//Creazione con .map() di un nuovo array per poter inserire i dati voluti: nome, falliSubiti

//creo la variabile squadreNuove e assegno la funzione map()
//dentro squadra metto la squadra attuale che estrae map() e nelle chiavi inserisco il valore che si trova nel nome della chiave dell'oggetto squadreCalcio
const squadreNuove = squadreCalcio.map(squadra => {
    const nuovaSquadra = {
        // squadreNuove.nome = squadreCalcio.nome
        nome: squadra.nome,
        // squadreNuove.falliSubiti = squadreCalcio.falliSubiti
        falliSubiti: squadra.falliSubiti
    };

    //faccio il return di tutte le squadre con le nuove chiavi
    return nuovaSquadra;
});

// stampo le squadre con template literal e destructuring
squadreNuove.forEach(curSquadraNuova => {
    const {nome, falliSubiti} = curSquadraNuova;
    console.log(`${nome}, ${falliSubiti}`);
});


