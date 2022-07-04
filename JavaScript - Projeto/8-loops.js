console.log(`\nTrabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

// While = (enquanto) = Enquanto esse contador for menor do que minha lista que é 3 (<3) eu vou fazer o que estiver dentro desse bloco de chaves
// Dentro dos [] cochetes fica o item que irá ser verificado

let contador = 0;
let destinoExiste = false;
while(contador<3){ 

    if (listaDeDestinos [contador] == destino){
        // console.log ("Destino existe"); // para ele parar após ter encontrado um destino existente: usamos o BREAK
        destinoExiste = true;
        break;
    }
    contador += 1; // para que ele não entre em loop infinito += 1 (pegar o valor que esta dentro dele = 0 e soma 1)
}

console.log("Destino existe: ", destinoExiste);

    if(podeComprar && destinoExiste) {
        console.log("Boa viagem");
    }else{
        console.log("Desculpe tivemos um erro!");
    }

// for = "loop" para uma condição, ele vai fazer uma ação que esta dentro do { }
// ++ = + ou = 1
// i = contador

    for( let i = 0; i < 3; i ++){ 

        if (listaDeDestinos [i] == destino){
            destinoExiste = true;
        }
    }