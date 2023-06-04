const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scrolling speed here
    slider.scrollLeft = scrollLeft - walk;
});

// Touch Events for Mobile Devices
slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].clientX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchend', () => {
    isDown = false;
});

slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].clientX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scrolling speed here
    slider.scrollLeft = scrollLeft - walk;
});

const slider2 = document.querySelector('.slider2');
let isDown2 = false;
let startX2;
let scrollLeft2;

slider2.addEventListener('mousedown', (e) => {
    isDown2 = true;
    startX2 = e.pageX - slider2.offsetLeft;
    scrollLeft2 = slider2.scrollLeft;
});

slider2.addEventListener('mouseleave', () => {
    isDown2 = false;
});

slider2.addEventListener('mouseup', () => {
    isDown2 = false;
});

slider2.addEventListener('mousemove', (e) => {
    if (!isDown2) return;
    e.preventDefault();
    const x = e.pageX - slider2.offsetLeft;
    const walk = (x - startX2) * 3; // Adjust scrolling speed here
    slider2.scrollLeft = scrollLeft2 - walk;
});

// Touch Events for Mobile Devices
slider2.addEventListener('touchstart', (e) => {
    isDown2 = true;
    startX2 = e.touches[0].clientX - slider2.offsetLeft;
    scrollLeft2 = slider2.scrollLeft;
});

slider2.addEventListener('touchend', () => {
    isDown2 = false;
});

slider2.addEventListener('touchmove', (e) => {
    if (!isDown2) return;
    const x = e.touches[0].clientX - slider2.offsetLeft;
    const walk = (x - startX2) * 3; // Adjust scrolling speed here
    slider2.scrollLeft = scrollLeft2 - walk;
});

var activeCategoria = "";
    var activePreco = "";

    function applyFilters() {
      var produtos = document.getElementsByClassName('produto');

      for (var i = 0; i < produtos.length; i++) {
        var produto = produtos[i];
        var categoria = produto.classList.contains(activeCategoria);
        var preco = produto.classList.contains(activePreco);

        if ((activeCategoria !== "" && !categoria) || (activePreco !== "" && !preco)) {
          produto.classList.add('hidden');
        } else {
          produto.classList.remove('hidden');
        }
      }
    }

    function toggleCategoria(event) {
      var categoria = event.target.id;

      if (activeCategoria === categoria) {
        activeCategoria = "";
      } else {
        activeCategoria = categoria;
        activePreco = "";
      }

      applyFilters();
    }

    function togglePreco(event) {
      var preco = event.target.id;

      if (activePreco === preco) {
        activePreco = "";
      } else {
        activePreco = preco;
        activeCategoria = "";
      }

      applyFilters();
    }

    var buttonsCategoria = document.querySelectorAll('[id^="categoria"]');
    for (var i = 0; i < buttonsCategoria.length; i++) {
      buttonsCategoria[i].addEventListener('click', toggleCategoria);
    }

    var buttonsPreco = document.querySelectorAll('[id^="preco"]');
    for (var i = 0; i < buttonsPreco.length; i++) {
      buttonsPreco[i].addEventListener('click', togglePreco);
    }