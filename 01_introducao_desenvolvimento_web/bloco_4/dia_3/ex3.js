let n = 5;
let contagem = "*";
let inputline= "";
let inputPosition = n;

for( i = 0 ; i < n; i += 1){
    for (j = 0; j <= n ; j +=1){
        if (j < inputPosition){
            inputline = inputline + " ";
        }
        else {
            inputline = inputline + contagem;
        }
    }   
        console.log (inputline);
        inputline= "";
        inputPosition = inputPosition - 1;

}    
   