function changeColor() {

  const hex_numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  // Сюда будет записывать хеш
  let hexcode = '';

  // Перебор значений из массива и выбор из них рамное число и букву
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hex_numbers.length);

    // Подставляем в hexcode рандомное значение из randomIndex
    hexcode += hex_numbers[randomIndex];
  }

  // Меняем значение в span
  document.querySelector('.hex-code').innerHTML = hexcode;
  // Меня фон
  document.getElementsByTagName('body')[0].style.background = '#' + hexcode;
}