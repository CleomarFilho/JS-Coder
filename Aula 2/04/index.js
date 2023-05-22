const nome = prompt("Ola, digite seu nome:");
const time = prompt("Digite seu time preferido dentre as opções (Flamengo, Vasco e Cruzeiro):");

if(time === "flamengo"  || time == "Flamengo"){
  alert("Flamenguista");
}
else if(time === "Vasco" || time == "vasco"){
  alert("Vascaino");
}
else if(time === "Cruzeiro" || time == "cruzeiro"){
  alert("Cruzeirense");
}
  else{
    alert("Voce nao digitou um valor valido");
  }