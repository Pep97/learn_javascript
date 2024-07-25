/* const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

// render = it means to display something on the page
function renderTodoList () {
        let todoListHTML = '';

        for (let i = 0; i < todoList.length; i++) {
            const todo = todoList[i];
            const html = `<p>${todo}</p>`;
            todoListHTML += html;
        }

        console.log(todoListHTML);

        document.querySelector('.js-todo-list').innerHTML = todoListHTML;
        }

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);

    inputElement.value = ''; // remove the value and reset it.

    renderTodoList();
}
*/

document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
    addTodo();
})

const todoList = [{name: 'make dinner', 
dueDate: '2023-12-06'}, {
    name: 'wash dishes',
dueDate: '2023-12-06'
}
];

renderTodoList();

// render = it means to display something on the page
function renderTodoList () {
        let todoListHTML = '';

        todoList.forEach(function(todoObject, index){
            
            
            const {name, dueDate} = todoObject;
            const html = `
            
            <div>${name}</div>
            <div>${dueDate}</div>
            <button 
            class="delete-todo-button js-delete-todo-button"
            >delete</button>
            
            `;
            todoListHTML += html;
        });

        /*

        for (let i = 0; i < todoList.length; i++) {
            const todoObject = todoList[i];
            // const name = todoObject.name;
            // const dueDate = todoObject.dueDate;
            const {name, dueDate} = todoObject; // this take a name out of an object and it puts into a variable also called name.
            const html = `
            
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            "
            class="delete-todo-button"
            >delete</button>
            
            `;
            todoListHTML += html;
        } 
        */
        

        document.querySelector('.js-todo-list').innerHTML = todoListHTML;

        document.querySelectorAll('.js-delete-todo-button')
            .forEach((deleteButton, index) => {
                deleteButton.addEventListener('click', () => {
                    todoList.splice(index, 1);
                renderTodoList();
                }); // as soon as the function ends the index gets deleted.
            });

        }



        function addTodo() {
            const inputElement = document.querySelector('.js-name-input');
            const name = inputElement.value;
        
            const dateInputElement = document.querySelector('.js-due-date-input');
            const dueDate = dateInputElement.value;
        
            todoList.push({name: name, dueDate: dueDate});
        
            
        
            inputElement.value = ''; // remove the value and reset it.
        
            renderTodoList();
        }
        

