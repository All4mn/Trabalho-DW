let inputNT = document.getElementById("nomeTarefa")
let buttonAdd = document.getElementById("adicionar")
let inputTask = document.getElementsByClassName("tarefa")
let checkbox = document.getElementById("conclusao")
let botaoTema = document.getElementById("mudar-tema")

let tarefas = [
    {nome: "inputNT", conclusão: false},
    {nome: "Tarefa de Dw", conclusão: false}
]

function criarTarefa(){
    let div = document.createElement("div.tarefa")
    div.nome = inputNT
}
buttonAdd.onclick = criarTarefa
//deu certo nn, mas é um começo

