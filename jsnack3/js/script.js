const arrayToCheck = [];
let newArray = [];

const [numUserA, numUserB] = askIndex();
// numUserA = result[0];
// numUserB = result[1];

console.log(numUserA);
console.log(numUserB);

for (let i = 0; i < 10; i++) {
    numberGenerated = getRndInteger(1, 100);
    arrayToCheck.push(numberGenerated);
}

console.log(arrayToCheck, "array fuori dal for");
newArray = filtraArray(arrayToCheck, numUserA, numUserB);
console.log(newArray);