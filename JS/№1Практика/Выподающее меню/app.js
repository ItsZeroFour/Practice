document.querySelector('.nav').onmouseover = function(event) {
  let target = event.target;
  if (target.className == 'menu__item') {
    let s = target.querySelector('.sub-menu');
    closeMenu();
    s.style.display = 'block';
  }
}

document.onmouseover = function(event) {
  let target = event.target;
  console.log(event.target);
  if (target.className != 'menu__item' && target.className != 'sub-menu') {
    closeMenu();
  }
}

function closeMenu() {
  const menu = document.querySelector('.nav');
  const subMenu = document.querySelector('.sub-menu');
  for (let i = 0; i < subMenu.lenght; i++) {
    subMenu[i].style.display = 'none';
  }
}