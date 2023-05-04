//Escreva uma função que recebe uma string e retorna uma Promise que é resolvida com o número de caracteres da string.

function contar(str) {
  return new Promise((resolve, reject) => {
    if (typeof str !== "string") {
      reject(new Error("Tem que ser string"));
    } else {
      resolve(str.length);
    }
  });
}

let a = 15;

contar('teste')
  .then((num) => {
    console.log(`Tem ${num} caracteres`);
  })
  .catch((erro) => {
    console.error(erro.message);
  });
