  // Добавляем прослушку на всем окне.
window.addEventListener('click', function(event) {

    // Объявляем переменную let вне if из-за облости видемости.
  let counter;

    // Проверка на клик по счетчику. Если кликнули по окну, то ошибки не будет
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
      // Находи обертку счетчика.
    const counterWrapper = event.target.closest('.counter-wrapper');

      // Находим div с числом счетчика.
    counter = counterWrapper.querySelector('[data-counter]');
  }

    // Проверяем, является ли элемент, по которому мы кликнули - кнопкой "+"
  if (event.target.dataset.action === 'plus') {
      // Увеличение числа на 1
    counter.innerText = ++counter.innerText;
  }

    // Проверяем, является ли элемент, по которому мы кликнули - кнопкой "-"
    // Переписываем строчку на число при помощи parseInt.
  if (event.target.dataset.action === 'minus') {

      // Если число меньше 1, то код не будет выполнятся.
    if (parseInt(counter.innerText) > 1) {
        // Уменьшения числа на 1
      counter.innerText = --counter.innerText;
        // Проверка на товар, которой находится в корзине
    } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
        // Удаляем товар из корзины, если его кол-во меньше "1"
      event.target.closest('.cart-item').remove();

        // Отоброжение статуса корзины Пустая / Полная
      toggleCartStatus();


        // Пересчет общей  стоимости товаров в корзине
      calcCartPriceAndDelivery();


    }

  }

    // Проверяем условие на клик "+" или "-" внутри корзины.
  if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
      // Пересчет общей  стоимости товаров в корзине
    calcCartPriceAndDelivery();
  }

});