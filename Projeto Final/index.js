const Produtos  = []
let opcao = ""

do {
  opcao = prompt(`Bem Vindo ao Controle de vendas e estoque da Loja A:\nQuantidades de Produtos cadastrados:${Produtos.length}\nMENU\n1°- Adcionar Produto\n2°- Mostrar Produtos adcionados\n3°- Verificação de lucros\n 4°- Sair`)
  switch (opcao){
    case "1":
      const produto = {}
      produto.id = parseFloat(prompt("Digite o ID do produto (ELE PRECISA SER UNICO) :"))
      produto.nome = prompt("Nome do produto:")
      produto.custo = parseFloat(prompt("Custo do produto:"))
      produto.estoque = parseFloat(prompt("Quantidade em estoque:"))
      produto.valor = parseFloat(prompt("Valor de venda do produto:"))

      const confirmacao = confirm(`Salvar esse novo Produto? \nID: ${produto.id}\nnome: ${produto.nome}\nCusto: ${produto.custo}\nEstoque: ${produto.estoque}\nValor: ${produto.valor}`)
      if(confirmacao){
        Produtos.push(produto)
        alert("Produto adcionado com sucesso!")
      }
      else{
        alert("Retornando ao menu...")
      }
      break
    case "2":
      if(Produtos.length !=0){
        for(let i = 0; i<Produtos.length; i++){
          alert( `${i+1}° Produto:\nID: ${Produtos[i].id}\nNome: ${Produtos[i].nome}\nCusto: ${Produtos[i].custo}\nEstoque: ${Produtos[i].estoque}\nValor: ${Produtos[i].valor}\n`)
        }
      }
      else{
        alert("Não existe produto cadastrado!")
      }
      break
    case "3":
      if(Produtos.length !=0){
      const idPesquisa = parseFloat(prompt("Digite o id do produto:"))
      for(let i = 0 ; i < Produtos.length ; i++){
        if (idPesquisa == Produtos[i].id){
          const quantidadeVendas = parseFloat(prompt("Quantidade vendida: "))
          const gasto = quantidadeVendas * Produtos[i].custo 
          const ganho = quantidadeVendas * Produtos[i].valor
          const lucro = ganho - gasto
          alert(`Produto:\nID:${idPesquisa}\nNome: ${Produtos[i].nome}\n\nCusto: ${gasto}\nGanho: ${ganho}\n\nLucro: ${lucro}`)
        }
        else{
          alert("ID não encontrado")
        }
      }
    }
    else{
      alert("Não existe produto cadastrado!")
    }
      break
    case "4":
      alert("saindo...")
      break
    default:
      alert("Opção Invalida!")
  }
} while (opcao != 4)
alert("Programa sendo encerrado!")