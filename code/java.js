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

// Função para filtrar as divs dos produtos
function filtrarProdutos() {
    // Obter os elementos dos botões de categoria e faixa de preço
    var categorias = document.querySelectorAll('[id^="categoria"]');
    var precos = document.querySelectorAll('[id^="preco"]');
    
    // Obter todas as divs dos produtos
    var produtos = document.getElementsByClassName('produto');
    
    // Percorrer as divs dos produtos e escondê-las
    for (var i = 0; i < produtos.length; i++) {
      produtos[i].style.display = 'none';
    }
    
    // Percorrer os botões de categoria e verificar se estão selecionados
    for (var i = 0; i < categorias.length; i++) {
      if (categorias[i].classList.contains('selecionado')) {
        var categoria = categorias[i].id;
        
        // Percorrer os botões de faixa de preço e verificar se estão selecionados
        for (var j = 0; j < precos.length; j++) {
          if (precos[j].classList.contains('selecionado')) {
            var preco = precos[j].id;
            
            // Percorrer as divs dos produtos e exibir apenas as que correspondem à categoria e faixa de preço selecionadas
            for (var k = 0; k < produtos.length; k++) {
              if (produtos[k].classList.contains(categoria) && produtos[k].classList.contains(preco)) {
                produtos[k].style.display = 'block';
              }
            }
          }
        }
      }
    }
  }
  
  // Adicionar evento de clique aos botões de categoria
  var categorias = document.querySelectorAll('[id^="categoria"]');
  for (var i = 0; i < categorias.length; i++) {
    categorias[i].addEventListener('click', function() {
      this.classList.toggle('selecionado');
      filtrarProdutos();
    });
  }
  
  // Adicionar evento de clique aos botões de faixa de preço
  var precos = document.querySelectorAll('[id^="preco"]');
  for (var i = 0; i < precos.length; i++) {
    precos[i].addEventListener('click', function() {
      this.classList.toggle('selecionado');
      filtrarProdutos();
    });
  }
  
  