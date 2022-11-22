const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList')
const TODOS_LS = 'toDos'

function paintToDo(text) {
  const li = document.createElement('li')
  const delBtn = document.createElement('button')
  delBtn.innerText = '❌'
  const span = document.createElement('span')
  span.innerText = text
  li.appendChild(delBtn)
  li.appendChild(span)
  toDoList.appendChild(li)
}

function handleSubmit(event) {
  event.preventDefault()
  const currentValue = toDoInput.value
  paintToDo(currentValue)
  toDoInput.value = '' //submit처럼 값을 보냈을때 input창에 있는 값 초기화
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS)
  if (toDos !== null) {
  }
}
function init() {
  loadToDos()
  //input 태그에 submit 이벤트가 발생했을 경우
  toDoForm.addEventListener('submit', handleSubmit)
}

init()