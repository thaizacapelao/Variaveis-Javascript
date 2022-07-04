//Operadores lógicos
console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);


// if(idadeComprador >=18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1,1); //removendo item se for maior de idade

// }else if(estaAcompanhada){
//         console.log("Comprador esta acompanhado");
//         listaDeDestinos.splice(1,1); //removendo item se for maior de idade
// }else{
//         console.log("Não é maior de idade e não posso vender");
// }

                            
// || duas barras significam "ou" 

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(2, 1); //removendo item se for maior de idade    
} else {
    console.log("Não é maior de idade e não posso vender");
}


// \n = é usado para pular linha
// && = "e" (Chamada expressão boleana)
console.log("Embarque: \n\n")
if(idadeComprador >=18 && temPassagemComprada) {
    console.log("Boa viagem!")
}else{
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);


