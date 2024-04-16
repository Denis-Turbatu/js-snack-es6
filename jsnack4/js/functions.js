function filtraArrayBenzina(array) {
    const nuovoArray = array.filter((curArray) => {
        if (curArray.alimentazione === "benzina"){
            return true;
        }else{
            return false;
        }
    });

    return nuovoArray;
}

function filtraArrayDiesel(array) {
    const nuovoArray = array.filter((curArray) => {
        return array.alimentazione == "diesel";
    });

    return nuovoArray;
}

function filtraArrayIbrido(array) {
    const nuovoArray = array.filter((curArray) => {
        return (
            array.alimentazione !== "benzina" && array.alimentazione !== "diesel"
        );
    });

    return nuovoArray;
}
