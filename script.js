const todoName = document.querySelector('.todoName');
const todoDate = document.querySelector('.todoDate');

const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObj = todoList[i];
    const {name, date} = todoObj; // short cut of getting obj properties
    const html = `
        <div>${name}</div>
        <div>${date}</div> 
        <button class='deleteBtn' onclick='
          todoList.splice(${i}, 1);
          renderTodoList();
        '>Delete</button>`;
    todoListHTML += html;
    console.log(todoList);
  }
  
  document.querySelector('.todo-list').innerHTML = todoListHTML;
}

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
