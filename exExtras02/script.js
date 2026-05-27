let primeiroValor = parseInt(prompt("Digite o primeiro valor: "));
let ultimoValor = parseInt(prompt("Digite o ultimo valor: "));
let incrementos = parseInt(prompt("Digite o incrementos: "));
let resultado = "";

for (let i = primeiroValor; i <= ultimoValor; i = i + incrementos) {
    resultado = resultado + i + " ";
}
alert(`Contagem: ${resultado} `)