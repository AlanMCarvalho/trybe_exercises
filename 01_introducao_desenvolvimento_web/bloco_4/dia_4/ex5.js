let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  info.recorrente = "Sim";

  let infoTwo = {
      personagem: "Tio Patinhas",
      origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
      nota: "O último MacPatinhas",
      recorrente: "Sim",
  }

  for (key in info){
    console.log(info[key] + " e " + infoTwo[key])
  }
