// * Todas as funções relacionadas ao botão "Ordenar por prazo"

let btnOrdenar = document.querySelector("#ordenar");

btnOrdenar.addEventListener("click", ordenaData);

// Ordenar a lista por data
function ordenaData() {
  let tarefas = tabela;
  tarefas.sort((a, b) => new Date(a.data) - new Date(b.data));

  desenhaTabela(tarefas);
}
