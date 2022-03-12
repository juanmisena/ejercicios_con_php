let op;
document.querySelector('#suma').addEventListener('click', () => {
    op = "+";
});
document.querySelector('#resta').addEventListener('click', () => {
    op = "-";
});
document.querySelector('#multiplicacion').addEventListener('click', () => {
    op = "*";
});
document.querySelector('#division').addEventListener('click', () => {
    op = "/";
});
document.querySelector('#raiz').addEventListener('click', ()=> {
    op = "raiz";
});
document.querySelector('#pow').addEventListener('click', ()=> {
    op = "pow";
});

var calcular = document.getElementById('calcular');
calcular.addEventListener('click', () => {
    const n1 = parseFloat(document.querySelector('#n1').value);
    const n2 = parseFloat(document.querySelector('#n2').value);
    //const op = document.querySelector('#op').value;
    let res;
    if (op == '+') {
        res = n1 + n2;
    } else if (op == '-') {
        res = n1 - n2;
    } else if (op == '*') {
        res = n1 * n2;
    } else if (op == '/') {
        res = n1 / n2;
    } else if (op == 'raiz') {
        res = Math.sqrt(n1), Math.sqrt(n2);
    } else if(op == 'pow') {
        res = Math.pow(n1,n2);
    }
    console.log(res);
    document.querySelector('#r').innerHTML = res;
}, false);