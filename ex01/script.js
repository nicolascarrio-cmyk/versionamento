let numeros = [];
let somaPares = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(numero); 
    if (numero % 2 === 0) {
        somaPares += numero;
    }
}

alert("Números digitados:" + numeros);
alert("Soma dos pares:" + somaPares);