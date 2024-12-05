let inputTarefa = document.getElementById("nomeTarefa")
let buttonAdd = document.getElementById("adicionar")
let checkbox = document.getElementById("conclusao")

let tarefas = [
    {nome: "Exemplo2", conclusão: false},
    {nome: "Tarefa de Dw", conclusão: false}
]


function criarTarefa(){
    if(inputTarefa.value == ''){
        alert("Escreva o nome da tarefa")
    }else{
        tarefas.push({ nome: inputTarefa.value, conclusão:false})
        console.log(tarefas)
    }
}
buttonAdd.onclick = criarTarefa
//deu certo nn, mas é um começo


`<input type="checkbox" id="conclusao">
<p>Exemplo</p>
<div class="edicao">
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>`