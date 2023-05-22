class Produto {
  constructor (id, nome, valor, estoque){
    this.id = id;
    this.nome = nome;
    this.valor = valor;
    this.estoque = estoque;
  }
}
class Cadastro {
  constructor (id, nome, valor, estoque, indice){}
    cadastrar(){
      let id = [];
      let nome = [];
      let valor = [];
      let estoque = [];
    
      for(indice=0 ; indice<4; indice++){
        id[indice] = prompt("Digite o id do produto: ");   
        nome[indice] = prompt("Digite o nome do produto: ");
        valor [indice] = parseFloat(prompt("Digite o valor do produto: "));
        estoque [indice] = prompt("Digite se 'S' se tiver em estoque e 'N' caso contrario: ");
        estoque [indice] = estoque[indice].toUpperCase();
        if ( estoque [indice] == "S"){
          estoque [indice] = true;
        }
        else if (estoque [indice] == "N"){
          estoque [indice]= false;
        }
        else{
          estoque [indice] = "Indefinido";
        }
      }
    }
}
let produto01 = new Produto (Cadastro);
console.log(produto01);