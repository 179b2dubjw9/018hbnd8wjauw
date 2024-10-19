// JavaScript do animacji kropek
const dots = document.querySelector('.dots');
let dotCount = 1;

setInterval(() => {
    dots.textContent = '.'.repeat(dotCount);
    dotCount = (dotCount % 3) + 1; 
}, 300); 
