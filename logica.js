let inputTarefa = document.getElementById("nomeTarefa");
let buttonAdd = document.getElementById("adicionar");
let listaTarefas = document.querySelector(".tarefas");
let numeros = document.getElementById("numeros");
let porcentagem = document.getElementById("porcentagem");
let modal = document.getElementById("modal");
let fechar = document.getElementById("fechar");

function numeroTarefas() {
  const x = tarefas.length;
  const y = tarefas.filter((tarefa) => tarefa.conclusao).length;
  numeros.innerText = `${y}/${x}`;
  const p = (100 * y) / x;
  porcentagem.style.width = `${p}%`;
}

let tarefas = [
  { nome: "Tarefa genérica 1", conclusao: false },
  { nome: "Tarefa genérica 2", conclusao: false },
];

// função para gerar a lista
function listTarefa(lista) {
  listaTarefas.innerHTML = ``;
  lista.forEach((tarefa, index) => {
    let novaTarefa = document.createElement("div");
    novaTarefa.classList.add("tarefa");

    novaTarefa.innerHTML = `<input type="checkbox" id="conclusao${index}" ${
      tarefa.conclusao ? "checked" : ""
    }>
        <p id="nomeTarefa${index}">${tarefa.nome}</p>
        <input type="text" class="nomeTarefa" id="editTarefa${index}" value="${
      tarefa.nome
    }" style="display: none;">
        <button class="salvar" id="salvar${index}" style="display: none;">Salvar</button>
        <div class="edicao">
            <svg class="lixo" id="lixo${index}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
            <svg class="editar" id="editar${index}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
        </div>`;

    listaTarefas.appendChild(novaTarefa);

    //adiciona um evento de clique e retorna o id do svg

    let buttonDel = document.querySelector(`#lixo${index}`);
    buttonDel.addEventListener("click", () => removerTarefa(index));

    let buttonEdit = document.querySelector(`#editar${index}`);
    buttonEdit.addEventListener("click", () => editarTarefa(index));

    let buttonSave = document.querySelector(`#salvar${index}`);
    buttonSave.addEventListener("click", () => salvarEdicao(index));

    let checkbox = document.querySelector(`#conclusao${index}`);
    checkbox.addEventListener("change", () => {
      tarefas[index].conclusao = checkbox.checked;
      numeroTarefas();
    });

    let inputTarefaEdit = document.getElementById(`editTarefa${index}`);
    inputTarefaEdit.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        salvarEdicao(index);
      }
    });
  });

  numeroTarefas();
}

//função para adicionar uma tarefa
function criarTarefa() {
  //verifica se o input tá vazio
  if (inputTarefa.value === "") {
    alert("Escreva o nome da tarefa");
  } else {
    tarefas.unshift({ nome: inputTarefa.value, conclusao: false });
    inputTarefa.value = "";
    console.log(tarefas);
    listTarefa(tarefas);
  }
}

//função para remover uma tarefa
function removerTarefa(index) {
  tarefas.splice(index);
  listTarefa(tarefas);
  console.log(tarefas);
}

//função para editar uma tarefa
function editarTarefa(index) {
  let nomeTarefa = document.getElementById(`nomeTarefa${index}`);
  let inputTarefaEdit = document.getElementById(`editTarefa${index}`);
  let buttonSalvar = document.getElementById(`salvar${index}`);
  let buttonEdit = document.getElementById(`editar${index}`);
  let buttonDel = document.getElementById(`lixo${index}`);

  nomeTarefa.style.display = "none";
  inputTarefaEdit.style.display = "block";
  buttonSalvar.style.display = "block";
  buttonEdit.style.display = "none";
  // pra n poder remover enquando edita
  buttonDel.style.display = "none";
}

function salvarEdicao(index) {
  let inputTarefaEdit = document.getElementById(`editTarefa${index}`);
  let nomeTarefa = document.getElementById(`nomeTarefa${index}`);

  if (inputTarefaEdit.value === "") {
    alert("A tarefa deve ter um nome!");
  } else {
    tarefas[index].nome = inputTarefaEdit.value;
  }

  nomeTarefa.textContent = inputTarefaEdit.value;

  listTarefa(tarefas);
}

buttonAdd.onclick = criarTarefa;
inputTarefa.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    criarTarefa();
  }
});

//comando para abrir o modal
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key == "h") {
    event.preventDefault();
    if (modal.style.display === "flex") {
      modal.style.display = "none";
    } else {
      modal.style.display = "flex";
    }
  }
});

fechar.onclick = function () {
  modal.style.display = "none";
};
listTarefa(tarefas);

// função para mudar o tema
const themeToggleButton = document.getElementById("mudar-tema");

themeToggleButton.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});
