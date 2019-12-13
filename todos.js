let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('list_todo')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for(todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        let posicion = todos.indexOf(todo);
        linkElement.setAttribute('onclick', `deleteTodo(${posicion})`);

        let linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    let todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";

    renderTodos();
    saveToStorage();
}

function deleteTodo(posicion) {
    todos.splice(posicion, 1);
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function saveToStorage() {
    localStorage.setItem('list_todos',  JSON.stringify(todos));
}