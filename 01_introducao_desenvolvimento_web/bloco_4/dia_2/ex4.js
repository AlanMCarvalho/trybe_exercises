let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let quantidadeDeItens = numbers.length;

for (let i =0; i < numbers.length; i += 1){
    soma = soma + numbers[i];
}

let media = soma / quantidadeDeItens;
if (media > 20){
    console.log("Valor maior que 20.")
}
else { 
    console.log("Valor menor ou igual a 20.")
}

