var rectangle = document.querySelector('#rendu-rectangle');
var buttons = document.querySelectorAll('#section-click button');
var inputs = document.querySelectorAll('#section-change input');

var tt= () => {
  console.log(event.target.dataset);
  console.log(window.getComputedStyle(event.target).backgroundColor);
}
buttons[1].addEventListener('click',tt);
// console.log(buttons[1].dataset.style)