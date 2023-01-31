 //verifica tamanho da tela e modifica propriedades
 window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        document.body.style.fontSize = "100%";            
    } else {        
        document.body.style.fontSize = "90%";                
    }
});


//Define a variável do total geral
let totalGeral = 0;
//Define a variável do valor do frete
let valorFrete = 0;

// Criando constantes objetos para os produtos
const prod1 = { indice:1, imagem:"../webSiteIflag/img/P1.jpg",
descricao:"Notebook Acer 8gb RAM SSD 250gb",
quantidade:1,
preco:2900.00};
insereProdutoHtml(prod1);
verificaBotaoDireito(prod1);
verificaBotaoEsqurdo(prod1);
lixeiraProdutos(prod1);
somaTotal(prod1);
//-----------------------------------------------------------

const prod2 = { indice:2, imagem:"../webSiteIflag/img/NP4.jpg",
descricao:"Teclado sem fio",
quantidade:1,
preco: 80.00};
insereProdutoHtml(prod2);
verificaBotaoDireito(prod2);
verificaBotaoEsqurdo(prod2);
lixeiraProdutos(prod2);
somaTotal(prod2);
//-----------------------------------------------------------
const prod3 = { indice:3, imagem:"../webSiteIflag/img/np9.jpg",
descricao:"Mouse sem fio Multilaser",
quantidade:1,
preco: 99.00};
insereProdutoHtml(prod3);
verificaBotaoDireito(prod3);
verificaBotaoEsqurdo(prod3);
lixeiraProdutos(prod3);
somaTotal(prod3);
//-----------------------------------------------------------
const prod4 = { indice:4, imagem:"../webSiteIflag/img/np6.jpg",
descricao:"Fone Philips blueouth",
quantidade:1,
preco: 250.00};
insereProdutoHtml(prod4);
verificaBotaoDireito(prod4);
verificaBotaoEsqurdo(prod4);
lixeiraProdutos(prod4);
somaTotal(prod4);

//Tratamento do evento do botão do CEP
let btnMyCEP = document.querySelector(".btn-CEP");
let inputMyCEP = document.querySelector(".input-CEP");
let pagar = document.querySelector(".pagar");
let valores = document.querySelector(".valores");
let ajuda = document.querySelector(".helper-text");
let cabValores = document.querySelector(".cabValores");

btnMyCEP.addEventListener("click",()=>{    
  if(inputMyCEP.value.length > 8 ){
      desmarcaRadios();        
      ajuda.style.display="none"; 
      pagar.style.display="block";
      valores.style.display="flex";
      cabValores.style.display="grid";  
      
  }else{
      pagar.style.display="none";
      valores.style.display="none";
      cabValores.style.display="none";
      ajuda.style.display="block";         
  }
});

// Função para adicionar produtos ao HTML
function insereProdutoHtml(objeto){ 
document.querySelector(".tprodutos").insertAdjacentHTML("beforeend", `<div class="img${objeto.indice}"><img src="${objeto.imagem}"></img></div>`);
// Inserindo o componentes: Botões e Imput 
document.querySelector(".tprodutos").insertAdjacentHTML("beforeend", `<div class="desc${objeto.indice}"><h2>${objeto.descricao}</h2></div>`);
document.querySelector(".tprodutos").insertAdjacentHTML("beforeend",`<div class="stepper-input step${objeto.indice}">
                      <button class="btn btn-left${objeto.indice}">-</button>
                      <input  class="input-box input${objeto.indice}" type="text" value="01" style="padding-left: 0px;padding-right: 0px;width: 80px;color: #550dac;text-align: center;" placeholder="Quantidade" font-size="1px">
                      <button class="btn btn-right${objeto.indice}">+</button>   
                      <button class="btnt btn-trash${objeto.indice}"><span class="fa-solid fa-trash"></button>                   
                      </div>`);                                    
// Adicionando valor do produto 
document.querySelector(".tprodutos").insertAdjacentHTML("beforeend", `<div class="vTotal divValor${objeto.indice} "><h1 class="valor${objeto.indice}"> ${objeto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1></div>`);   

};

