let conceito: number = 87


let resultado = ( conceito:number)=> {
    
if( conceito == 0){
   console.log("E")

}
else if(conceito <=35){
    console.log("D")
}else if (conceito <=60){
    console.log("C")

}else if(conceito <=85) {
    console.log("B")

}else{
    console.log("A")
    }
    
}

resultado(conceito)