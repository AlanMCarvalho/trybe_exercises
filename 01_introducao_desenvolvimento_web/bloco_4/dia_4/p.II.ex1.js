let resultado = "";

   function verificaPalindromo (palavra){
        for(i= palavra.length-1; i >=0; i -=1){
        resultado = resultado + palavra[i];
   }
        if (resultado === palavra){
            console.log(true)
        }
        else {
            console.log(false)
        }
}
verificaPalindromo("desenvolvimento")



