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
// esse requisito eu tive ajuda do meu marido, para atribuir a variavel points
function footballPoints(wins, ties) {
  let points = (3 * wins) + (ties * 1);
  return points;
}

// Desafio 6

// 1º nomeei o paramentro da function para arrayNumbers.
// depois utilizei o for para descobrir qual era o nº > do array. Depois de muitas tentativas, achei melhor criar uma
// função aux que me desse o maior numero. Nomeei o nome dela para searchHigherNumber, coloquei um paramentro
// (arrayNumber), abri uma variavel bigNumber e atribui o valor 0; uma vez que eu não sabia qual era o maior nº.
// utilizei a estrutura for para percorrer o array(meu paramentro) e atribui a condição se o index ao passar pelo
// loop fosse maior que 0 , o resultado da my var bigNumber seria ele.
// Ao descobrir o maior nº, dei continuidade na function principal, agora eu precisava saber quantas vezes ele se
// repetia, mais tinha 1 problema se o nº fosse negativo? Tive que criar uma condição 1º para descobrir se o numero
// era menor que zero, se fosse o return seria 1. e abri outra condiação se o maior nº fosse igual ao index do array
// (arrayNumbers) o retorn seria somar + 1. Alguns pontos eu precisei de ajuda, do meu marido. como a ideia de criar
// outra funcao p melhor visualizacao, ja que de inicio eu tinha feito somente com a estrutura for(2 vezes).

function searchHigherNumber(arrayNumber) { // function aux para buscar o > number.
  let bigNumber = 0;
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] > bigNumber) {
      bigNumber = arrayNumber[index];
    }
  }
  return bigNumber;
}

function highestCount(arrayNumbers) {
  let repetBigNumber = 0;
  let bigNumber = searchHigherNumber(arrayNumbers);
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] < 0) { // verifica se o numero é negativo
      return 1;
    }
    if (bigNumber === arrayNumbers[index]) {
      repetBigNumber += 1;
    }
  }
  return repetBigNumber;
}

// Desafio 7
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs - utilizado para
// transformar nº negativo em positivo. Match.abs
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'cat2';
}

console.log(catAndMouse(1, 0, 2));

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
