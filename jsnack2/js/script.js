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
    // let {puntiFatti, falliSubiti} = curSquadra;
    curSquadra.puntiFatti = generatorePuntiFalli(1,75);
    curSquadra.falliSubiti = generatorePuntiFalli(1,40);
    console.log(curSquadra);
});

