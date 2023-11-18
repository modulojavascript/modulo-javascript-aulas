/*Obter o elemento pelo ID. 

let meuParagrafo = document.getElementById("meuParagrafo");

//Alterar o valor de dentro do meu elemento meuParagrafo

meuParagrafo.innerHTML = "Texto alterado com JavaScript"*/


//Função será executada quando clicarmos no botão

// function alterarTexto(){
//     //Obtem o elemento paragrafo com o id meuParagrafo
//     let meuParagrafo = document.getElementById("meuParagrafo");
//     //Pedir ao usuário que digite um novo texto
//     let novoTexto = prompt("Digite um novo texto: ");
//     //Criar uma condicional que verifica se o valor digitado é diferente de nulo//null
//     if (novoTexto != null) {
//         //Alterar o valor de meuParagrafo para o valor que o usuário digitou.
//         meuParagrafo.innerHTML = novoTexto
//     }
// }

let meuTexto = document.getElementById('meuParagrafo');
meuTexto.innerHTML = 'Texto alterado com JavaScript';

// Exemplo 2: Alterando estilos do elemento
meuTexto.style.color = 'purple';
meuTexto.style.fontSize = '20px';

// Exemplo 3: Criando um novo elemento e adicionando ao DOM
let novoElemento = document.createElement('p');
novoElemento.innerHTML = ('Novo parágrafo adicionado com sucesso!');
document.body.appendChild(novoElemento);

// Exemplo 4: Removendo um elemento do DOM
let removerElemento = document.getElementById('elementoParaRemover');
if(removerElemento) {
     removerElemento.parentNode.removeChild(removerElemento)
}

// Exemplo 5: Manipulando classes CSS
let minhaTagClass = document.getElementById('meuElementoComClasse');
minhaTagClass.classList.add('destaque');
minhaTagClass.classList.remove('normal');

// Exemplo 6: Mudando a cor de fundo ao clicar no botão
function mudarCorDeFundo() {
    let corpoSite = document.body;
    corpoSite.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    let letras = '0123456789ABCDEF';
    let cores = '#';
    for(let i = 0; i < 6; i++){
        cores += letras[Math.floor(Math.random() * 16)]
    }
    return cores;
}

let botaoMudarCor = document.createElement('button');
botaoMudarCor.textContent = 'Mudar meu botão';
botaoMudarCor.addEventListener('click', mudarCorDeFundo);
document.body.appendChild(botaoMudarCor);
