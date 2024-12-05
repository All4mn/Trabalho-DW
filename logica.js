let inputTarefa = document.getElementById("nomeTarefa")
let buttonAdd = document.getElementById("adicionar")
let buttonDel = document.querySelectorAll(".lixo")
let buttonEdit = document.querySelectorAll(".editar")
let checkbox = document.getElementById("conclusao")
let listaTarefas = document.querySelector(".tarefas")

let tarefas = [
    {nome: "Tarefa 1", conclusao: false},
    {nome: "Tarefa 2", conclusao: false},
    {nome: "Tarefa 2", conclusao: false},
    {nome: "Tarefa 2", conclusao: false},
    {nome: "Tarefa 2", conclusao: false},
]

function listTarefa(lista){
    listaTarefas.innerHTML = ``
    lista.forEach((tarefa, index) => {
        let novaTarefa = document.createElement("div");
        novaTarefa.classList.add("tarefa");
        novaTarefa.innerHTML = `<input type="checkbox" id="conclusao">
        <p>${tarefa.nome}</p>
        <div class="edicao">
        <svg class="lixo" id="${index}" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
        <svg class="editar" id="${index}" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>`
    
        listaTarefas.appendChild(novaTarefa);
    });

}

function criarTarefa(){
    if(inputTarefa.value == ''){
        alert("Escreva o nome da tarefa")
    }else{
        tarefas.push({ nome: inputTarefa.value, conclusao:false})
        console.log(tarefas)
        listTarefa(tarefas)
    }
}

function removerTarefa(event){
    const index = parseInt(event.target.id);  // Converte o id de string para número
    tarefas.splice(index, 1);  // Remove o item do array
    listTarefa(tarefas);  // Atualiza a lista de tarefas na tela
}


function editarTarefa(){

}

buttonAdd.onclick = criarTarefa
buttonDel.forEach((elemento) =>{
    elemento.addEventListener('click', removerTarefa)
});
listTarefa(tarefas)