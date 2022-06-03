function calcCartPriceAndDelivery() {
  const cartWrapper = document.querySelector('.cart-wrapper');
  const priceElements = cartWrapper.querySelectorAll('.price__currency');
  const totalPriceElement = document.querySelector('.total-price');
  const deliveryCost = document.querySelector('.delivery-cost');
  const cartDelivery = document.querySelector('[data-cart-delivery]');

    // Задаем изначальную стоимость товаров в корзине. 
  let priceTotal = 0;

    // Обходим все блоки с ценами в корчине 
  priceElements.forEach(function(item) {

      // Находим количество товраов
    const amountElement = item.closest('.cart-item').querySelector('[data-counter]');

      // Добавляем стоимость товаров в общую стоимость  (кол-во * цену)
    priceTotal += parseInt(item.innerText) * parseInt(amountElement.innerText);
   

  });

    // Отоброжаем цену на странице.
  totalPriceElement.innerText = priceTotal;

    // Скрытие / Показ блока со своимостью доставки 
  if (priceTotal > 0) {
    cartDelivery.classList.remove('none');
  } else {
    cartDelivery.classList.add('none');
  }

    // Указываем стоимость доставки
  if (priceTotal >= 600) {
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'Бесплатно';
  } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '250 ₽';
  }

}