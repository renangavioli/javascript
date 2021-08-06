// 08) Desenvolva um algorítmo que declara uma distância em metros e mostre os valores relativos em outras medidas.
//  Ex: Escolhi a distância de: 185.7m. A distância de 185.7m corresponde a: 0.18572Km, 1.8572Hm, 18.572Dam, 1857.2dm, 18572.0cm, 185720.0mm

let distancia_que_escolhi = 150.7;
let distanciaEmKm = (distancia_que_escolhi / 1000);
let distanciaEmHm = (distancia_que_escolhi * 100)

console.log ("Escolhi a distância de: "  + distancia_que_escolhi + "m correspondente a: " + distanciaEmKm + "Km, " + distanciaEmHm);