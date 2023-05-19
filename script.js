// Función para desplazarse suavemente hacia un ancla
function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
  
  // Evento para desplazarse suavemente al hacer clic en los enlaces de navegación
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href');
      smoothScroll(target);
    });
  });
  
  // Evento para desplazarse suavemente al hacer clic en el botón "Compra ahora"
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', (e) => {
    e.preventDefault();
    const target = ctaButton.getAttribute('href');
    smoothScroll(target);
  });
  
  // Validación de formulario de contacto
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validar los campos del formulario aquí
    // Enviar datos del formulario o mostrar un mensaje de éxito

});

