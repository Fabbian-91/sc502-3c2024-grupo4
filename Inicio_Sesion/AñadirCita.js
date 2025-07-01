let contador = 1;

function guardarCita() {
  const nombre = document.getElementById("nombre").value.trim();
  const id = document.getElementById("id").value.trim();
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const tipo = document.getElementById("Tipo").value.trim();

  if (!nombre || !id || !fecha || !hora || !tipo) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const tabla = document.getElementById("tablaCitas");
  const fila = tabla.insertRow();

  fila.innerHTML = `
    <td>${contador++}</td>
    <td>${nombre}</td>
    <td>${id}</td>
    <td>${fecha}</td>
    <td>${hora}</td>
    <td>${tipo}</td>
  `;

  document.getElementById("formularioCita").reset();
  const modal = bootstrap.Modal.getInstance(document.getElementById("modalCita"));
  modal.hide();
}


