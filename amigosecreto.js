let listaDeAmigos = [];
let numeroDeAmigos = 4; //Aqui definimos a capacidade máxima de amigos, sendo o mínimo igual a 2
let cont = 0;           //Parâmetro para contar o número de amigos
let indiceListaDeAmigos = 0;         //Parâmetro referente ao índice da lista
let amigoNome;

function lista() {
    const lista = document.getElementById('listaDeAmigos'); //Pega o elemento na linha 27 do arquivo index.html
    lista.innerHTML = ''; //Insere uma lista vazia na página
    listaDeAmigos.forEach((amigo) =>{
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    })
}
function adicionarAmigo(){
    if(cont == numeroDeAmigos){
        alert('Você inseriu o número máximo de participantes, clique em Sortear Amigo');
        limparCampo();
        return;
    }
    amigoNome = document.querySelector('#amigo').value.trim();//Captura o nome digitado pelo usuário
    if(amigoNome != ''){
        listaDeAmigos.push(amigoNome);
        console.log(listaDeAmigos);
    }else{
        alert('Você precisa digitar um nome válido!');
    }
    limparCampo();
    lista();
    cont = cont + 1;
}

function limparCampo(){
    document.querySelector('input').value = ''; //Acessa o que está no campo input e apaga
}

//Essa função sorteia um elemento aleatório da listaDeAmigos e mostra na tela o amigo secreto
function sortearAmigo(listaDeAmigos){
    let tamanhoDaLista = listaDeAmigos.length;
    let amigoSorteado;
    if(tamanhoDaLista < 2){
        alert('Sorteio inválido, adicione mais amigos à lista');
        return;
    }else{
        indiceListaDeAmigos = parseInt(Math.random() * listaDeAmigos.length); //Math.random() gera um número aleatório entre 0 e 1, depois é feita a multiplicação por listaDeAmigos.lenght para obtermos um número válido de indice.
        console.log(indiceListaDeAmigos);
        amigoSorteado = listaDeAmigos[indiceListaDeAmigos];
        console.log(amigoSorteado)

        //Acessa o elemento h1 e insere uma mensagem de "Parabéns, o amigo secreto é você ${amigoSorteado}
        exibeTextoNaTela('ul', `Parabéns, o amigo secreto é você ${amigoSorteado}`);
    }
}

function exibeTextoNaTela(tag, texto) {
    let mensagem = document.querySelector(tag);
    mensagem.innerHTML = texto;
    listaDeAmigos = []; //Zera a lista para um novo sorteio
    cont = 0;
    return;
}