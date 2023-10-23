var todos = [];

var todoInput = document.getElementById("todo");
var collection = document.getElementsByClassName("todo-items")[0];
var addbtn = document.getElementById('addbtn');
var countTitle = document.getElementById('countTitle');
var selectedTodo = todos[0];

function check(todo) {
  var todoItem = todos.find(t => 'label' + t.Id == todo.id);
  if (todo.classList.contains("text-decoration-line-through")) {
    todo.classList.remove("text-decoration-line-through");
    todoItem.Finished = false;
  } else {
    todo.classList.add("text-decoration-line-through");
    todoItem.Finished = true;
  }

  setCount();
  saveTodos();
}

function createTodo(str, id) {
  return `
    <div class="todo-item mt-3" id="d${id}">
        <div class="d-inline form-check">
            <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="checkbox${id}">
            <label onclick="check(this)" class="form-check-label" id="label${id}" for="checkbox${id}">
                ${str}
            </label>
        </div>
        <div>
            <button class="btn btn-primary" id="edit_btn${id}" onclick="editTodo(this.id)"><i class="bi bi-pencil-square"></i></button>
            <button class="btn btn-danger" id="delete_btn${id}" onclick="if(confirm('Are you sure delete this?')) deleteTodo(this.id);"><i class="bi bi-trash"></i></button>
        </div>
    </div>
    `;
}

function addtodo() {
  if (addbtn.innerText == "Add") {
    //yangi todo uchun Id tayinlash
    let id = 1;
    if (todos.length > 0) {
      id = todos[todos.length - 1].Id + 1;
    }

    var newTodo = {
      Id: id,
      Todo: todoInput.value,
      Finished: false,
    };

    //console.log(createTodo(todoInput.value))
    if (todoInput.value != "") {
      collection.innerHTML += createTodo(todoInput.value, id);
      todos.push(newTodo);
    }
    todoInput.value = "";
  }
  else {
    //4. htmldan o'zgartirish
    selectedTodo.Todo = todoInput.value;
    var todoLabel = document.getElementById('label' + selectedTodo.Id);
    todoLabel.innerHTML = selectedTodo.Todo;
    addbtn.innerText = "Add";
  }

  setCount();
  saveTodos();
}

function editTodo(id) {
    //1. tanlangan todoni topish
    selectedTodo = todos.find(t => 'edit_btn' + t.Id == id);

    //2. tanlangan todoni inputga chiqarish
    if (selectedTodo != null) {
        todoInput.value = selectedTodo.Todo;

        //3. addbtn textini o'zgartirish
        addbtn.innerText = "Save";
    }
}

function deleteTodo(id) {
  var todo = todos.find(t => 'delete_btn' + t.Id == id);
  todos.pop(todo);
  var div = document.getElementById('d' + todo.Id);
  div.remove();
  saveTodos();
}

function setCount() {
  var count = todos.filter(t => t.Finished == false).length;
  if (count > 0) {
    countTitle.innerText = `You have ${count} tasks to complete!`;
  }
  else {
    countTitle.innerText = "You have not any todos yet!";
  }
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
  var json = localStorage.getItem('todos');
  if (json != null) {
      todos = JSON.parse(json);
      for (let i = 0; i < todos.length; i++) {
          var todo = todos[i];
          collection.innerHTML += createTodo(todo.Todo, todo.Id);
          if (todo.Finished == true) {
              var todoCheck = document.getElementById('checkbox' + todo.Id);
              todoCheck.setAttribute("checked", true);
              var todoLabel = document.getElementById('label' + todo.Id);
              if (todoLabel.classList.contains('text-decoration-line-through')) {
                  todoLabel.classList.remove('text-decoration-line-through');
              }
              else {
                  todoLabel.classList.add('text-decoration-line-through');
              }
          }
      }

      var count = todos.filter(t => t.Finished == false).length;
      if (count > 0) {
          countTitle.innerText = "You have " + count + " tasks to complete";
      }
      else {
        countTitle.innerText = "You have no any todos yet!";
      }
  }
}