// Descrição:Leia um valor inteiro. A seguir, calcule o menor número de
// notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas
// consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e
// a relação de notas necessárias.
// • Entrada
//    O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).
// • Saída
//    Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada
//    tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir
//    o fim de linha após cada linha, caso contrário seu programa apresentará a
//    mensagem: “Presentation Error”

const valores = [576, 11257, 503];

const notas = [100, 50, 20, 10, 5, 2, 1];

let n = 0;
while (n < valores.length && valores.length !== 0) {
  if (valores[n] > 0 && valores[n] < 1000000) {
    console.log(`R$${valores[n]},00`);

    let nNotas = 0;
    let resto = 0;
    let valor = valores[n];
    for (let i = 0; i < notas.length; i++) {
      nNotas = Math.floor(valor / notas[i]);
      console.log(`${nNotas} nota(s) de R$${notas[i]}`);

      resto = valor - nNotas * notas[i];
      valor = resto;
    }
  }
  console.log('\n');
  n++;
}
