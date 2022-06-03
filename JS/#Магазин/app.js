let activeTabId = 'goods';             //  Устонавливаем идинтификатор

const initialTab = document.querySelector(`button[data-tab-id="${activeTabId}"]`);         // Находим табу
initialTab.classList.add('active');     //  Присваеваем ей класс active

renderTabContentById(activeTabId);      //  Отрисовываем контент, которы йзависит от идинтификатора

const goodsInCart = [];                 //  Массив товаров
const tabWithCounter = document.querySelector('button[data-goods-count]');                //  Находим табу с дата аттрибутом


// ===================
// -=================-
const tabs = document.querySelectorAll('button.tab');                                     //  Находим табы
addClickListeners(tabs, clickHendler);                                                    // Навешиваем оброботчики

// -==addInCartHendler==-
function addInCartHendler(product) {
  return () => {
    goodsInCart.push(product);                                      //  Добавляем новые элементы в корзину
    tabWithCounter.dataset.goodsCount = goodsInCart.length;         //  Достаем длину массива и заносим ее в переменную (tabWithCounter.dataset.goodsCount)
  }

 
}

function addClickListeners(elements, callback) {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    element.addEventListener('click', callback);
  }
}

// Предохраняемся от некачественных данных
function createProduct(product) {
  return {
    name: product.name ? product.name : 'Имя не известно',      //  Если не будет имени, то вставится эта заглушка
    price: product.price ? product.price : null,                //  Если не будет цены, то вставится эта заглушка
    imgSrc: product.imgSrc
  }
}

// -===click event===-
function clickHendler(event) {
  const activeTab = getActiveTab();                       //  Находим активную табу

  activeTab.classList.remove('active');                   //  Удаляем класс active у старой табы
  activeTab.classList.add('active');                      //  Добавляем класс active у новой табы
  activeTabId = event.target.dataset.tabId;               //  Меняем активный там id

  removeActiveTabContent();                               //  Удаляем контент, который сейчас активен
  renderTabContentById(activeTabId);                      /*  Рисуем новый контент в зависимости от нашего идинтификатора
  (Удаляем товары и рисуем корзину)*/
}



function getActiveTab() {
  return document.querySelector(`button[data-tab-id="${activeTabId}"]`);
}

// -==remove==-
function removeActiveTabContent() {
  const activeContent = document.querySelector(
    `[data-active-tab-content="true"]`
  );

  activeContent.remove();
}

// -==render content==-
// Функция находит табы
function renderTabContentById(tabId) {
  const tabsContainer = document.querySelector('.tabs');

  // Формирует HTML в зависимости от двух функций ниже

  if (tabId === 'goods') {
    const html = renderGoods();     //  1
    tabsContainer.after(html);      //  Рисуем товары
  } else {
    const html = renderCart();      //  2
    tabsContainer.insertAdjacentHTML('afterend', html);     //  Потом при помощи insertAdjacentHTML рисует этот html
  }

}

// -==html==-
function renderGoods() {
  const div = document.createElement('div');
  div.dataset.activeTabContent = 'true';                    //  Устанавливаем дата аттрибут
  div.className = 'product-items';                          //  Устанавливаем класс

  // =====================================
  for (let i = 0; i < GOODS.length; i++) {                  //  Проходимся циклом по массиву с товарами
    const product = createProduct(GOODS[i]);                // Предохраняемся от некачественных данных
    const clickHandler = addInCartHendler(product);

    // Создаем кнопку
    const button = document.createElement('button');
    button.className = 'button';
    button.innerHTML = 'В корзину';
    button.addEventListener('click', clickHandler);
    // Формирование цены. Если нет цены, то он так и пишет.
    const price = product.price === null ? '<p>Товар закончился</p>' : `<p class="price">${product.price}$</p>`;

    // Формируем карточку
    const productBlock = document.createElement('div');
    productBlock.className = 'product-list';
    productBlock.innerHTML = `
    <div class="product-item">
          <img src="${product.imgSrc}" alt="Lamborghini">
        <div class="product-list">
          <h3>${product.name}</h3>
          ${price}
      </div>
    </div>
    `;
  
    // При помощи querySelector находим div с классом product-list. и при помощи append добавляем кнопку
    productBlock.querySelector('.product-list').append(button);
    
    div.append(productBlock);
  }

  return div;

}



function renderCart() {
  return `
  <div  class="cart-items" data-active-tab-content="true">
    <div class="cart-item">
      <div class="cart__item-title">Lamborghine</div>
      <div class="cart__item-price">300 000$</div>
    </div>
  
    <div class="cart-item">
      <div class="cart__item-title">Ferrari</div>
      <div class="cart__item-price">250 000$</div>
    </div>

    <div class="cart-item">
      <div class="cart__item-title">Mercedes</div>
      <div class="cart__item-price">150 000$</div>
    </div>
  </div>
  `;
  }