/*Escreva uma função que recebe um array de números e retorna uma Promise que é resolvida com a soma dos elementos do array.*/

function somaArray(array) {
  return new Promise((resolve, reject) => {

    if (!Array.isArray(array)) {
      reject(new Error("O argumento deve ser um array"));
    }
    const soma = array.reduce((acc, cur) => acc + cur, 0);
    resolve(soma);
  });
}
const meuArray = [1, 2, 3, 4, 5];
somaArray(meuArray)
  .then((soma) => console.log(`A soma dos elementos do array é ${soma}`))
  .catch((error) => console.error(error.message));
