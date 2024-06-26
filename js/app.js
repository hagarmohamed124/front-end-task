let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
 
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  
  // Use a single interval for all elements
  let counter = setInterval(function () {
    if (startValue <= endValue) {
      valueDisplay.textContent = startValue;
      startValue += 1;
    } else {
      clearInterval(counter);
    }
  }, duration);
});



const spans =document.querySelectorAll('.progress-bar span');
spans.forEach((span) => {
span.style.width = span.dataset.width;

});



let nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.classList.add('nav-scroll');
  } else {
    nav.classList.remove('nav-scroll');
  }
});










