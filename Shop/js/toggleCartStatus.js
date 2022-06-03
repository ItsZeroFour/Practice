function toggleCartStatus() {
    // Ищем элементы
    // Обертка
  const cartWrapper = document.querySelector('.cart-wrapper');
    // Надпись "Корзина пуста" 
  const cartEmptyBadge = document.querySelector('[data-cart-empty]');

    // Ищем элементы по id (форма отправки заказа)
  const orderForm = document.querySelector('#order-form');

    // Если товаров больше 0 
  if (cartWrapper.children.length > 0) {
      // Убираем надпись "Корзина пуста"
    cartEmptyBadge.classList.add('none');
      //  Добавлям форму отправки заказа 
    orderForm.classList.remove('none');
    // Если нет товаров
  } else {
      // Добавляем надпись "Корзина пуста"
    cartEmptyBadge.classList.remove('none');
      // Убираем форму отправки заказа 
    orderForm.classList.add('none');
  }

}