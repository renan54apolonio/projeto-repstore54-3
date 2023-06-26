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
    const walk = (x - startX) * 1.5; // Ajuste a sensibilidade alterando o multiplicador (0.5)
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
    const walk = (x - startX) * 1.5; // Ajuste a sensibilidade alterando o multiplicador (0.5)
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
    const walk = (x - startX2) * 1.2; // Ajuste a sensibilidade alterando o multiplicador (0.5)
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
    const walk = (x - startX2) * 1.2; // Ajuste a sensibilidade alterando o multiplicador (0.5)
    slider2.scrollLeft = scrollLeft2 - walk;
});


document.addEventListener('DOMContentLoaded', function() {
    // Função para filtrar os produtos com base na categoria e preço selecionados
    function filtrarProdutos() {
      // Remove a classe "hidden" de todos os produtos
      var produtos = document.getElementsByClassName('produto');
      for (var i = 0; i < produtos.length; i++) {
        produtos[i].classList.remove('hidden');
      }
  
      // Obtém as categorias e preços selecionados
      var categoriaSelecionada = document.querySelector('.slider .button.destacado');
      var precoSelecionado = document.querySelector('.slider2 .button2.destacado');
  
      // Se uma categoria estiver selecionada, filtra os produtos com base nela
      if (categoriaSelecionada) {
        var categoria = categoriaSelecionada.id;
        for (var j = 0; j < produtos.length; j++) {
          if (!produtos[j].classList.contains(categoria)) {
            produtos[j].classList.add('hidden');
          }
        }
      }
  
      // Se um preço estiver selecionado, filtra os produtos com base nele
      if (precoSelecionado) {
        var preco = precoSelecionado.id;
        for (var k = 0; k < produtos.length; k++) {
          if (!produtos[k].classList.contains(preco)) {
            produtos[k].classList.add('hidden');
          }
        }
      }
    }
  
    // Função para manipular os cliques nos botões de categoria e preço
    function handleClick(event) {
      // Verifica se o botão já está destacado
      if (event.target.classList.contains('destacado')) {
        // Remove o destaque
        event.target.classList.remove('destacado');
      } else {
        // Remove o destaque de outros botões da mesma categoria ou preço
        var buttons;
        if (event.target.classList.contains('button')) {
          buttons = document.getElementsByClassName('button');
        } else if (event.target.classList.contains('button2')) {
          buttons = document.getElementsByClassName('button2');
        }
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove('destacado');
        }
  
        // Adiciona o destaque ao botão clicado
        event.target.classList.add('destacado');
      }
  
      // Filtra os produtos com base nos botões selecionados
      filtrarProdutos();
    }
  
    // Adiciona o evento de clique aos botões de categoria e preço
    var botoesCategoria = document.getElementsByClassName('button');
    var botoesPreco = document.getElementsByClassName('button2');
    for (var i = 0; i < botoesCategoria.length; i++) {
      botoesCategoria[i].addEventListener('click', handleClick);
    }
    for (var j = 0; j < botoesPreco.length; j++) {
      botoesPreco[j].addEventListener('click', handleClick);
    }
  });


  const slideshow = document.querySelector('.slideshow');
  const images = slideshow.querySelectorAll('img');
  const pagination = slideshow.querySelector('.slideshow-pagination');
  const paginationItems = [];
  
  // Criando os marcadores de paginação
  for (let i = 0; i < images.length; i++) {
    const span = document.createElement('span');
    pagination.appendChild(span);
    paginationItems.push(span);
  }
  
  let currentIndex = 0;
  
  function showImage(index) {
    if (index < 0 || index >= images.length) {
      return;
    }
  
    // Atualiza a classe 'active' nas imagens
    images.forEach((image, i) => {
      if (i === index) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  
    // Atualiza a classe 'active' nos marcadores de paginação
    paginationItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  
  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }
  
  // Define o delay inicial de 5 segundos antes de iniciar o slideshow
  setTimeout(() => {
    showImage(currentIndex);
  
    // Configura a transição automática a cada 3 segundos
    setInterval(nextImage, 3000);
  }, 5000);
  

  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
  }

  // Adiciona o evento de clique aos links
  const footerLinks = document.querySelectorAll(".footer-link");
  footerLinks.forEach(link => {
    link.addEventListener("click", scrollToSection);
  });


  // Função para exibir o alerta
function exibirAlerta() {
  var confirmar = confirm(" Texto do alertaTexto do alertaTexto do alertaTexto do alertaTexto do alertaTexto do alertaTexto do alertaTexto do alertaTexto do alertaTexto do alertaTexto do alertaTexto do alertaTexto do alertaTexto do alertaTexto do alerta");

  // Se o usuário pressionou o botão de confirmar, definimos a variável para indicar que o alerta não deve ser exibido novamente
  if (confirmar) {
    alertaExibido = true;
  }
}

// Verificar se o alerta já foi exibido antes
var alertaExibido = false;

// Verificar se o botão foi pressionado e o alerta ainda não foi exibido
var specialButton = document.getElementById("specialButton");
specialButton.addEventListener("click", function() {
  if (!alertaExibido) {
    exibirAlerta();
  }
});

var isButtonActive = false; // Variável para controlar o estado do botão

function toggleButton() {
  var specialButton = document.getElementById("specialButton");
  var mastergridElement = document.getElementsByClassName("mastergrid")[0];
  var produto18Element = document.getElementById("produto18");
  var buttonElements = document.querySelectorAll(".button, .button2");
  var slider2Element = document.getElementsByClassName("slider2")[0];

  if (!isButtonActive) {
    mastergridElement.classList.add("hidden");
    produto18Element.classList.remove("hidden");
    for (var i = 0; i < buttonElements.length; i++) {
      buttonElements[i].classList.add("hidden");
    }
    slider2Element.setAttribute("id", "hidden");
    specialButton.classList.add("button-red");
    isButtonActive = true;
  } else {
    mastergridElement.classList.remove("hidden");
    produto18Element.classList.add("hidden");
    for (var i = 0; i < buttonElements.length; i++) {
      buttonElements[i].classList.remove("hidden");
    }
    slider2Element.removeAttribute("id");
    specialButton.classList.remove("button-red");
    isButtonActive = false;
  }
}

var specialButton = document.getElementById("specialButton");
specialButton.addEventListener("click", toggleButton);

