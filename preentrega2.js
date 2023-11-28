
//PRE-ENTREGA 2.

/*function productos(marca, nombre, precio) {
    this.marca = marca;
    this.nombre = nombre;
    this.precio = precio
}

const producto1 (marca: `Ferplast` , nombre: `Transportadora`, precio: 1500);
const producto2 (marca: `Ferplast` , nombre: `Transportadora`, precio: 1500);
const producto3 (marca: `Ferplast` , nombre: `Transportadora`, precio: 1500);
const producto4 (marca: `Ferplast` , nombre: `Transportadora`, precio: 1500);
const producto5 (marca: `Ferplast` , nombre: `Transportadora`, precio: 1500);
const producto6 (marca: `Ferplast` , nombre: `Transportadora`, precio: 1500);
const producto7 (marca: `Ferplast` , nombre: `Transportadora`, precio: 1500);
const producto8 (marca: `Ferplast` , nombre: `Transportadora`, precio: 1500);
*/


// Array de productos predefinidos
const productos = [
    { nombre: `Transportadora`, precio: 1500},
    { nombre: `Peine para pelos`, precio: 350 },
    { nombre: `Pelota`, precio: 100 },
    { nombre: `Surtido de juguetes`, precio: 1000 },
    { nombre: `Buzo Peludito`, precio: 1000 },
    { nombre: `Capitas Polares`, precio: 800 },
    { nombre: `Buzos de Lana`, precio: 1100 },
    { nombre: `Huesos comestibles medianos`, precio: 200 },
    { nombre: `Pastillas dog chow`, precio: 1000 },
    { nombre: `Pastillas frog`, precio: 1500 },
    { nombre: `Pastillas para gatos`, precio: 1400 },
    { nombre: `Pastillas para gato adulto`, precio: 900 },
    { nombre: `Huesos comestibles grandes`, precio: 400 }
  ];

  // Array para almacenar los productos en el carrito
  const carrito = [];

  function agregarAlCarrito() {
    let indice = parseInt(prompt(`1. Transportadora precio: 1500
     2. Pelota precio: 100 
     3. Surtido de juguetes precio: 1000 
     4. Peine para pelos precio: 350 
     5. Buzo Peludito precio: 1000 
     6. Capitas Polares precio: 800 
     7. Buzos de Lana precio: 1100 
     8. Huesos comestibles medianos precio: 200 
     9. Pastillas dog chow precio: 1000 
     10. Pastillas frog precio: 1500 
     11. Pastillas para gatos precio: 1400 
     12. Pastillas para gato adulto precio: 900 
     13. Huesos comestibles grandes precio: 400. 
     
     Ingrese el número del producto que desea agregar al carrito`));

    if (isNaN(indice) || indice < 1 || indice > productos.length) {
      alert("Por favor, ingrese un número válido.");
      return;
    }

    let productoSeleccionado = productos[indice - 1];
    carrito.push(productoSeleccionado);
    alert("Producto agregado al carrito:\n\n" + "Nombre: " + productoSeleccionado.nombre + "\nPrecio: $" + productoSeleccionado.precio.toFixed(2));
  }

  function mostrarCarrito() {
    if (carrito.length === 0) {
      alert("El carrito está vacío.");
    } else {
      let contenido = "Carrito de Compras:\n\n";
      let total = 0;
      carrito.forEach(function(producto) {
        contenido += "Nombre: " + producto.nombre + "\nPrecio: $" + producto.precio.toFixed(2) + "\n\n";
        total += producto.precio;
      });
      contenido += `Total: $` + total;
      alert(contenido);
    }
  }

  function ejecutarCarrito() {
    while (true) {
      let opcion = prompt("Seleccione una opción:\n1. Agregar producto al carrito\n2. Mostrar carrito\n3. Salir");

      switch (opcion) {
        case "1":
          agregarAlCarrito();
          break;
        case "2":
          mostrarCarrito();
          break;
        case "3":
          alert("Gracias por usar el carrito de compras. ¡Hasta luego!");
          return;
        default:
          alert("Opción no válida. Por favor, elija una opción válida.");
      }
    }
  }
  ejecutarCarrito ();