// Obtener el elemento con la clase "filter-items"
/*const filterItemsContainer = document.querySelectorAll('.filter-items');
// Verifica si se encontró algún elemento
if (filterItemsContainer) {
    // La clase "filter-items" fue encontrada, puedes realizar acciones adicionales aquí
    console.log('Se encontró el elemento con la clase "filter-items"');
    
    // Ahora puedes agregar el código dinámico al contenedor
    // ...
  
  } else {
    // La clase "filter-items" no fue encontrada
    console.log('No se encontró el elemento con la clase "filter-items"');
  }
*/
const cart = []; // Este es nuestro carrito, un array vacío
let products = []; // Este es nuestro catálogo, un array vacío

export const getProducts = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:3000/productos`);
    const data = await response.json();

    products = products.concat(data); // Agrega todos los productos al array

    console.log(products);
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

    console.log(categoriaFiltrada);
}

findByCategory("Baño");
/*
// Crear un nuevo elemento div con la clase "filter-item new"
const filterItem = document.createElement("div");
filterItem.className = "filter-item new";

// Crear un nuevo elemento div con la clase "item-img"
const itemImg = document.createElement("div");
itemImg.className = "item-img";

// Crear un nuevo elemento img con el atributo src y alt
const img = document.createElement("img");
img.src = "../img/cocina/cocina1.jpeg";
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
newPrice.innerText = "$16.70";

// Agregar el elemento span al div dentro de "item-info"
divInsideItemInfo.appendChild(newPrice);

// Crear un nuevo elemento a con la clase "add-btn" y el texto "Comprar"
const comprarLink = document.createElement("a");
comprarLink.href = "#";
comprarLink.className = "add-btn";
comprarLink.innerText = "Comprar";

// Agregar el div y el enlace al elemento "item-info"
itemInfo.appendChild(divInsideItemInfo);
itemInfo.appendChild(comprarLink);

// Agregar los elementos "item-img" y "item-info" al elemento "filter-item"
filterItem.appendChild(itemImg);
filterItem.appendChild(itemInfo);

// Agregar el elemento "filter-item" al contenedor con la clase "filter-items"
//filterItemsContainer.appendChild(filterItem);
if (filterItemsContainer.length > 0 && filterItemsContainer[0] instanceof Element) {
    // Toma el primer elemento de la NodeList
    const cContainer = containers[0];
  
    // La clase "filter-items" fue encontrada, puedes realizar acciones adicionales aquí
    console.log('Se encontró el elemento con la clase "filter-items"');
  
    // Ahora puedes agregar el código dinámico al contenedor
    container.appendChild(filterItem);
  
  } else {
    // La clase "filter-items" no fue encontrada o el primer elemento no es un nodo Element
    console.log('No se encontró el elemento con la clase "filter-items" o el primer elemento no es un nodo Element');
  }*/