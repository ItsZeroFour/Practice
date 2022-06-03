const headers = document.querySelectorAll('[data-name="accordeon-title"]');

headers.forEach(function (item) {
  item.addEventListener("click", showContent)
});

function showContent() {
  this.nextElementSibling.classList.toggle("hidden");
}
