// Элементы формы
const squareInput = document.querySelector("#square-input");
const squareRange = document.querySelector("#square-range");
const inputs = document.querySelectorAll("input");

// Радиокнопки
const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');

// Чекбоксы
const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name= "walls"]');
const floor = document.querySelector('input[name="floor"]');

const basePrice = 6000;
const totalPriceElement = document.querySelector("#total-price");

// Связка range с текстовым полем
// Слушаем событие input
squareRange.addEventListener("input", function () {
  squareInput.value = squareRange.value;
});

// Связка текстового поля с range
squareInput.addEventListener("input", function () {
  squareRange.value = squareInput.value;
});

function calculate() {
  let totalPrice = basePrice * parseInt(squareInput.value); // 300 000

  // Расчитываем стоимость товара при нажатии на радиокнопку
  for (const radio of radioType) {
    if (radio.checked === true) {
      totalPrice = totalPrice * parseFloat(radio.value); //  3000 000 * 1.2
    }
  }

  for (const radio of radioBuilding) {
    if (radio.checked === true) {
      totalPrice = totalPrice * parseFloat(radio.value);  //  360 000 * 1.1
    }
  }

  for (const radio of radioRooms) {
    if (radio.checked === true) {
      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }

  if (ceilings.checked === true) {
    totalPrice = totalPrice * parseFloat(ceilings.value);
  }

  if (walls.checked === true) {
    totalPrice = totalPrice * parseFloat(walls.value);
  }

  if (floor.checked === true) {
    totalPrice = totalPrice * parseFloat(floor.value);
  }

  // Форматируем полученное число (с точками, пробелами и т.п.)
  // Выводим его в общую цену
  const formater = new Intl.NumberFormat("ru");
  totalPriceElement.innerText = formater.format(totalPrice);
}

calculate();

for (const item of inputs) {
  item.addEventListener("input", function (event) {
    calculate();
  });
}
