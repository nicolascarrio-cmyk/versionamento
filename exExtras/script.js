let resultadoContagem = "";
for (let i = 30; i >= 1; i--) {
    if (i % 4 === 0) {
        resultadoContagem += "[*" + i + "*]";
    } else {
        resultadoContagem += i;
    }
    if (i > 1) {
        resultadoContagem += ", ";
    }
}
alert("Contagem Regressiva (Múltiplos de 4 em evidência):\n\n" + resultadoContagem);