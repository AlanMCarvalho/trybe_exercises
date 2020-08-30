let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor;

for(let i=0; i<numbers.length; i+=1){
    let firstNumber= numbers[0]
    if(numbers[i] <= firstNumber){
        menorValor = numbers[i];
    }
    else{
        menorValor = menorValor;
    }
}
console.log(menorValor)


