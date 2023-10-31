function iniciarContadorTiempo(fechaFinal, elementoHTML, btn3) {
  const fechaFinalOferta = new Date(fechaFinal).getTime();
  
  function actualizarContador() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaFinalOferta - ahora;
    
    if (tiempoRestante <= 0) {
      // La oferta ha expirado
      elementoHTML.textContent = "Oferta expirada";
      if (btn3) {
        if (Array.isArray(btn3)) {
          // Si botones es un array de botones, desactiva cada uno
          btn3.forEach((boton) => {
            boton.disabled = true;
          });
        } else {
          // Si botones es un solo botón, desactívalo
          btn3.disabled = true;
        }
      }
    } else {
      // Calcula tiempo restante
      const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
      const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);
      
      // Actualiza el elemento HTML con el tiempo restante
      elementoHTML.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }
  }
  
  // Llama a actualizarContador() para actualizar el contador inicialmente
  actualizarContador();
  
  // Actualiza el contador cada segundo
  const intervalo = setInterval(actualizarContador, 1000);
  
  // Limpia el intervalo cuando la oferta ha expirado
  if (fechaFinalOferta - new Date().getTime() <= 0) {
    clearInterval(intervalo);
    if (btn3) {
      if (Array.isArray(btn3)) {
        // Si botones es un array de botones, desactiva cada uno
        btn3.forEach((boton) => {
          boton.disabled = true;
        });
      } else {
        // Si botones es un solo botón, desactívalo
        btn3.disabled = true;
      }
    }
  }
}

