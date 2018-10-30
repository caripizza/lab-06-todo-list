
// ${todo.done ? 'Complete' : 'Incomplete'} 
//   ^ ^ if todo.done is True, type Complete otherwise Incomplete
function makeTodo(todo) {
    console.log('hiiiiiii', todo.done);
    const html = /*html*/`
        <li class="todo">
            <h3 class="name">
                ${todo.due} ${todo.task}
            </h3>
            <p>${todo.done === true ? 'Complete' : 'Incomplete'}</p>
            <button class="danger"> Remove </button>
        </li>
    `;

    const template = document.createElement('template');

    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('todos');

const todoList = {

    init(todos, onRemove) {
        for(let i = 0; i < todos.length; i++) {
            todoList.add(todos[i]);
        }
        todoList.onRemove = onRemove;
    },
    add(todo) {
        const dom = makeTodo(todo);

        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            todoList.onRemove(todo);
            listItem.remove();
        });

        list.appendChild(dom);
    }
};

export default todoList;