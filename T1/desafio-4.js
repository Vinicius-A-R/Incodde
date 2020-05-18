//A seguinte sequência de números 0 1 1 2 3 5 8 13 21... é conhecida como série de Fibonacci. Nessa sequência, cada número, depois dos 2 primeiros, é
//igual à soma dos 2 anteriores. Escreva um algoritmo que leia um inteiro N (N < 46) e mostre os N primeiros números dessa série.
//• Entrada
//   O arquivo de entrada contém um valor inteiro N (0 < N < 46)
//• Saída
//   Os valores devem ser mostrados na mesma linha, separados por um espaço em branco. Não deve haver espaço após o último valor.

const entrada = [5, 8, 12, 16];
let n = 0;

while (n < entrada.length && entrada[n] > 0 && entrada[n] < 46) {
  console.log('Entrada: ' + entrada[n]);
  let n1 = 0,
    n2 = 1,
    soma = 0;

  let lista = [];
  for (let i = 0; i < entrada[n]; i++) {
    soma = n1 + n2;

    lista.push(n1);

    n1 = n2;
    n2 = soma;
  }

  let valores = '';
  for (let i = 0; i < lista.length; i++) {
    valores += ' ' + lista[i];
  }

  console.log(valores + '\n');

  n++;
}
