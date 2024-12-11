let inputTarefa = document.getElementById("nomeTarefa")
let buttonAdd = document.getElementById("adicionar")
let checkbox = document.getElementById("conclusao")
let listaTarefas = document.querySelector(".tarefas")

let tarefas = [
    {nome: "Tarefa 1", conclusao: false},
    {nome: "Tarefa 2", conclusao: false},
]

function listTarefa(lista) {
    listaTarefas.innerHTML = ``;
    lista.forEach((tarefa, index) => {
        let novaTarefa = document.createElement("div");
        novaTarefa.classList.add("tarefa");

        novaTarefa.innerHTML = `<input type="checkbox" id="conclusao${index}">
        <p id="nomeTarefa${index}">${tarefa.nome}</p>
        <input type="text" class="nomeTarefa" id="editTarefa${index}" value="${tarefa.nome}" style="display: none;">
        <button class="salvar" id="salvar${index}" style="display: none;">Salvar</button>
        <div class="edicao">
            <svg class="lixo" id="lixo${index}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
            <svg class="editar" id="editar${index}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
        </div>`;

        listaTarefas.appendChild(novaTarefa);

        let buttonDel = document.querySelector(`#lixo${index}`);
        buttonDel.addEventListener("click", () => removerTarefa(index));

        let buttonEdit = document.querySelector(`#editar${index}`);
        buttonEdit.addEventListener("click", () => editarTarefa(index));

        let buttonSave = document.querySelector(`#salvar${index}`);
        buttonSave.addEventListener("click", () => salvarEdicao(index));
    });
}



function criarTarefa(){
    if(inputTarefa.value === ''){
        alert("Escreva o nome da tarefa")
    }else{
        tarefas.push({ nome: inputTarefa.value, conclusao:false})
        inputTarefa.value = ""
        console.log(tarefas)
        listTarefa(tarefas)
    }
}

function removerTarefa(index){
    tarefas.splice(index, 1)
    listTarefa(tarefas)
}

function editarTarefa(index){
    let nomeTarefa = document.getElementById(`nomeTarefa${index}`)
    let inputTarefaEdit = document.getElementById(`editTarefa${index}`)
    let buttonSalvar = document.getElementById(`salvar${index}`)
    let buttonEdit = document.getElementById(`editar${index}`)
    let buttonDel = document.getElementById(`lixo${index}`)

    nomeTarefa.style.display = "none"
    inputTarefaEdit.style.display = "block"
    buttonSalvar.style.display = "block"
    buttonEdit.style.display = "none"
    // pra n poder remover enquando edita
    buttonDel.style.display = "none"
}

function salvarEdicao(index){
    let inputTarefaEdit = document.getElementById(`editTarefa${index}`)
    let nomeTarefa = document.getElementById(`nomeTarefa${index}`)

    if(inputTarefaEdit.value === ''){
        alert("A tarefa deve ter um nome!")
    }else{
        tarefas[index].nome = inputTarefaEdit.value
    }

    nomeTarefa.textContent = inputTarefaEdit.value

    listTarefa(tarefas)
}

buttonAdd.onclick = criarTarefa
inputTarefa.addEventListener("keypress", (event)=>{
    if(event.key === 'Enter'){
        criarTarefa()
    }
})
listTarefa(tarefas)