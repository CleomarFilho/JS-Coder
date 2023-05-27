const btnAdd = document.getElementById("btnAdd")
const btnRemover = document.getElementById("btnRemover")
const sectionContent = document.getElementById("sectionContent")
const produtos = {}
btnAdd.addEventListener("click", addProduto)
btnRemover.addEventListener("click", removerProduto)
function lucroProduto(custo, valor, quantidade) {
  return quantidade * valor - quantidade * custo
}
function addProduto() {
  const ul = document.createElement("ul")
  const hr = document.createElement("hr")

  const indiceLi = document.createElement("li")
  const indice = document.getElementById("indice").value
  if (produtos[indice]) {
    alert("Já existe um produto com esse indice!")
    return
  }
  indiceLi.innerText = `Indice: ${indice}`
  ul.id = `produto-${indice}`

  const nomeLi = document.createElement("li")
  const nome = document.getElementById("nome").value
  nomeLi.innerText = `Nome: ${nome}`

  const custoLi = document.createElement("li")
  const custo = document.getElementById("custo").value
  custoLi.innerText = `Custo: ${custo}`

  const quantidadeLi = document.createElement("li")
  const quantidade = document.getElementById("quantidade").value
  quantidadeLi.innerText = `Quantidade: ${quantidade}`

  const valorLi = document.createElement("li")
  const valor = document.getElementById("valor").value
  valorLi.innerText = `Valor: ${valor}`

  const lucratividadeLi = document.createElement("li")
  const lucratividade = lucroProduto(custo, valor, quantidade)
  lucratividadeLi.innerText = `Lucro de venda Total: ${lucratividade}`

  ul.append(indiceLi, nomeLi, custoLi, quantidadeLi, valorLi, lucratividadeLi, hr)
  sectionContent.appendChild(ul)

  produtos[indice] = true;

  sessionStorage.setItem("indice", indice)

  sessionStorage.setItem("Nome", nome)

  sessionStorage.setItem("Custo", custo)

  sessionStorage.setItem("Quantidade", quantidade)

  sessionStorage.setItem("Valor", valor)

  sessionStorage.setItem("Lucratividade", lucratividade)

  document.getElementById("indice").value = ""
  document.getElementById("nome").value = ""
  document.getElementById("custo").value = ""
  document.getElementById("quantidade").value = ""
  document.getElementById("valor").value = ""
  Swal.fire({
    title: "Sucesso!",
    text: "Produto adicionado com sucesso.",
    icon: "success",
  });
}
function removerProduto() {
  const indice = document.getElementById("remover").value
  const produtoRemovido = document.getElementById(`produto-${indice}`)
  if (produtoRemovido) {
    document.getElementById("sectionContent").removeChild(produtoRemovido)
    Swal.fire({
      title: "Sucesso!",
      text: "Produto removido com sucesso.",
      icon: "success",
    });
  }
  else {
    alert("Não há produto com esse indice!")
  }
  document.getElementById("remover").value = ""
  produtos[indice] = false
}