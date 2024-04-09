// * Todas as funções relacionadas ao menu "Filtrar por disciplina"

let btnFiltrar = document.querySelector("#filtrar");

btnFiltrar.addEventListener("click", ExibeMenuSuspenso);

// Alternar a exibição do menu suspenso de filtro
function ExibeMenuSuspenso() {
  const menu = document.getElementById("menuFiltrar");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

// Filtrar a lista de tarefas com base na disciplina selecionada
function filtraTarefas() {
  // Pega o valor do filtro selecionado
  const filtroSelecionado = document.getElementById("menuFiltrar").value;

  // Caso o filtro selecionado seja vazio, exibe a listagem completa
  if (filtroSelecionado == "") {
    desenhaTabela(tabela);

    // Senão, exibe a listagem filtrada
  } else {
    const listaFiltrada = tabela.filter(
      (tarefa) => tarefa.disciplina === filtroSelecionado
    );
    desenhaTabela(listaFiltrada);
  }
}
