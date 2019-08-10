let fRadar: number = 120
let fCarro: number = 0.7

let velocidadeCarro = function (y:number): number{
    return 300*(1/y-1)
}

console.log("Velocidade do carro:" + velocidadeCarro(fCarro))

    //let velocidadeCarro = (fCarro:number)=> 300 * (1/fCarro-1) 