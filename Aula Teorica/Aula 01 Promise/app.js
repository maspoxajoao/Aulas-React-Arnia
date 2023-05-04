function getRandomNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = Math.random() * 100;
      //multiplica por 100 para dar numeros maiores que 1
      resolve(randomNumber);
    }, 2000);
  });
}

//mexemplo de uso 1
// utilizado para obter resposta na hora
getRandomNumber()
  .then((success) => {
    console.log("Success: ", success);
  })
  .catch((error) => {
    console.log("Erro: ", error);
  });

//exemplo de uso 2o us
//utilizado quando tem a necessidade de esperar resposta
async function callNumber() {
  console.log("Numero sorteado: ", await getRandomNumber());
}
callNumber();
