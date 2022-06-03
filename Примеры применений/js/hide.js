const button = document.querySelector("#button");
const content = document.querySelector("#content");
const text = document.querySelector('.md-4');

button.addEventListener("click", function () {

    /**
     * Меняем текст внутри кнопки в зависимости от того,
     * имеет ли контент класс content-hidden или нет
     */
  if (content.classList.toggle('content-hidden')) {
    button.textContent = "Открыть блок";
    text.textContent = 'Открыть блок';

  } else {
    button.textContent = "Закрыть блок";
    text.textContent = 'Скрыть блок';

  }


});
