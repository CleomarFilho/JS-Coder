const nomeUsuario = prompt("Digite seu nome: ");
const idadeUsuario = prompt("Digite sua idade:");
const emailUsuario = prompt("Digite seu email:");
const telefoneUsuario = prompt("Digite seu telefone para contato:");

let contato = document.getElementById("contato");

let li = document.createElement("li");
li.innerHTML = nomeUsuario;
contato.appendChild(li);
li = document.createElement("li");
li.innerHTML = idadeUsuario;
contato.appendChild(li);
li = document.createElement("li");
li.innerHTML = emailUsuario;
contato.appendChild(li);
li = document.createElement("li");
li.innerHTML = telefoneUsuario;
contato.appendChild(li);
