//Productos disponibles
const productos = [
  { id: 1, nombre: "Pintura 1", precio: 500 },
  { id: 2, nombre: "Pintura 2", precio: 300 },
  { id: 3, nombre: "Pintura 3", precio: 200 },
  { id: 4, nombre: "Pintura 4", precio: 100 },
];

// Carrito de compras inicialmente vacío
let carrito = [];

// Función para mostrar los productos en la página
function mostrarProductos() {
  const contenedorProductos = document.getElementById("productos");
  productos.forEach((producto) => {
    const htmlProducto = `
        <div class="producto">
          <h4>${producto.nombre}</h4>
          <p>$${producto.precio}</p>
          <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        </div>
      `;
    contenedorProductos.innerHTML += htmlProducto;
  });
}

// Evento
document.addEventListener("DOMContentLoaded", mostrarProductos);

//Funcion para agregar producots al carrito
function agregarAlCarrito(idProducto) {
  const producto = productos.find((producto) => producto.id === idProducto);
  if (producto) {
    carrito.push(producto);
    mostrarCarrito();
  } else {
    console.log("Producto no encontrado.");
  }
}

// Funcion para ver los productos agregados y tambien poder eliminarlos individualmente
function mostrarCarrito() {
  const contenedorCarrito = document.getElementById("carrito");
  contenedorCarrito.innerHTML = ""; // Limpia el contenedor del carrito
  carrito.forEach((producto, index) => {
    contenedorCarrito.innerHTML += `
        <div class="itemCarrito">
          <h4>${producto.nombre}</h4>
          <p>$${producto.precio}</p>
          <button onclick="removerDelCarrito(${index})">Remover</button>
        </div>
      `;
  });
}
function removerDelCarrito(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}

// Ejemplo de uso
agregarAlCarrito(1);
agregarAlCarrito(2);
removerDelCarrito(1);

// uso de elementos para implementar la funcionalidad básica de un carrito de compras, incluyendo mostrar productos disponibles, agregar productos al carrito, mostrar el carrito con los productos agregados y permitir la eliminación de productos del carrito.
