let inputTodo = document.getElementById('todo-text');
let submitTodo = document.getElementById('submit-todo');
let containerTodo = document.getElementById('todo-container');

submitTodo.addEventListener('click', function(){
    let listTodo = document.createElement('article');

    listTodo.innerText = inputTodo.value;

    containerTodo.appendChild(listTodo);

    inputTodo.value = "";
});