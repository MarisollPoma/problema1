var conceito = 87;
var resultado = function (conceito) {
    if (conceito == 0) {
        console.log("E");
    }
    else if (conceito <= 35) {
        console.log("D");
    }
    else if (conceito <= 60) {
        console.log("C");
    }
    else if (conceito <= 85) {
        console.log("B");
    }
    else {
        console.log("A");
    }
};
resultado(conceito);
