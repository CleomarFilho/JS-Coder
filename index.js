

let num1 = parseFloat(prompt("Digite o primeiro numero:"));
let operador = prompt("Digite a operação que deseja fazer (+,-,*,/):");
let num2 = parseFloat(prompt("Digite o segundo numero"));
let resultado;

if(operador === "+"){
  resultado = num1+num2;
  alert(resultado);
}
else if (operador === "-"){
  resultado = num1 - num2;
  alert(resultado);
}
else if(operador === "*"){
  resultado = num1*num2;
  alert(resultado);
}
else if(operador === "/"){
  resultado = num1/num2;
  alert(resultado);
}
else{
  alert("Não foi inserido um operador válido");
}

