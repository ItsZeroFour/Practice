const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function(event) {

    // Проверяем, что клиб был совершен по кнопке "Добавить в карзину" 
  if (event.target.hasAttribute('data-cart')) {

      // Находи карточку с товаром, внутри которого был совершен клик
    const card = event.target.closest('.card');

      // Собираем данные с этого товара и зыписываем их в единый объект productInfo
    const productItems = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
        // Получаем число с кол-во товаров 
      itemsInBox: card.querySelector('[data-items-in-box]').innerText,
      weight: card.querySelector('.price__weight').innerText,
      price: card.querySelector('.price__currency').innerText,
      counter: card.querySelector('[data-counter]').innerText
    }

      // Собранные данные подставим в шаблон для товара в корзине
    const cardItemHTML = `
    <div class="cart-item" data-id="${productItems.id}">
    <div class="cart-item__top">
      <div class="cart-item__img">
        <img src="${productItems.imgSrc}" alt="Sushi">
      </div>
      <div class="cart-item__desc">
        <div class="cart-item__title">${productItems.title}</div>
        <div class="cart-item__weight">${productItems.itemsInBox} шт. / ${productItems.weight}.</div>

        <div class="cart-item__details">

          <div class="items items--small counter-wrapper">
            <div class="items__control" data-action="minus">-</div>
            <div class="items__current" data-counter="">${productItems.counter}</div>
            <div class="items__control" data-action="plus">+</div>
          </div>

          <div class="price">
            <div class="price__currency">${productItems.price} ₽</div>
          </div>

        </div>

      </div>
    </div>
  </div>
    `;

      // Отобразим товар в корзине
    cartWrapper.insertAdjacentHTML('beforeend', cardItemHTML);

  }

});