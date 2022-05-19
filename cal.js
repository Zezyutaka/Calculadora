  // let numero = document.querySelector('div#numero'.value)
  // let char = document.querySelector('div#char'.value)
  // let clear = document.querySelector('div#char2'.value)
  // let resultado = document.querySelector('div#resultado'.value)

function clicar(num) {
  let numero = document.querySelector('div#resultado').innerHTML;
  document.querySelector('div#resultado').innerHTML = (numero + num).substring(0,12);
}

function limpar() {
  document.querySelector('div#resultado').innerHTML = "";
}

function calcular() {
  var resultado = document.querySelector('div#resultado').innerHTML;
  if(resultado){
    document.querySelector('div#resultado').innerHTML = eval(resultado);
  }
}