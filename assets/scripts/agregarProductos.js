const hrefRegistro = document.getElementById("idHref");
const iniSesion = document.getElementById("idSesion");
const cart = []; // Este es nuestro carrito, un array vacío
let products = []; // Este es nuestro catálogo, un array vacío
// Obtener el elemento con la clase "filter-items"
const filterItemsContainer = document.querySelector(".filter-items");
const filterItemContainer = document.querySelector(".filter-item");
const btnCocina = document.getElementById("new");
const btnBaño = document.getElementById("best-sellers");
const btnLiving = document.getElementById("specials");
let cantidadDiv = 0;

//Si no hay un usuario logueado vuelve a la pantalla de login
if(sessionStorage.getItem("user")){
  iniSesion.innerHTML = '';
  hrefRegistro.href="/assets/pages/mi-cuenta.html";
  hrefRegistro.innerHTML = "Mi Cuenta";
}

const getProducts = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:3000/productos`);
    const data = await response.json();

    products = products.concat(data); // Agrega todos los productos al array

    return products;
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
};

async function findByCategory(categoria) {
  const categoriaProducto = await getProducts(categoria);
  const categoriaFiltrada = [];

  categoriaProducto.forEach(producto => {
      // Verificar si el producto pertenece a la categoría deseada
      if (producto.categoria === categoria) {
          // Verificar si el producto ya está en la lista por su id
          const existeEnLista = categoriaFiltrada.some(item => item.id === producto.id);
          if (!existeEnLista) {
              // Si el producto no está en la lista, agregarlo
              categoriaFiltrada.push(producto);
          }
      }
  });

  return categoriaFiltrada

}

async function agregarDiv(categoria){
  const productosFiltrado = await findByCategory(categoria);
  cantidadDiv = productosFiltrado.length;
  for(i=0; i<productosFiltrado.length; i++){
    const prod = productosFiltrado[i];

    // Crear un nuevo elemento div con la clase "filter-item new"
    const filterItem = document.createElement("div");
    if(prod.categoria === 'Cocina') filterItem.className = "filter-item Cocina";
    if(prod.categoria === 'Baño') filterItem.className = "filter-item Baño";
    if(prod.categoria === 'Living') filterItem.className = "filter-item Living";
    

    // Crear un nuevo elemento div con la clase "item-img"
    const itemImg = document.createElement("div");
    itemImg.className = "item-img";

    // Crear un nuevo elemento img con el atributo src y alt
    const img = document.createElement("img");
    img.src = prod.imagen;
    img.alt = "Item image";

    // Agregar el elemento img al elemento "item-img"
    itemImg.appendChild(img);

    // Crear un nuevo elemento div con la clase "item-info"
    const itemInfo = document.createElement("div");
    itemInfo.className = "item-info";

    // Crear un nuevo elemento div dentro de "item-info"
    const divInsideItemInfo = document.createElement("div");

    // Crear un nuevo elemento span con la clase "new-price"
    const newPrice = document.createElement("span");
    newPrice.className = "new-price";
    newPrice.innerText = prod.precio;

    // Agregar el elemento span al div dentro de "item-info"
    divInsideItemInfo.appendChild(newPrice);

    // Crear un nuevo elemento a con la clase "add-btn" y el texto "Comprar"
    const comprarDiv = document.createElement("div");
    comprarDiv.className = "botones2 d-flex justify-content-center align-items-center mt-2";

    const comprarLink = document.createElement("button");
    comprarLink.className = "btn-3";
    comprarLink.innerText = "Comprar";

    comprarDiv.appendChild(comprarLink);

    // Agregar el div y el enlace al elemento "item-info"
    itemInfo.appendChild(divInsideItemInfo);
    itemInfo.appendChild(comprarLink);
    itemInfo.appendChild(comprarDiv);

    // Agregar los elementos "item-img" y "item-info" al elemento "filter-item"
    filterItem.appendChild(itemImg);
    filterItem.appendChild(itemInfo);

    filterItemsContainer.appendChild(filterItem);

    // Agregar un evento al botón "Comprar"
    comprarLink.addEventListener("click", () => {
      const repeat = cart.some(
        (repeatProduct) => repeatProduct.id === prod.id
      );
    
      if (repeat) {
          cart.map((produ) => {
              if (produ.id === prod.id) {
              produ.cantidad ++;
              displayCartCounter();
              }
          });
      } else {
          cart.push({
              id: prod.id,
              nombre: prod.nombre,
              precio: prod.precio,
              cantidad: prod.cantidad,
              imagen: prod.imagen,
          });
          displayCartCounter();
      }
    });
  }

}

agregarDiv("Cocina");

btnBaño.addEventListener("click", function(){
  filterItemsContainer.innerHTML = ""; // Vaciar el contenedor 
  agregarDiv("Baño");
});

btnLiving.addEventListener("click", function(){
  filterItemsContainer.innerHTML = ""; // Vaciar el contenedor
  agregarDiv("Living");
});

btnCocina.addEventListener("click", function(){
  filterItemsContainer.innerHTML = ""; // Vaciar el contenedor
  agregarDiv("Cocina");
});