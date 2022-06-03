// Get data
const buttonMinus = document.querySelector('[data-action="minus"]');
const buttonPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// Click Event
buttonMinus.addEventListener('click', function() {

  // Переписываем строчку на число при помощи parseInt
  if (parseInt(counter.innerText) > 1) {
    // Если число меньше 1, то код не будет выполнятся
      counter.innerText = --counter.innerText;
  }

});

// Увеличиваем значение и сразу его возвращаем
buttonPlus.addEventListener('click', function() {
  counter.innerText = ++counter.innerText;
})