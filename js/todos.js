function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(Response => Response.json())
    .then(data => displayTodos(data))
}

function displayTodos(todos){
    // create the child element
    const todoContainer = document.getElementById('todos-container');
    for(const todo of todos){
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        console.log(todos);
        // set innerText or innerHTML
        todoDiv.innerHTML = `
           <h3>title: ${todo.title}</h3>
           <p>user: ${todo.userId}</p>
           <p>Is completed : ${todo.completed}</p>

        
        `;
        // appendChild
        todoContainer.appendChild(todoDiv);
    }
}

loadTodos();