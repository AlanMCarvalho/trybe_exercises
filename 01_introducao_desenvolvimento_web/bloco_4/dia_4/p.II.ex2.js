function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (key in numeros) {
      if (numeros[indiceMaior] < numeros[key]) {
        indiceMaior = key;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); 



