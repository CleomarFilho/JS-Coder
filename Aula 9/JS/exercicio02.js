let pessoas = [
  { nome: "Cleomar", idade: 23 },
  { nome: "Daniel", idade: 27 },
  { nome: "Adrysson", idade: 25 }
];

let nomes = document.getElementById("nomesAdcionados");
let lista = document.createElement("ul");

for (let i = 0; i < pessoas.length; i++) {
  let item = document.createElement("li");
  let conteudoNome = document.createTextNode(`${pessoas[i].nome}, ${pessoas[i].idade} `)
  item.appendChild(conteudoNome);
  lista.appendChild(item);
}

nomes.appendChild(lista);