  // Нашли все заголовки по дата аттрибуту
const tabsHeaders = document.querySelectorAll('[data-tab]');
  // Нашли все contentBox 
  const contentBoxes = document.querySelectorAll('[data-tab-content]')

tabsHeaders.forEach(function(item) {

  item.addEventListener('click', function() {
      // Пишем .tab без ковычек (data-TAB) 


      // 1. Найти все contentBox и скрыть
    contentBoxes.forEach(function(item) {
      item.classList.add('hidden');
    });

      // 2. Выбрать нужный contentBox и показать его
    const contentBox = document.querySelector(`#${this.dataset.tab}`);  
    contentBox.classList.remove('hidden');
    
  });

});
