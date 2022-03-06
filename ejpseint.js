//Ejercicio 1
// for (let i = 0; i <= 100; i++) {
//     var a = i*5;
//     console.log(a);
// }

//Ejercicio 2
// var i = 0;
// while(i<=100) {
//     var a = i*5;
//     console.log(a);
//     i++;
// }

//Ejercicio 3
// var i = 0;
// do {
//     var a = i*5;
//     console.log(a);
//     i++;
// } while (i<=100);

//Ejercicio 4
// for(let i=320; i>=160; i-=20) {
//     console.log(i);
// }


//Ejercicio 5
// var i = 320;
// while(i>=160) {
//     console.log(i);
//     i-=20;
// }

//Ejercicio 6
// var i = 320;
// do {
//     console.log(i);
//     i-=20;
// }while(i>=160)


//Ejercicio 7
// var intentos = 4;
// var numeroIntroduced;
// let acertado = false;
// do {
//     numeroIntroduced = parseInt(prompt('Introduzca la clave de la caja fuerte:'));
//     if (numeroIntroduced == 8888) {
//         acertado = true;
//     } else {
//         console.log("Clave Incorrenta");
//     }
//     intentos --;
// } while ((intentos > 0) && (!acertado));
// if (acertado) {
//     console.log("Se ha abierto la caja fuerte sucess");
// } else {
//     console.log("Lo siento se ha agotado las oportunidades");
// }

//Ejercicio 8
// var mostrar = document.getElementById("mostrar");
// mostrar.addEventListener("click", () => {
//     var inputNum = document.getElementById("inputNum");
//     var resultados = document.getElementById("resultados");
//     for (let i = 1; i <=10; i++) {
//         var operador = parseInt(inputNum.value) * parseInt(i);
//         resultados.innerHTML += `
//             <tr>
//                 <td>${inputNum.value}</td>
//                 <td>X</td>
//                 <td>${i}</td>
//                 <td>=</td>
//                 <td>${operador}</td>
//             </tr>
//         `;
//     }
// }, false);
// var refrescar = document.getElementById("refres");
// refrescar.addEventListener("click", function(e) {
//     var resultados = document.getElementById("resultados");
//     resultados.innerHTML = "";
// }, false);

// * 9. Realiza un programa que nos diga cuántos dígitos tiene un número introducido por teclado.

// var numerosDigitos = 1;
// var numeroIntroduced = parseInt(prompt("Introduzca un numero entero"));
// var n = numeroIntroduced;
// while (n > 10) {
//     n /= 10;
//     numerosDigitos ++;
// }
// console.log(numeroIntroduced+" tiene "+numerosDigitos+" digitos/s");

//Ejercicio  10. Escribe un programa que calcule la media de un conjunto de números
//  positivos introducidos por teclado. A priori, el programa no sabe     cuántos números se introducirán. El usuario indicará que ha terminado    de introducir los datos cuando meta un número negativo.

// let numeros = 0;
// let numerosIntroducido = 0;
// let suma = 0;
// console.log("Este programa calcula la media de los numeros positivos introducidos");

// while (numerosIntroducido >= 0) {
//     numerosIntroducido = parseFloat(prompt("Vaya introduciendo numeros (esto para cuando intruduzcas numero negativo)"));
//     numeros++;
//     suma += numerosIntroducido;
// }
// console.log("La media de los numeros introducidos es: "+(suma - numerosIntroducido) / (numeros - 1));

//Ejercicio 11. Escribe un programa que muestre en tres columnas, el cuadrado y
// el cubo de los 5 primeros números enteros a partir de uno que se
// introduce por teclado.

// let numeroIntroducido = parseInt(prompt("Introduzca un numero", 10));
// for (let i = numeroIntroducido; i < numeroIntroducido + 5; i++) {
//     console.log(i, Math .pow(i,2), Math.pow(i,3));
// }

//Ejercicio 12. Escribe un programa que muestre los n primeros términos de la
//  serie de Fibonacci. El primer término de la serie de Fibonacci
//  es 0, el segundo es 1 y el resto se calcula sumando los dos
//  anteriores, por lo que tendríamos que los términos son 0, 1, 1,
//  2, 3, 5, 8, 13, 21, 34, 55, 89, 144... El número n se debe
//  introducir por teclado.

// console.log("Este programa muestra los n primeros números de la serie de Fibonacci.");

// let n = parseInt(prompt("Por favor intruducir numero"));

// switch (n) {
//     case 1:
//         console.log("0");
//         break;
//     case 2:
//         console.log("1");
//         break;
//     default:
//         console.log("0 1");
//     let f1 = 0;
//     let f2 = 1;
//     let aux;
//     while (n > 2) {
//         aux = f1;
//         f1 = f2;
//         f2 = aux + f2;
//         console.log(" "+ f2);
//         n--;
//     }
// }
// console.log();

//Ejericio 13. Escribe un programa que lea una lista de diez números y determine cuántos son positivos, y cuántos son negativos.
// let negativos = 0;
// let positivos = 0;
// for (let i = 0; i < 10; i++) {
//     if (parseInt(prompt("por favor, introducir 10 numeros enteros")) < 0) {
//         negativos ++;
//     } else {
//         positivos ++;
//     }
// }
// console.log("Ha introducido : "+positivos+" positivos y "+negativos+" negativos");

//Ejercicio 14. Escribe un programa que pida una base y un exponente (entero positivo) y que calcule la potencia.
// console.log("Cálculo de una potencia");
// let base = parseInt(prompt("Introduzca la base"));
// let exponente = parseInt(prompt("introduzca el exponente :"));
// let potencia = 1;
// if (exponente == 0) {
//     potencia = 1;
// }
// if (exponente > 0) {
//     for (let i = 0; i < exponente; i++) {
//         potencia *= base;
//     }
// }
// if (exponente < 0) {
//     for (let i = 0; i < -exponente; i++) {
//         potencia *= base;
//     }
//     potencia = 1/potencia;
// }
// console.log(base+" ^ "+exponente+" = "+potencia);

/*Ejercicio 15. Escribe un programa que dados dos números, uno real (base) y un entero positivo (exponente), saque por pantalla todas las potencias
con base el numero dado y exponentes entre uno y el exponente introducido. No se deben utilizar funciones de exponenciación. Por ejemplo, si introducimos el 2 y el 5, se deberán mostrar 2¹, 2², 2³, 2⁴ y 2⁵. */
// let base = parseFloat(prompt("introduzca un numero real como base: "));
// let exponenteFinal = parseInt(prompt("introduzca un numero entero como exponente: "));
// let potencia;
// let exponente;
// for (let i = 1; i <= exponenteFinal; i++) {
//     potencia = 1;
//     exponente = i;
//     for (let j = 0; j < exponente; j++) {
//         potencia *= base;
//     }
//     console.log(base+" ^ "+i+" = "+potencia);
// }