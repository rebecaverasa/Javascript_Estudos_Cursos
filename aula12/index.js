let varA='A'; //B
let varB='B'; //C
let varC='C'; //A

let varAtemp = varA; //temos que armazenar o valor de A em algum lugar porque depois ele vai ser modificado
varA=varB;
varB=varC;
varC=varAtemp;

console.log(varA, varB, varC);