// Изменение числа ползунка
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const simbol = ['!', '@', '#', '$', '%', '&', '*']

document.querySelector('#param-1').oninput = function () {
  // console.log(this.value);
  document.querySelector('#password-length').innerHTML = this.value;
}

generatePass();                                                                       //  Запуск при старте

document.querySelector('.btn').onclick = generatePass;

// Добавление в массив цифр, спец.символов и т.д.
function generatePass() {
  let result = [];
  if (document.getElementById('param-2').checked) {
    result = result.concat(numbers);
  }
  if (document.getElementById('param-3').checked) {
    result = result.concat(letters);
  }
  if (document.getElementById('param-4').checked) {
    result = result.concat(capitalLetters);
  }
  if (document.getElementById('param-5').checked) {
    result = result.concat(simbol);
  }
  result.sort(compareRandom);                                                         //  Перемешывание массива
  // console.log(result);

  document.querySelector('.out').innerHTML = '';
  for (let k = 0; k < 6; k++) {
    let out = '';
    const passwordLength = parseInt(document.getElementById('param-1').value);          //  Длина пароля
    for (let i = 0; i < passwordLength; i++) {                                          //  Рандомное значение из массива result
    out += result[randomInteger(0, result.length - 1)];
  }
    // console.log(out);
    document.querySelector('.out').innerHTML += '<p>'+ out +'</p>';
  }
}


function compareRandom() {
  return Math.random() - 0.5;
} 

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand; 
}


// Дикция