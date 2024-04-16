function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function askIndex() {
    let a, b;
    a = parseInt(prompt("Inserisci un numero"));
    console.log(a);
    do {
        b = parseInt(prompt("Inserisci un altro numero minore di A"));
        console.log(b);
    } while (b <= a);
    return [a, b]
}

function filtraArray(array, a, b) {
    const nuovoArray = array.filter((curArray, indice) => {
        return indice >= a && indice <= b;
    });

    return nuovoArray;
}
