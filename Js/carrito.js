// Datos de productos simulados
const productos = [
  { id: 1, nombre: 'Pintura lavable', precio: 1500 },
  { id: 2, nombre: 'Pintura para exterior', precio: 1200 },
  { id: 3, nombre: 'Pintura para piscinas', precio: 1800 },
];

// Función para inicializar la aplicación
function inicializar() {
  mostrarProductos();
  mostrarCarrito();
}

// Mostrar productos disponibles para la compra
function mostrarProductos() {
  const contenedorProductos = document.querySelector('#productos');
  productos.forEach((producto) => {
      const productoDiv = document.createElement('div');
      productoDiv.innerHTML = `
          <p>${producto.nombre} - $${producto.precio}</p>
          <button onclick="agregarProductoAlCarrito(${producto.id})">Agregar al Carrito</button>
      `;
      contenedorProductos.appendChild(productoDiv);
  });
}

// Agregar producto al carrito
function agregarProductoAlCarrito(id) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const productoEncontrado = productos.find((producto) => producto.id === id);
  carrito.push(productoEncontrado);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}

// Mostrar el carrito de compras
function mostrarCarrito() {
  const contenedorCarrito = document.querySelector('.items');
  contenedorCarrito.innerHTML = ''; 
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  let total = 0;
  
  carrito.forEach((producto, index) => {
      const productoDiv = document.createElement('div');
      productoDiv.innerHTML = `
          <p>${producto.nombre} - $${producto.precio}</p>
          <button onclick="eliminarProductoDelCarrito(${index})">Eliminar</button>
      `;
      contenedorCarrito.appendChild(productoDiv);
      total += producto.precio;
  });

  // Mostrar el total
  const totalDiv = document.createElement('div');
  totalDiv.innerHTML = `<p><strong>Total a pagar: $${total}</stron></p>`;
  contenedorCarrito.appendChild(totalDiv);
}

// Eliminar un producto del carrito
function eliminarProductoDelCarrito(index) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}

// Iniciar la aplicación cuando el documento esté listo
document.addEventListener('DOMContentLoaded', inicializar);

// uso de elementos para implementar la funcionalidad básica de un carrito de compras, incluyendo datos de los productos simulados, productos disponibles, agregar productos al carrito, mostrar el mismo con su total a pagar, y eliminar algún producto.
