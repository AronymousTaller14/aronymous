
    // Función para abrir la barra lateral
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";  // Ancho de la barra lateral
        document.getElementById("overlay").classList.add("show"); // Mostrar el fondo oscuro
    }

    // Función para cerrar la barra lateral
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";  // Ocultar la barra lateral
        document.getElementById("overlay").classList.remove("show"); // Ocultar el fondo oscuro
    }

//_____________________-

window.onload = function () {
    // Mostrar el modal cuando la página carga
    const modal = document.querySelector('.modal_anuncio');
    modal.style.display = 'flex';
  
    // Agregar la clase 'visible' para activar la animación de apertura
    setTimeout(() => {
      modal.classList.add('visible');
    }, 100); // Espera un pequeño tiempo para que la transición funcione
  
    // Después de 5 segundos, agregar la clase 'desaparecer' para desvanecerlo
    setTimeout(() => {
      modal.classList.add('desaparecer');
    }, 5000); // Desaparece después de 5 segundos
  
    // Espera a que la animación termine antes de ocultar el modal completamente
    setTimeout(() => {
      modal.style.display = 'none';
      modal.classList.remove('visible', 'desaparecer');
    }, 5300); // 300ms después del final de la animación de desvanecimiento
  };
  