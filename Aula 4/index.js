let aluno = prompt("Digite seu nome: ");
let matricula = parseFloat(prompt("Digite sua matricula: "));
let nota1 = parseFloat(prompt("Digite sua primeira nota: "));
let nota2 = parseFloat(prompt("Digite sua segunda nota: "));
let nota3 = parseFloat(prompt("Digite sua terceira nota: "));
let mediaFinal = 0 ;
let notaRecuperacao;
function media (nota1, nota2, nota3){
  mediaFinal = parseFloat((nota1 + nota2 + nota3) / 3);
}
function recuperacao (){
  if (mediaFinal < 7)
  {
    notaRecuperacao = parseFloat(prompt("Você ficou com a media abaixo de 7, digite a nota da prova de recuperação: ")); 
    if(nota1< nota2 && nota1< nota3 && nota1 < notaRecuperacao){
      nota1 = notaRecuperacao;
    }
    else if(nota2< nota1 && nota2< nota3 && nota2 < notaRecuperacao){
      nota2 = notaRecuperacao;
    }
    else if(nota3< nota1 && nota3< nota2 && nota3 < notaRecuperacao){
      nota3 = notaRecuperacao;
    }
    else if(nota1 == nota2 && nota1 == nota3 && nota2 == nota3){
      nota1 = notaRecuperacao;
    }
    mediaFinal = parseFloat((nota1 + nota2 + nota3) / 3);
  }
}
function mostrar (mediaFinal){
  if (mediaFinal >= 7){
    alert(`${aluno} (${matricula}), voce foi APROVADO com media: ${mediaFinal}`);
  }
  else {
    alert(`${aluno} (${matricula}), voce foi REPROVADO com a media: ${mediaFinal}`);
  }
}

media(nota1, nota2, nota3);
console.log(mediaFinal);
recuperacao(mediaFinal);
console.log(mediaFinal);
mostrar(mediaFinal);

