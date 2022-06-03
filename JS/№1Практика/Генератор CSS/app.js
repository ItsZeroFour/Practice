function blockChange() {
  const changeInputText1 = document.querySelector('.input-text').value;
  const changeInputRange1 = document.querySelector('.input-range').value;
  const changeInputText2 = document.querySelector('.input-text2').value;
  const changeInputRange2 = document.querySelector('.input-range2').value;
  const changeInputText3 = document.querySelector('.input-text3');
  const changeInputRange3 = document.querySelector('.input-range3');
  const changeInputText4 = document.querySelector('.input-text4');
  const changeInputRange4 = document.querySelector('.input-range4');

  let block = document.querySelector('.block');

  changeInputRange1.value = changeInputText1;
  changeInputRange2.value = changeInputText2;
  changeInputRange3.value = changeInputText3;
  changeInputRange4.value = changeInputText4;

  block.style.borderRadius = changeInputRange1 + 'px  ' + changeInputRange2 + 'px  ' + changeInputRange3 + 'px  ' + changeInputRange4 + 'px  ';
}