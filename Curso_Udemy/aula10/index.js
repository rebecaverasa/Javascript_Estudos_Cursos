/*
Incremento: o contador++ ou ++contador adiciona o valor de 1 ao resultado
se colocar o contador com uma const vai dar erro porque uma const nao pode ter
o seu valor alterado
Decremento: o contador-- ou --contador subtrai o valor de 1 ao
*/

let contador=1;
contador++;
contador++;
contador++;
contador++;
console.log(contador);

//NaN - not a number
const numb1=10;
const numb2='beca';
console.log(numb1 * numb2);
console.log(typeof numb2);

//converter uma string para inteiro. Em vez de ser 105, agora vai ser 15.
const numb3=10;
const numb4=parseInt('5');
console.log(numb3+numb4);
console.log(typeof numb4);

