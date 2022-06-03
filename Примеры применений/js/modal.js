// Находим на странице нужные элементы:
const modalButtons = document.querySelectorAll("[data-modal-button]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
const allModals = document.querySelectorAll("[data-modal]");

// Кнопка открытия
modalButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    const modalID = this.dataset.modalButton;
    const modal = document.querySelector("#" + modalID);

    modal.classList.remove("hidden");

    /*
     Находим внутри открываемого модального окна блок .modal-window
     и запрещаем ему передавать клики его родителям
    */
    modal
      .querySelector(".modal-window")
      .addEventListener("click", function (event) {
        // Убираем возможность закрытия окна при клике на модальное окно
        event.stopPropagation();
      });
  });
});

// Кнопка закрытия
modalCloseButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    // Находим ближайшего родителя с аттрибутом data-modal
    const modal = this.closest("[data-modal]");

    modal.classList.add("hidden");
  });
});

// Закрытие модального окна при клике вне модального окна
allModals.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.add("hidden");
  });
});
