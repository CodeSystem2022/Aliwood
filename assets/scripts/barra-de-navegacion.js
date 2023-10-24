   // JavaScript para controlar la interacción con la barra de navegación
   const menuBtn = document.querySelector(".menu-icon span");// Botón de menú
   const searchBtn = document.querySelector(".search-icon"); // Botón de búsqueda
   const cancelBtn = document.querySelector(".cancel-icon");// Botón de cancelar
   const items = document.querySelector(".nav-items");// Elementos de navegación
   const form = document.querySelector("form"); // Formulario de búsqueda
   // Evento de clic en el botón de menú
   menuBtn.onclick = ()=>{            
     items.classList.add("active");   // Agregar clase 'active' a los elementos de navegación
     menuBtn.classList.add("hide");   // Ocultar el botón de menú 
     searchBtn.classList.add("hide"); // Ocultar el botón de búsqueda
     cancelBtn.classList.add("show"); // Mostrar el botón de cancelar
   }
   // Evento de clic en el botón de cancelar
   cancelBtn.onclick = ()=>{
     items.classList.remove("active");   // Quitar clase 'active' de los elementos de navegación
     menuBtn.classList.remove("hide");   // Mostrar el botón de menú
     menuBtn.classList.remove("hide");   // Mostrar el botón de búsqueda
     searchBtn.classList.remove("hide"); // Ocultar el botón de cancelar 
     cancelBtn.classList.remove("show"); // Quitar la clase "show" del elemento cancelBtn
     form.classList.remove("active");    // Quitar clase 'active' del formulario de búsqueda
     cancelBtn.style.color = "#ff3d00";  // Camiar el color del botón de cancelar
   }
   searchBtn.onclick = ()=>{
     form.classList.add("active");       // Agregar clase 'active' al formulario de búsqueda
     searchBtn.classList.add("hide");    // Ocultar el botón de búsqueda
     cancelBtn.classList.add("show");    // Mostrar el botón de cancelar
   }