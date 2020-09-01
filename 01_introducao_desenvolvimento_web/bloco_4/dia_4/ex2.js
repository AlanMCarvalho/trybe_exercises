let a = 2;
let b = 5;
let resultado;

function maior(a, b){
    if (a > b){
        resultado = a;
    } 
    else if (b > a){ 
        resultado = b;
    }
    else {
        resultado = "valores iguais."
    }
    return resultado;
}


