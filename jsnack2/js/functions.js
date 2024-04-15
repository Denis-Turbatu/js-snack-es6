//Funzione per generare i punti e i falli

function generatorePuntiFalli(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
