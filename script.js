// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.categories button');
    const items = document.querySelectorAll('.gallery .item');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        items.forEach(item => {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
  
