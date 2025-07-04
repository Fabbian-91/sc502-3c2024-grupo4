let contador = 1;
let citaEnEdicion = null;

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

  if (citaEnEdicion) {
    // Modo edición
    citaEnEdicion.cells[1].textContent = nombre;
    citaEnEdicion.cells[2].textContent = id;
    citaEnEdicion.cells[3].textContent = fecha;
    citaEnEdicion.cells[4].textContent = hora;
    citaEnEdicion.cells[5].textContent = tipo;
    citaEnEdicion = null;
  } else {
    // Modo agregar
    const tabla = document.getElementById("tablaCitas");
    const fila = tabla.insertRow();

    fila.innerHTML = `
      <td>${contador++}</td>
      <td>${nombre}</td>
      <td>${id}</td>
      <td>${fecha}</td>
      <td>${hora}</td>
      <td>${tipo}</td>
      <td>
        <button class="btn btn-sm btn-warning me-1" onclick="editarCita(this)">Editar</button>
        <button class="btn btn-sm btn-danger" onclick="cancelarCita(this)">Cancelar</button>
      </td>
    `;
  }

  document.getElementById("formularioCita").reset();
  const modal = bootstrap.Modal.getInstance(document.getElementById("modalCita"));
  modal.hide();
}

function editarCita(boton) {
  const fila = boton.closest("tr");
  citaEnEdicion = fila;

  document.getElementById("nombre").value = fila.cells[1].textContent;
  document.getElementById("id").value = fila.cells[2].textContent;
  document.getElementById("fecha").value = fila.cells[3].textContent;
  document.getElementById("hora").value = fila.cells[4].textContent;
  document.getElementById("Tipo").value = fila.cells[5].textContent;

  const modal = new bootstrap.Modal(document.getElementById("modalCita"));
  modal.show();
}

function cancelarCita(boton) {
  if (confirm("¿Está seguro de cancelar esta cita?")) {
    const fila = boton.closest("tr");
    fila.remove();
    actualizarNumeracion();
  }
}

function actualizarNumeracion() {
  const filas = document.querySelectorAll("#tablaCitas tr");
  contador = 1;
  filas.forEach(fila => {
    fila.cells[0].textContent = contador++;
  });
}



