

function selectFunc() {
  let select = document.querySelector('.select-1').selectedIndex;
  let options = document.querySelector('.select-1').options;

  alert('Hello ' + options[select].text);
}

function inputFunc() {
  let input = document.querySelector('.i-1');
  let input2 = document.querySelector('.i-2');

  input2.value = input.value;
}


function block() {
  let input = document.querySelector('.i-1');
  let divBlock = document.querySelector('.block');
  divBlock.style.width = input.value + 'px'
}