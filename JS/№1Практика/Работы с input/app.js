const checkbox = document.querySelector('.one');
const radioInput = document.querySelector('.out')

function checkboxOne() {
  if (checkbox.checked) {
  alert('Выбран');
} else {
  alert('Не выбран');
  }
}

// function radioFunc() {
//   let radio = document.getElementsByName('r1');
//   for (let i = 0; i < radio.length; i++) {
//     if (radio[i].checked) {
//       alert('Выбран ' + i + ' элемент');
//     }
//   }
// }










function radioFunc2() {
  let radio = document.getElementsByName('r1')
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      radioInput.innerHTML += 'Выбран ' + i + ' элемент';
    }
  }
}