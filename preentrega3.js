document.addEventListener("DOMContentLoaded", function () {
  
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const productsContainer = document.getElementById("products");
  const emptyCartButton = document.getElementById("empty-cart");

  // Manejar clic en los botones "Agregar al carrito"
  productsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-to-cart")) {
      const productElement = event.target.parentElement;
      addToCart(productElement);
    }
  });

  // Manejar clic en el botón "Vaciar Carrito"
  emptyCartButton.addEventListener("click", function () {
    clearCart();
  });

  // Función para agregar un producto al carrito
  function addToCart(productElement) {
    const productId = productElement.dataset.id;
    const productName = productElement.dataset.name;
    const productPrice = parseFloat(productElement.dataset.price);

    // Crear el elemento del carrito
    const cartItemElement = document.createElement("li");
    cartItemElement.textContent = `${productName} - $${productPrice.toFixed(
      2
    )}`;
    cartItemsElement.appendChild(cartItemElement);

    
    updateCartTotal(productPrice);

    // Guardar en el almacenamiento local
    saveToLocalStorage(productId, productName, productPrice);
  }

  
  function clearCart() {
    cartItemsElement.innerHTML = "";
    cartTotalElement.textContent = "0.00";

    
    localStorage.removeItem("cart");
  }

  // Función para actualizar el total del carrito
  function updateCartTotal(price) {
    const currentTotal = parseFloat(cartTotalElement.textContent);
    const newTotal = currentTotal + price;
    cartTotalElement.textContent = newTotal.toFixed(2);
  }

  // Función para guardar en el almacenamiento local
  function saveToLocalStorage(id, name, price) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push({ id, name, price });
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  // Recuperar datos del almacenamiento local al cargar la página
  function loadCartFromLocalStorage() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.forEach((item) => {
      const cartItemElement = document.createElement("li");
      cartItemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsElement.appendChild(cartItemElement);
      updateCartTotal(item.price);
    });
  }

  loadCartFromLocalStorage();
});
