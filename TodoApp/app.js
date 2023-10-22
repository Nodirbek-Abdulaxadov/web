var todos = [];

var todoInput = document.getElementById('todo');
var collection = document.getElementsByClassName('todo-items')[0];

function check(todo) {
    if (todo.classList.contains('text-decoration-line-through')) {
        todo.classList.remove('text-decoration-line-through');
    }
    else {
        todo.classList.add('text-decoration-line-through');
    }
}


function createTodo(str) {
    todos.push(str);
    return `
    <div class="todo-item mt-3">
        <div class="d-inline form-check">
            <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="t${todos.length}">
            <label onclick="check(this)" class="form-check-label" for="t${todos.length}">
                ${str}
            </label>
        </div>
        <div>
            <button class="btn btn-primary"><i class="bi bi-pencil-square"></i></button>
            <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
        </div>
    </div>
    `;
}

function addtodo() {
    //console.log(createTodo(todoInput.value))
    collection.innerHTML += createTodo(todoInput.value);
}

