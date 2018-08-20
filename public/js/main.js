var rectangle = document.querySelector('#rendu-rectangle');
var buttons = document.querySelectorAll('#section-click button');
var inputs = document.querySelectorAll('#section-change input');

var clickStyle = (event) => {
  console.log()
  var prop = window.getComputedStyle(event.target)[event.target.dataset.style];
  rectangle.style[event.target.dataset.style] = prop;
};

var changeStyle = (event) => {
  var prop = event.target.value;
  rectangle.style[event.target.dataset.style] = isNaN(prop) ? prop : prop + 'px';
}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    clickStyle(event);
  });
});

inputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    changeStyle(event);
  })
});