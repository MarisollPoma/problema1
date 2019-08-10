var fRadar = 120;
var fCarro = 0.7;
var velocidadeCarro = function (y) {
    return 300 * (1 / y - 1);
};
console.log("Velocidade do carro:" + velocidadeCarro(fCarro));
//let velocidadeCarro = (fCarro:number)=> 300 * (1/fCarro-1) 
