//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

var listaAmigos = []
const lista = document.querySelector('#listaAmigos')
const resultado = document.querySelector('#resultado')

function adicionarAmigo() {
    const amigo = document.querySelector('#amigo');
    listaAmigos.push(amigo.value)
    atualizarLista();
}

function atualizarLista(){
    console.log(listaAmigos)
    lista.innerHTML=''
    listaAmigos.forEach(element => {
        lista.innerHTML+=`<li>${element}</li>`
    });

}

function sortearAmigo(){
    var tamanhoLista = listaAmigos.length;
    var indice = Math.floor((Math.random()*tamanhoLista));
    mostrarResultado(indice);
}

function mostrarResultado(indice){
    resultado.innerHTML=`${listaAmigos[indice]}`;
}
