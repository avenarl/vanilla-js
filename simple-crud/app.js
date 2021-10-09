let inputTodo = document.getElementById('todo-text');
let submitTodo = document.getElementById('submit-todo');
let containerTodo = document.getElementById('todo-container');

submitTodo.addEventListener('click', function(){
    let listTodo = document.createElement('article');

    listTodo.innerText = inputTodo.value;

    containerTodo.appendChild(listTodo);

    inputTodo.value = "";

    listTodo.addEventListener('click', function() {
        listTodo.style.textDecorationLine = 'line-through';

        let doneTodo = document.createElement('article');

        let containerDone = document.getElementById('done-container');

        containerDone.appendChild(listTodo);

    })
});

