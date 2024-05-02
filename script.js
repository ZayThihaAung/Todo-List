const todoName = document.querySelector('.todoName');
const todoDate = document.querySelector('.todoDate');

const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach(todoObj => {
    const {name, date} = todoObj; // short cut of getting obj properties
    const html = `
        <div>${name}</div>
        <div>${date}</div> 
        <button class='deleteBtn'>Delete</button>`;
    todoListHTML += html;
  })
  
  document.querySelector('.todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.deleteBtn')
    .forEach((deleteBtn, index)=> {
      deleteBtn.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      })
    });
}

document.querySelector('.addBtn')
  .addEventListener('click', () => {
    addTodo();
})

function addTodo() {
  const todoNameValue = todoName.value;
  const todoDateValue = todoDate.value;

  todoList.push({
    name : todoNameValue,
    date : todoDateValue
  });

  todoName.value = '';
  todoDate.value = '';
  
  const todoListString = JSON.stringify(todoList);
  localStorage.setItem('todoList', todoListString);

  renderTodoList();
}
