const nombre = document.getElementById("nombre");
const datos = document.getElementById("datos");
const guardar = document.getElementById("guardar");
const buscador = document.getElementById("buscador");
const buscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

// ✅ Guardar información
guardar.addEventListener("click", () => {
  const nuevo = {
    nombre: nombre.value.trim(),
    datos: datos.value.trim()
  };

  if (!nuevo.nombre || !nuevo.datos) {
    alert("Completa los campos antes de guardar");
    return;
  }

  // Obtener registros existentes o lista vacía
  const registros = JSON.parse(localStorage.getItem("registros")) || [];

  // Agregar el nuevo registro (sin verificar duplicados)
  registros.push(nuevo);

  // Guardar todo en localStorage
  localStorage.setItem("registros", JSON.stringify(registros));

  alert("Datos guardados correctamente.");

  // Limpiar inputs
  nombre.value = "";
  datos.value = "";
});

// 🔍 Buscar información
buscar.addEventListener("click", () => {
  const nombreBuscado = buscador.value.trim();
  if (!nombreBuscado) {
    alert("Escribe un nombre para buscar");
    return;
  }

  const registros = JSON.parse(localStorage.getItem("registros")) || [];

  // Filtrar los que coinciden con el nombre
  const encontrados = registros.filter(r => r.nombre === nombreBuscado);

  if (encontrados.length > 0) {
    // Mostrar todos los resultados
    resultado.innerHTML = encontrados.map(r => `
      <div style="border:1px solid #ccc; padding:8px; margin:6px 0; border-radius:6px; color:white;">
        <p><strong>Nombre:</strong> ${r.nombre}</p>
        <p><strong>Datos:</strong> ${r.datos}</p>
      </div>
    `).join("");
  } else {
    resultado.innerHTML = `<p>No se encontró información con ese nombre.</p>`;
  }
});



