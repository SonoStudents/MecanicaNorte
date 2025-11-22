// Página de detalle de producto - Mecánica del Norte
const params = new URLSearchParams(window.location.search);
const nombre = params.get("nombre");

async function cargarProducto() {
  const res = await fetch("assets/productos.json");
  const productos = await res.json();
  const producto = productos.find(p => p.nombre === nombre);

  const contenedor = document.getElementById("productoDetalle");
  if (!producto) {
    contenedor.innerHTML = "<p>Producto no encontrado.</p>";
    return;
  }

  contenedor.innerHTML = `
    <h2>${producto.nombre}</h2>
    <p>Marca: ${producto.marca}</p>
    <p>Precio: $${producto.precio}</p>
    <button onclick="agregarAlCarrito('${producto.nombre}')">Agregar al carrito</button>
  `;
}

function agregarAlCarrito(nombre) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(nombre);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito.");
}

cargarProducto();