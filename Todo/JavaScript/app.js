const addMessage = document.querySelector(".message");
const addButton = document.querySelector(".add");
const todo = document.querySelector(".todo");

/*
  Записываем в массив введенные данные
  и при помощи forEach записываем их
*/
let todoList = [];

/*
 Сохраняем введенные данные пользователем
 при помощи LocalStorage
*/
if (localStorage.getItem("todo")) {
  todoList = JSON.parse(localStorage.getItem("todo"));
  displayMessges();
}

addButton.addEventListener("click", () => {
  const newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
  };

  todoList.push(newTodo);
  displayMessges();
  // Сохраняем данные в LocalStorage
  localStorage.setItem("todo", JSON.stringify(todoList));
});

function displayMessges() {
  /*
  Создаем пустую переменную,
  что бы введенные данные накладывались
  друг на друга, а не перезаписывались
*/
  let displayMessage = "";

  // Генерируем HTML верстку
  todoList.forEach((item, index) => {
    displayMessage += `
      <li>
        <input type="checkbox" id="item__${index}" ${
      item.checked ? "checked" : ""
    }>
        <label class="${
          item.important ? "important" : ""
        }" for="item__${index}">${item.todo}</label>
      </li>
    `;

    todo.innerHTML = displayMessage;
  });
}

// Сохраняем выбранный элемент (сохраняем галочку)
todo.addEventListener("change", (event) => {
  const idInput = event.target.getAttribute("id");
  const forLabel = todo.querySelector(`[for=${idInput}]`);
  const valueLabel = forLabel.innerHTML;

  todoList.forEach((item) => {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem("todo", JSON.stringify(todoList));
    }
  });
});

todo.addEventListener("contextmenu", (event) => {
  // Отменяем стандартные поведения браузера
  // При правом клике меню не будет открываться
  event.preventDefault();

  todoList.forEach((item, index) => {
    if (item.todo === event.target.innerHTML) {
      // При зажатом ctrl и клике на правую кнопку мыши - удаляется элемент
      if (event.ctrlKey || event.metaKey) {
        todoList.splice(index, 1);
      } else {
        item.important = !item.important;
      }

      displayMessges();
      localStorage.setItem("todo", JSON.stringify(todoList));
    }
  });
});