// Função de tratamaneto de eventos do botão adicionar ítens
function verificaBotaoDireito(objeto){ 
let btnRight = document.querySelector(`.btn-right${objeto.indice}`);
let valorProduto = document.querySelector(`.valor${objeto.indice}`);
let input = document.querySelector(`.input${objeto.indice}`);
let btnMyCEP = document.querySelector(".btn-CEP");
btnRight.addEventListener("click", function() {      
  objeto.quantidade+=1;
  input.value=objeto.quantidade.toString().padStart(2,"0"); 
  let valorTotal = objeto.preco * objeto.quantidade;
  valorProduto.innerHTML = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  somaTotal(objeto);
  btnMyCEP.click();
});

};

// Função de tratamaneto de eventos do botão remover ítens
function verificaBotaoEsqurdo(objeto){ 
let btnLeft = document.querySelector(`.btn-left${objeto.indice}`);
let valorProduto = document.querySelector(`.valor${objeto.indice}`);
let input = document.querySelector(`.input${objeto.indice}`);
let btnMyCEP = document.querySelector(".btn-CEP");
btnLeft.addEventListener("click", function() {  
  if(objeto.quantidade > 1 ){
      objeto.quantidade -= 1;
      subtraiTotal(objeto);       
  } else {
      objeto.quantidade ;        
  };    
  btnMyCEP.click();
  input.value=objeto.quantidade.toString().padStart(2,"0");    
  let valorTotal = objeto.preco * objeto.quantidade;
  valorProduto.innerHTML = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
});
};

// Função de tratamaneto da lixeira para remover produtos do carrinho
function lixeiraProdutos(objeto){     
  let botaoLixeira = document.querySelector(`.btn-trash${objeto.indice}`);    
  let btnMyCEP = document.querySelector(".btn-CEP");

  botaoLixeira.addEventListener("click", function() {           
      subtraiTotal(objeto);     
      removeProdutos(objeto);  
      btnMyCEP.click();
  });
      
};
// Função de remoção do produto da lista
function removeProdutos(objeto){           
   document.querySelector(`.img${objeto.indice}`).remove();
   document.querySelector(`.desc${objeto.indice}`).remove();
   document.querySelector(`.divValor${objeto.indice}`).remove();          
   document.querySelector(`.step${objeto.indice}`).remove();
   
};

// Tratamaneto do valor do frete
function verificaTransporte(objeto,valorFrete){    
  const radioButton = document.querySelector(`#${objeto.value}`);
  const frete = document.querySelector(`.frete-${objeto.value}`);        
  const label = document.querySelector(".valor-frete");
  const totalProd = document.querySelector(".total-prod");

  frete.style.display = !radioButton.checked ? "none" : "grid" ;      
  label.innerHTML = "Frete:  " + valorFrete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  let somaGeral = totalGeral + valorFrete;
  totalProd.innerHTML = "Total geral:  " + somaGeral.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  radioButton.addEventListener("blur",()=>{        
      frete.style.display="none";  
      label.innerHTML = "Frete:  ";  
      somaGeral = totalGeral ;
      totalProd.innerHTML = "Total geral:  " + somaGeral.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  })
};
// Reraliza a soma de todos os valores unitários dos produtos
function somaTotal(objeto){
  const label = document.querySelector(".total-prod");
  totalGeral += objeto.preco;
  label.innerHTML = "Total geral:  " + totalGeral.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};
// Reraliza a soma de todos os valores unitários dos produtos
function subtraiTotal(objeto){
  const label = document.querySelector(".total-prod");
  totalGeral -= objeto.preco;
  label.innerHTML = "Total geral:  " + totalGeral.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};
// Configuração da mascara do CEP
function maskCEP(cep) {
  cep.value = cep.value.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2');
};
//Desmarca todos os radiobutons
function desmarcaRadios(){
  let radioButtons = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;
              
  }
};