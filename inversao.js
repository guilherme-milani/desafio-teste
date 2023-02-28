let desafioTeste = "Esta é uma string de exemplo";
let desafioTesteInvertido = "";

for (let i = desafioTeste.length - 1; i >= 0; i--) {
  desafioTesteInvertido += desafioTeste[i];
}

console.log(desafioTesteInvertido);
