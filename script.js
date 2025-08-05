let tarefas = []


function adicionarTarefa(){
   let inputTarefa = document.getElementById("inputTarefa")
   let tarefa =inputTarefa.value.trim()
   let mensagem = document.getElementById("mensagem")
if (tarefa == ""){
    mensagem.textContent = "Digite algo para adicionar!!"
    mensagem.style.color = '#a34743'
    alert("Tente digitar algo na caixinha!!!")
 } else{
    mensagem.textContent = "Tarefa adicionada com sucesso!"
    mensagem.style.color = '#28a745'
    //alert("Tarefa Adicionada.")
    tarefas.push(tarefa)
    rederizarTarefas()
   }
   inputTarefa.value = ""
}

function rederizarTarefas(){
   let listaTarefas = document.getElementById("listaTarefas")
   listaTarefas.innerHTML = ""
   //let i = 0
   for (let i = 0; i < tarefas.length; i++){
      let novatarefa = document.createElement("li")
      novatarefa.textContent = tarefas [i]
      
      let botaoRemover = document.createElement("button")
      botaoRemover.className = "remover"
      botaoRemover.textContent = "Remover"
      botaoRemover.onclick = () => removerTarefa(i)

      let botaoEditar = document.createElement("button")
      botaoEditar.className = "editar"
      botaoEditar.textContent = "Editar"
      botaoEditar.onclick = () => editarTarefa(i)

      novatarefa.appendChild(botaoEditar)
      novatarefa.appendChild(botaoRemover)
      listaTarefas.appendChild(novatarefa)
   }
}
function removerTarefa(i) {
   
   if (confirm("Deseja remover item?")){
      if(confirm("Voce tem certeza que deseja remover?")){
      tarefas.splice(i,1)
      mensagem.textContent = "Tarefa Removida"
      mensagem.style.color = 'blue'
      rederizarTarefas()
   }}else{
      ""
   }
   
}
function editarTarefa(i){
   if (confirm("Deseja editar a tarefa?")){
      let tarefaEditada = prompt("Edite a tarefa:")
      if (tarefaEditada.trim() !== ""){
         tarefas [i] = tarefaEditada
         mensagem.textContent = "Tarefa editada com sucesso"
         mensagem.style.color = 'blue'
         alert("Editada com sucesso!")
         rederizarTarefas()
         }else{
            alert("Para editar é necessario digitar algo!!!")
            mensagem.textContent = "A tarefa não foi editada"
            mensagem.style.color = 'blue'
   
      }
   }
}
function limparLista(){
   if (tarefas == 0){
      alert("A sua lista não tem nada para apagar!!!")
      mensagem.textContent = "Lista vazia digite algo"
   }else{ 
   if (confirm("Deseja limpar toda a lista?")){ 
      if(confirm("Voce tem Certeza?")){
      tarefas.length = 0
      rederizarTarefas()
      mensagem.textContent = "Lista limpa com sucesso!!!"
      mensagem.style.color = 'green'
      alert("Toda a sua Lista foi apagada!!!")
      }}else {
      ""
   }}
}
