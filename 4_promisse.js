/* 
*Promise
*
* A promessa de que algo irá acontecer
* Poderá dar certo ou errado, mas irá acontecer
*/

let aceitar = false

console.log('Pedir uber');

const promessa = new Promise((resolve, reject) => { // criando o objeto promessa

  if(aceitar === true) {
    return resolve('Seu pedido foi aceito')
  } else {
    return reject('Seu pedido foi negado')
  }
  
})

console.log('Aguardando');

promessa
  .then(result => console.log(result))
  .catch(erro => console.log(erro))
  .finally(() => console.log('Pedido finalizado'))