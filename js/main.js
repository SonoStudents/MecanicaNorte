// Buscador de productos - Mecánica del Norte
async function buscarProducto() {
  const query = document.getElementById("busqueda").value.toLowerCase();
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "";

  const res = await fetch("assets/productos.json");
  const productos = await res.json();

  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(query)
  );

  if (filtrados.length === 0) {
    resultados.innerHTML = "<p>No se encontraron resultados.</p>";
    return;
  }

  filtrados.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${p.nombre}</strong> - ${p.marca} - $${p.precio}
      <a href="producto.html?nombre=${encodeURIComponent(p.nombre)}">Ver más</a>
    `;
    resultados.appendChild(div);
  });
}