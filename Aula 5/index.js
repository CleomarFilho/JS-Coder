function aluno (nome, matricula, nota1, nota2, nota3, mediaFinal, notaRecuperacao)
{
  this.nome = nome;
  this.matricula = matricula;
  this.nota1 = nota1;
  this.nota2 = nota2;
  this.nota3 =  nota3;
  this.mediaFinal = mediaFinal ;
}
function media (nota1, nota2, nota3, mediaFinal){
  mediaFinal = parseFloat((nota1 + nota2 + nota3) / 3);
}

function mostrar (mediaFinal, nome, matricula){
  if (mediaFinal >= 7){
    console.log(`${nome} (${matricula}), voce foi APROVADO com media: ${mediaFinal}`);
  }
  else {
    console.log(`${nome} (${matricula}), voce foi REPROVADO com a media: ${mediaFinal}`);
  }
}
let aluno1 = {};

let nome = prompt("Digite seu nome: ");
aluno1.nome = nome;
let matricula = parseInt(prompt("Digite sua matricula: "));
aluno1.matricula = matricula;
let nota1 = parseFloat(prompt("Digite sua primeira nota: "));
aluno1.nota1 = nota1;
let nota2 = parseFloat(prompt("Digite sua segunda nota: "));
aluno1.nota2 = nota2;
let nota3 = parseFloat(prompt("Digite sua terceira nota: "));
aluno1.nota3 = nota3;
let mediaFinal = parseFloat((nota1+nota2+nota3)/3);
aluno1.mediaFinal = mediaFinal;

let novoAluno = new aluno (aluno1.nome, aluno1.matricula, aluno1.nota1, aluno1.nota2, aluno1.nota3, aluno1.mediaFinal);

console.table(novoAluno)
media(novoAluno.nota1, novoAluno.nota2, novoAluno.nota3, novoAluno.mediaFinal);
mostrar(novoAluno.mediaFinal, novoAluno.nome, novoAluno.matricula);

