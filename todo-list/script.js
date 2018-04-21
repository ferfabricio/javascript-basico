const todos = []
var id = 0

const todo = {
  descricao: 'Esta é a tarefa a ser realizada',
  status: 'pendente'
}

const adicionarNaLista = (descricao) => {
  const item = {
    id: id,
    ...todo,
    descricao
  }
  todos.push(item)
  id++

  return item
}

const adicionar = () => {
  const descricao = document.getElementById('descricao').value
  document.getElementById('descricao').value = ''
  const item = adicionarNaLista(descricao)
  adicionarItem(item)
}

const adicionarItem = (item) => {  
  const el = document.createElement('li')
  el.innerHTML = htmlItem(item)
  adicionarNoDocumento(el)
}

const htmlItem = ({id, descricao}) => {
  return `<div class="descricao" onclick="done(this, ${id})" >${descricao}</div><button onclick="remover(this, ${id})">X</button>`
}

const done = (element, id) => {
  element.classList.toggle('done')

  const item = todos.filter((e) => e.id == id)
  if (item.length === 1) {
    todos[todos.indexOf(item[0])].status = todos[todos.indexOf(item[0])].status === 'pendente' ? 'done' : 'pendente'
  }
}

const adicionarNoDocumento = (item) => {
  document.getElementById('lista').appendChild(item)
}

const remover = (element, id) => {
  const item = todos.filter((e) => e.id == id)

  if (item.length === 1) {
    element.closest('li').remove()
    todos.splice(todos.indexOf(item[0]), 1)
  }
}