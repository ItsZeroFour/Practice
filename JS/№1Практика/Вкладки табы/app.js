const tab = document.querySelector('.tab');
const tabContent = document.querySelector('.tab__content');

window.onload = function() {
  hideTabsContent(1);
}

function hideTabsContent(a) {
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
    tab[i].classList.remove('white-border');
  }
}

document.querySelector('.tabs').onclick = function(event) {
  const target = event.target;
  if (target.className == 'tab') {
    for (let i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
}

function showTabsContent(b) {
  if (tabContent[b].classList.contains('hide')) {
    hideTabsContent(0);
    tab[b].classList.add('whiteborder');
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
  }
}