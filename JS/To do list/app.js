// To do - Отслеживание того, что мы написали в инпут и т.п.

let addMessage = document.querySelector('.message')         //  Geve Selects
let addButton = document.querySelector('.add')
let todo = document.querySelector('.todo')

let todoList = []

if (localStorage.getItem('todo')) {                         //  При обнавлении страницы текст не будет стираться
    todoList = JSON.parse(localStorage.getItem('todo'))
    displayMessages()
}

addButton.addEventListener('click', function() {            //  Create function

    let newTodo = {
        todo: addMessage.value,
        checked: false,                                     //  По умолчанию будет "false"
        important: false
    }

    todoList.push(newTodo)
    displayMessages()
    localStorage.setItem('todo', JSON.stringify(todoList))  //  Преобразуем написанный текст в строку
})

function displayMessages() {
    let displayMessage = ''
    todoList.forEach(function(item, i) {
         displayMessage += `                                
        <li>
        <input type="checkbox" id="item_${i}" ${item.checked ? 'checked' : ''}>
        <label for="item${i}">${item.todo}</label>
        </li>
        `
        todo.innerHTML = displayMessage
    })

} 

todo.addEventListener('change', function(event) {
    let idInput = event.target.getAttribute('id')
    let forLabel = todo.querySelector('[for=' + idInput + ']')
    console.log(forLabel);
})