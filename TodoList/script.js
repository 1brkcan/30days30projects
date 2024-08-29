
const todoİnput = document.getElementById("todoİnput");
const todoList = document.getElementById("todoList");


const savedTodosJson = localStorage.getItem("todos");
const savedTodos = savedTodosJson ? JSON.parse(savedTodosJson): [];


for(const todo of savedTodos){
    adTodoToList(todo);
}


function addTodo(){

    const todoText = todoİnput.value.trim();

    if (todoText === "") return;

    const todo = {
        id: Date.now(),
        text: todoText,
        completed: false

    };

    savedTodos.push(todo);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    adTodoToList(todo);
    todoİnput.value = "";


}

//! Görev tamamlandı durumunu değiştiren fonksiyon

function toggleComplete(id){

    const todo = savedTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed; //? true ise false , false ise true yap.
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    const todoElement = document.getElementById(id);
    todoElement.classList.toggle("completed", todo.completed);

}

//! Görevi düzenleme fonksiyonu

function editTodo(id){

    const todo = savedTodos.find((todo) => todo.id === id);
    const newText = prompt("Görevi düzenleyin: ", todo.text)

    if (newText !== null) {
        todo.text = newText.trim();
        localStorage.setItem("todos", JSON.stringify(savedTodos));
        const todoElement = document.getElementById(id);
        todoElement.querySelector("span").textContent = newText;
    }


}

//! Görevi silme fonksiyonu

function removeTodo(id) {
    const todoElement = document.getElementById(id);
    todoElement.style.animation = "fadeOut .3s ease";

    setTimeout(() => {

        savedTodos.splice(savedTodos.findIndex(todo => todo.id === id), 1);
        localStorage.setItem("todos", JSON.stringify(savedTodos));
        todoElement.remove();

    }, 300);
    
}

//! Listeye Ekleme Fonksiyonu

function adTodoToList(todo){

    const li = document.createElement("li");
    li.setAttribute("id", todo.id);
    li.innerHTML =

    `
        <span title= "${todo.text}">${todo.text}</span>
        <button onclick="toggleComplete(${todo.id})"><i class="fa-solid fa-check"></i></button>
        <button onclick="editTodo(${todo.id})"><i class="fa-solid fa-pen-to-square"></i></button>
        <button onclick="removeTodo(${todo.id})"><i class="fa-solid fa-trash"></i></button>


    `;
    li.classList.toggle("completed", todo.completed);
    todoList.appendChild(li);

}






























