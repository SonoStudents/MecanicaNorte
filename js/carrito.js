// Carrito de compras - Mecánica del Norte
async function mostrarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  if (carrito.length === 0) {
    lista.innerHTML = "<p>Tu carrito está vacío.</p>";
    return;
  }

  const res = await fetch("assets/productos.json");
  const productos = await res.json();

  let total = 0;
  lista.innerHTML = "";
  carrito.forEach(nombre => {
    const p = productos.find(prod => prod.nombre === nombre);
    if (p) {
      total += p.precio;
      const div = document.createElement("div");
      div.textContent = `${p.nombre} - $${p.precio}`;
      lista.appendChild(div);
    }
  });

  const totalDiv = document.createElement("p");
  totalDiv.innerHTML = `<strong>Total: $${total}</strong>`;
  lista.appendChild(totalDiv);
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  mostrarCarrito();
}

mostrarCarrito();