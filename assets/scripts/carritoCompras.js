const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");

const displayCart = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "block";
  modalOverlay.style.display = "block";
  
  //modal Header
  const modalHeader = document.createElement("div");

  const modalClose = document.createElement("div");
  modalClose.innerText = "❌";
  modalClose.className = "modal-close";
  modalHeader.append(modalClose);

  modalClose.addEventListener("click", () => {
    modalContainer.style.display = "none";
    modalOverlay.style.display = "none";
  });

  const modalTitle = document.createElement("div");
  modalTitle.innerText = "Cart";
  modalTitle.className = "modal-title";
  modalHeader.append(modalTitle);

  modalContainer.append(modalHeader);

  //modal body
  if (cart.length > 0) {
    cart.forEach((product) => {
      const modalBody = document.createElement("div");
      modalBody.className = "modal-body";
      modalBody.innerHTML = `
        <div class="product">
          <img class="product-img" src="${product.imagen}"/>
          <div class="product-info">
            <h4>${product.nombre}</h4>
          </div>
          <div class="quantity">
            <span class="quantity-btn-decrese">-</span>
            <span class="quantity-input">${product.cantidad}</span>
            <span class="quantity-btn-increse">+</span>
          </div>
          <div class="price">${product.precio * product.cantidad} $</div>
          <div class="delete-product">❌</div>
        </div>
        `;
      modalContainer.append(modalBody);

      const decrese = modalBody.querySelector(".quantity-btn-decrese");
      decrese.addEventListener("click", () => {
        if (product.cantidad !== 1) {
            product.cantidad--;
          displayCart();
          displayCartCounter();
        }
      });

      const increse = modalBody.querySelector(".quantity-btn-increse");
      increse.addEventListener("click", () => {
        product.cantidad++;
        displayCart();
        displayCartCounter();
      });

      //delete
      const deleteProduct = modalBody.querySelector(".delete-product");
      deleteProduct.addEventListener("click", () => {
        deleteCartProduct(product.id);
      });
    });

    //modal footer
    const total = cart.reduce((acc, element) => acc + element.precio * element.cantidad,0); //reduce es un método que recibe una función y un valor inicial, en este caso 0. La función recibe dos parámetros, el acumulador y el elemento actual. En este caso, el acumulador es acc y el elemento actual es element. La función suma el precio por la cantidad de cada producto y lo va sumando al acumulador. Al final, reduce devuelve el valor del acumulador, que es el total de la compra.

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
      <div class="total-price">Total: ${total}</div>
      <button class="btn-primary" id= "checkout-btn">Realizar el Pago</button>
      <div id="button-checkout"></div>
    `;
    modalContainer.append(modalFooter);

    //mp
    const mercadopago = new MercadoPago(
      ACCES_TOKEN, // Agregar el access_token generado en mi cuenta de Mercado Pago
      {
        locale: "es-AR", // The most common are: 'es-AR', 'pt-BR' and 'en-US'
      }
    );

    const checkoutButton = modalFooter.querySelector("#checkout-btn");
    checkoutButton.addEventListener("click",()=> {
      checkoutButton.remove();

      const orderData = {
        quantity: 1,
        description: "Compra de productos",
        price: total,
      };

      fetch("http://localhost:8080/create_preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (preference) {
          createCheckoutButton(preference.id);
        })
        .catch(function () {
          alert("Unexpected error");
        });
    });

    function createCheckoutButton(preferenceId) {
      // Initialize the checkout
      const bricksBuilder = mercadopago.bricks();

      const renderComponent = async (bricksBuilder) => {
        // if (window.checkoutButton) checkoutButton.unmount();

        await bricksBuilder.create(
          "wallet",
          "button-checkout", // class/id where the payment button will be displayed
          {
            initialization: {
              preferenceId: preferenceId,
            },
            callbacks: {
              onError: (error) => console.error(error),
              onReady: () => {},
            },
          }
        );
      };
      window.checkoutButton = renderComponent(bricksBuilder);
    }
  } else {
    const modalText = document.createElement("h2");
    modalText.className = "modal-body";
    modalText.innerText = "Your cart is empty";
    modalContainer.append(modalText);
  }
};

cartBtn.addEventListener("click", displayCart);

const deleteCartProduct = (id) => {
  const foundId = cart.findIndex((element) => element.id === id);
  /*console.log(foundId);*/
  cart.splice(foundId, 1);
  displayCart();
  displayCartCounter();
};

const displayCartCounter = () => {
  const cartLength = cart.reduce((acc, element) => acc + element.cantidad, 0);
  if (cartLength > 0) {
    cartCounter.style.display = "block";
    cartCounter.innerText = cartLength;
  } else {
    cartCounter.style.display = "none";
  }
};
