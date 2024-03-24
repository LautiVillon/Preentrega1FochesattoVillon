// Declaración de la variable productos de manera global
let productos = [];

// Función para cargar productos desde el archivo JSON
function cargarProductos() {
  fetch("../db/db.json")
  .then(res => res.json())
  .then(data => {
      productos = data.productos; // Almacenar los productos en la variable global
      mostrarProductos(); // Mostrar los productos después de cargarlos
  })
  .catch(error => console.error("Error al cargar los productos:", error));
}

// Función para inicializar la aplicación
function inicializar() {
  cargarProductos();
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
  totalDiv.innerHTML = `<p><strong>Total a pagar: $${total}</strong></p>`;
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
