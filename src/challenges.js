// Desafio 1
// adc 2 paramentros na funcao compareTrue utilizando o &&(recebe 2 valores)
// usei o if/else para retornar true ou falso( para descobrir se o valor era
// true or false) então eu comparei value1 com true e value2 com true.
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
// adc os paramentros base e height na função, criei uma variavel resultado com o calculo a ser utilizado
// para o resultado proposto no return, que seria calcular os espaços de 1 triangulo.
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
// Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings
// separadas por cada espaço na string original.
function splitSentence(string) {
  let stringSeparada = string.split(' ');
  return stringSeparada;
}

// Desafio 4
// https://medium.com/@rodrigoum/3-maneiras-de-pegar-o-primeiro-e-%C3%BAltimo-elemento-de-um-array-com-javascript-56e92e6bf3f4

function concatName(listaDeNomes) {
  let firstName = listaDeNomes[0];
  let lastName = listaDeNomes[listaDeNomes.length - 1];

  return `${lastName}, ${firstName}`;
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
