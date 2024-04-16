const persone = [
  {
    nome: "Mario",
    cognome: "Rossi",
    eta: 25
  },
  {
    nome: "Giuseppe",
    cognome: "Verdi",
    eta: 30
  },
  {
    nome: "Maria",
    cognome: "Bianchi",
    eta: 17
  }
];

let message = "";

persone.forEach((curPersone) => {
    if (curPersone.eta >= 18) {
        message = "puo guidare";
    } else {
        message = "non puo guidare";
    }
    const result = [curPersone.nome, curPersone.cognome, message];
    console.log(result);
});



