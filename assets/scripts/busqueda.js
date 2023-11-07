document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("search-icon");
    const searchBox = document.getElementById("search-box");
    const searchInput = document.getElementById("search-input");

    let isSearchBoxVisible = false;

    searchIcon.addEventListener("click", function() {
        if (isSearchBoxVisible) {
            searchBox.style.top = "-50px"; // Oculta la barra de búsqueda en la parte superior
        } else {
            searchBox.style.top = "0"; // Muestra la barra de búsqueda
            searchInput.focus(); // Coloca el foco en el campo de búsqueda
        }

        isSearchBoxVisible = !isSearchBoxVisible;
    });

    document.addEventListener("click", function(e) {
        if (isSearchBoxVisible && e.target !== searchBox && e.target !== searchIcon) {
            searchBox.style.top = "-50px"; // Oculta la barra de búsqueda si se hace clic fuera de ella
            isSearchBoxVisible = false;
        }
    });
});

