const inputs = document.querySelectorAll('input')
for (const input of inputs) {
  input.addEventListener('click', clicar)
}

function clicar(event) {
  const button = event.target
  const num = button.value
  console.log(num)
  switch (num) {
    case ',':
      n = '.'
      break
    case 'C':
      return limpar()
    case '2':
      break
    default:
      n = parseInt(num)
  }

  // let numero = document.querySelector('div#resultado').innerHTML;
  // document.querySelector('div#resultado').innerHTML = (numero + num).substring(0,12);
}

function limpar() {
  document.querySelector('div#resultado').innerHTML = "";
}

function calcular() {
  var resultado = document.querySelector('div#resultado').innerHTML;
  if (resultado) {
    document.querySelector('div#resultado').innerHTML = eval(resultado);
  }
}

