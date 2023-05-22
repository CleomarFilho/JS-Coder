let botao = document.getElementById("btnPricipal")
// Maneira 1:
botao.addEventListener("click", respostaClick)
function respostaClick() {
  alert("Resposta evento")
}

// Maneira 2
// botao.onclick = () => { alert("Resposta evento") }

// Ponteiro do mouse se move sobre o elemento
// botao.onmouseover = () => { console.log("Resposta evento") }

// movimento do mouse sobre o elemento ativa o evento
// botao.onmousemove = () => { console.log("Resposta evento") }

// ao pressionar o botao ativa o elemento
// botao.onmousedown = () => { console.log("Resposta evento") }

// ao soltar o botao ativa o elemento
// botao.onmouseup = () => { console.log("Resposta evento") }

// receber um alerta a cada alteração
// let input1 = document.getElementById("nome");
// let input2 = document.getElementById("idade");

// input1.onchange = () => { alert("valor1"); }
// input2.onchange = () => { alert("valor2"); }

// let meuFormulario = document.getElementById("formulario");
// meuFormulario.addEventListener("submit", validarFormulario);
// function validarFormulario(e) {
//   e.preventdefault();
//   console.log('Formulario Enviado')
// }