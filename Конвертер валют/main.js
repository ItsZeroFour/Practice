/* Объект с 3-мя курсами валют */
const rates = {};

/* Элементы для отображения валют */
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');

/* Элементы формы, ввод суммы, выбор валюты */
const input = document.querySelector("#input");
const result = document.querySelector("#result");
const select = document.querySelector("#select");

// getCurrencies();

/* Таймер по обновлению курса валют */
setInterval(getCurrencies, 10000);

/* 
  Конвертируем данные с ссылка в javascript объект
  Дожыдаемся обработки json файла при помощи await
  Код не будет выполняться, пока не получим ответ от сервера 
*/

async function getCurrencies() {
  const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");

  /*
  Достаем данные из promise и
  записываем в переменную
*/
  const data = await response.json();
  const result = await data;

  /* Записываем валюты в массив */
  rates.USD = result.Valute.USD;
  rates.EUR = result.Valute.EUR;
  rates.GBP = result.Valute.GBP;

  /*
  Вставляем значения валют
  и обрезаем их до 2 знаков
*/
  elementUSD.textContent = rates.USD.Value.toFixed(2);
  elementEUR.textContent = rates.EUR.Value.toFixed(2);
  elementGBP.textContent = rates.GBP.Value.toFixed(2);

  /* Извеняем цвет при росте/спаже волюты */
  if (rates.USD.Value > rates.USD.Previous) {
    elementUSD.classList.add("top");
  } else {
    elementUSD.classList.add("bottom");
  }

  /* Извеняем цвет при росте/спаже волюты */
  if (rates.EUR.Value > rates.EUR.Previous) {
    elementEUR.classList.add("top");
  } else {
    elementEUR.classList.add("bottom");
  }

  /* Извеняем цвет при росте/спаже волюты */
  if (rates.GBP.Value > rates.GBP.Previous) {
    elementGBP.classList.add("top");
  } else {
    elementGBP.classList.add("bottom");
  }
}

/* Конвертируем валюту */
/* Слушаем изменения в текстовом поле и в select */
input.oninput = convertValue;
select.oninput = convertValue;

/* Функция конвертации */
function convertValue() {
  result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(
    2
  );
}
