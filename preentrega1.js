
/*let precio;
let total = 0;
let total2;
let continuar;

// Elavoro un ciclo para que ingrese precio, cantidad y calculo total.

alert(`Bienvenidos a la tienda de remeras.
Oferta: Por compras mayores a 500 tiene un 20% de descuento, mayores a 1000 un 30% y mayores a 2000 un 50% de descuento.
Aproveche!! `);
do {
  precio = +prompt(`Ingrese el precio de una remera deseada:`);
  cantidad = +prompt(`Ingrese la cantidad de remeras que desee:`);
  total = total + precio * cantidad;
  continuar = prompt(`Desea seguir agregando remeras? si/no`);
  while (continuar !== `no` && continuar !== `si`) {
    continuar = prompt(`Debe ingresar "si" o "no"`);
  }
} while (continuar === "si");

//aplico descuentos segun el total.

if (total >= 500 && total <= 1000){
    total2 = total - (total * 0.20);
} else if (total >= 1000 && total <= 2000){
    total2 = total - (total * 0.30);
} else {
    total2 = total - (total *0.5);
}


// Cambio alert segun si tiene descuento o no
if (total < 500) {
  alert(`Su total es ${total}`);
} else if ((total) => 500) {
  alert(`su total con descuento es ${total2}`);
}

alert(`Gracias por su compra!`);
*/