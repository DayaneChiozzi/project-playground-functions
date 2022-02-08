// Desafio 1
// adc 2 paramentros na funcao compareTrue utilizando o &&(recebe 2 valores)
// usei o if/else para retornar true ou falso( para descobrir se o valor era
// true or false) então eu comparei value1 com true e value2 com true.
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
// adc os paramentros base e height na função, criei uma variavel resultado com o calculo a ser utilizado
// para o resultado proposto no return, que seria calcular os espaços de 1 triangulo.
function calcArea(base, height) {
  let resultado = base * height / 2;
  return resultado
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
