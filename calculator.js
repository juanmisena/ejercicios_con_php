
// var botonSumar = document.getElementById('botonSumar');
// botonSumar.onclick = function(e) {
//     e.preventDefault();
//     var num1 = document.getElementById('num1');
//     var num2 = document.getElementById('num2');
//     var suma = parseInt(num1.value) + parseInt(num2.value);
//     console.log(suma);
//     calculateResult();
// }

// var botonRestar = document.getElementById('botonRestar');
// botonRestar.onclick = function(e) {
//     e.preventDefault();
//     var num1 = document.getElementById('num1');
//     var num2 = document.getElementById('num2');
//     var resta = parseInt(num1.value) - parseInt(num2.value);
//     console.log(resta);
//     calculateResult();
// }
// var resultAlert = document.getElementById('resultAlert');
// resultAlert.onchange = function calculateResult() {
//     resultAlert.innerHTML = 'You number is'+suma;
// }

function myFunction() {
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var suma = parseInt(x) + parseInt(y);
    var resta = parseInt(x) - parseInt(y);
    var multi = parseInt(x) * parseInt(y);
    var division = parseInt(x) / parseInt(y);
    var potencia = Math.pow(x, 2) + Math.pow(y, 2);
    var radical = Math.sqrt(x) + Math.sqrt(y);
    document.getElementById('demo').innerHTML = `Suma is : ${suma}<br>Resta is: ${resta}<br>Multi is: ${multi}<br>Division is: ${division}<br>Potencia is: ${potencia}<br>Radicacion is: ${radical}<br>`; 
}
