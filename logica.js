let inputNT = document.getElementById("nomeTarefa")
let buttonAdd = document.getElementById("adicionar")
let inputTask = document.getElementsByClassName("tarefa")
function criarTarefa(){
    let div 
    div = document.createElement("tarefa")
    div.nome = inputNT
}
buttonAdd.onclick = criarTarefa
//deu certo nn, mas é um começo