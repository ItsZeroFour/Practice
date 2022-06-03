// Получаем числа из input. Сравниваем и выводим.

function f1() {
  const num1 = +document.querySelector('.i-11').value;            //  Ставим const вместе let
  const num2 = +document.querySelector('.i-12').value;            //  Ставим 2 пробела вместо 4
  const out = document.querySelector('.out-1');

  if (num1 > num2) {
    out.textContent = num1;
  } else {
    out.textContent = num2;
  }

}

document.querySelector('.b-1').onclick = f1;

// №2
const s2 = document.querySelector('.s-2');

function f2() {
  let n;
  let out = '';
  switch (this.value) {
    case 'one':
      n = 1;
      break;

    case 'two':
      n = 2;
      break;

    case 'three':
      n = 3;
      break;

    case 'four':
      n = 4;
      break;

    case 'five':
      n = 5;
      break;

    case 'six':
      n = 6;
      break;
  }

  for (let i = 0; i <= n; i++) {
    out += i + '';
  } 
  document.querySelector('.out-2').innerHTML = out
}

s2.addEventListener('change', f2);

// №3

const w = [1, [
  2, 3, 4
], 6, 9];

const y = 5;

function countInArray(arr, num) {
  const tempArray = arr.flat();
  let count = 0
  for (let i = 0; i < tempArray.lenght; i++) {
    tempArray[i] === num ? count++ : count;
  }
  return count
}

console.log(countInArray(
  w, y
));
