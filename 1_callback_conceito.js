// Funções aceitam qualquer tipo de dado como argumento
function imprimirDado(dado) {
  console.log("Outras tarefas");
  console.log(dado());
}

// callback função que é passada pra outra função e depois de X tempo e chamada de volta

imprimirDado(function () {
  return 'Hello, World!';
})
