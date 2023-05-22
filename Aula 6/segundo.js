let produtos = 
  [ {id:1, nome: "salgado", valor: 4.50},
    {id:2, nome: "Esfirra", valor: 4.00},
    {id:3, nome: "brigadeiro", valor: 2.00},
    {id:4, nome: "refrigerante", valor: 2.50} 
  ];
  
let novoProduto1 = 
{
  id:5, 
  nome: "Energetico", 
  valor: 11.00
}
  produtos.push(novoProduto1);


let segundaUnidade = produtos.slice(0,3);


  let novoProduto2 = 
{
  id:6, 
  nome: "pizza", 
  valor: 5.00
}
  segundaUnidade.push(novoProduto2);
  
  
  produtos.sort(function (a, b){
    return a.valor - b.valor
  });
  console.log(produtos);

  function comparar(a, b) {
    const nomeA = a.nome.toUpperCase(); 
    const nomeB = b.nome.toUpperCase(); 
    if (nomeA < nomeB) {
      return -1;
    }
    if (nomeA > nomeB) {
      return 1;
    }
  
    return 0;
  }

  segundaUnidade.sort(comparar);
  console.log(segundaUnidade);