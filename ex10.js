// 10) Faça um algoritmo que receba em suas variáveis a largura e altura de uma parede, calcule e mostre a área a ser pintada
//  e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2 metros quadrados.

let largura = 7;
let altura = 3;
let areaTotal = (largura * altura);

console.log ("Dados da parede:\n" + "Largura: " + largura + " M" + "\n" + "Altura: " + altura + " M" + "\n" + "Logo sabemos que a Área da Parede em M² é de: " + areaTotal + "M²" + "\n" + "Para pintar a parede por completo, serão necessários " + (areaTotal / 2) + " Litros de tinta.");