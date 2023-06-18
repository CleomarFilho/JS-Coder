const btnAdd = document.getElementById("btnAdd")
const btnRemover = document.getElementById("btnRemover")
const btnAddress = document.getElementById("btnAddress")
const btnClear = document.getElementById("btnClear")
const btnStorage = document.getElementById("btnStorage")
const btnClearAll = document.getElementById("btnClearAll")
const sectionContent = document.getElementById("sectionContent")
const produtos = {}
btnAddress.addEventListener("click", buscarCep)
btnClear.addEventListener("click", limparCep)
btnStorage.addEventListener("click", cadastroStorage)
btnClearAll.addEventListener("click", limparTudo)
btnAdd.addEventListener("click", addProduto)
btnRemover.addEventListener("click", removerProduto)
function buscarCep() {
  const cep = document.getElementById("cep").value;
  if (cep.trim() === "") {
    Swal.fire({
      title: "Erro!",
      text: "Por favor, preencha o campo CEP.",
      icon: "error",
    });
    return; // Encerra a função caso o CEP esteja vazio
  }

  fetch(`https://viacep.com.br/ws/${cep.replaceAll('-', '')}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (data.erro) {
        Swal.fire({
          title: "Erro!",
          text: "CEP inválido. Por favor, insira um CEP válido.",
          icon: "error",
        });
      } else {
        document.getElementById("rua").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("estado").value = data.uf;
      }
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        title: "Erro!",
        text: "Ocorreu um erro ao buscar o endereço. Por favor, digite um CEP válido",
        icon: "error",
      });
      document.getElementById("cep").value = "";
    });
}
function limparCep() {
  const cep = document.getElementById("cep").value
  if (cep) {
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
  }
  else {
    Swal.fire({
      title: "Erro!",
      text: "O campo 'CEP' está vazio",
      icon: "error",
    });
  }
}
function cadastroStorage() {
  const nomeAddress = document.getElementById("nomeAddress").value
  const cep = document.getElementById("cep").value
  const rua = document.getElementById("rua").value
  const bairro = document.getElementById("bairro").value
  const cidade = document.getElementById("cidade").value
  const estado = document.getElementById("estado").value
  if (nomeAddress && cep && rua && bairro && cidade && estado) {

    sessionStorage.setItem("Nome End.", nomeAddress)

    sessionStorage.setItem("cep", cep)

    sessionStorage.setItem("rua", rua)

    sessionStorage.setItem("bairro", bairro)

    sessionStorage.setItem("estado", estado)

    document.getElementById("nomeAddress").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
  }
  else {
    Swal.fire({
      title: "Erro!",
      text: "Preencha todos os campos de forma válida",
      icon: "error",
    });
  }
}
function limparTudo() {
  const nomeAddress = document.getElementById("nomeAddress").value
  const cep = document.getElementById("cep").value
  const rua = document.getElementById("rua").value
  const numero = document.getElementById("numero").value
  const bairro = document.getElementById("bairro").value
  const cidade = document.getElementById("cidade").value
  const estado = document.getElementById("estado").value

  if (nomeAddress || cep || rua || numero || bairro || cidade || estado) {
    document.getElementById("nomeAddress").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
  }
  else {
    Swal.fire({
      title: "Erro!",
      text: "Os campos estão todos limpos",
      icon: "error",
    });
  }
}
function lucroProduto(custo, valor, quantidade) {
  return quantidade * valor - quantidade * custo
}
function addProduto() {
  const ul = document.createElement("ul")
  const hr = document.createElement("hr")

  const indiceLi = document.createElement("li")
  const indice = document.getElementById("indice").value
  if (produtos[indice]) {
    Swal.fire({
      title: "Erro!",
      text: "Já há um produto com esse indice",
      icon: "error",
    });
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

  if (!indice || !nome || !custo || !quantidade || !valor) {
    Swal.fire({
      title: "Erro!",
      text: "Por favor, preencha todos os campos",
      icon: "error",
    });
    return;
  }

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
    Swal.fire({
      title: "Erro!",
      text: "Não há produto com esse indice",
      icon: "error",
    });
  }
  document.getElementById("remover").value = ""
  produtos[indice] = false
}
