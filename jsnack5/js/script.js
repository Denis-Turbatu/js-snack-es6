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
    eta: 22
  }
];

let message = "";

persone.forEach((curPersone) => {
    [nome, cognome, eta] = curPersone;
    if (eta >= 18) {
        message = "puo guidare";
    } else {
        message = "non puo guidare";
    }
    const result = [nome, cognome, message];
    console.log(result);
});



