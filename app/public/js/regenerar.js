document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnRegenerar");
    const mensaje = document.getElementById("mensaje");
  
    btn.addEventListener("click", async () => {
      try {
        const respuesta = await fetch("/api/regenerar");
        const datos = await respuesta.json();
  
        mensaje.innerHTML = `<p style="color: green;">✔ ${datos.mensaje}</p>`;
      } catch (error) {
        mensaje.innerHTML = `<p style="color: red;">✖ Error al regenerar: ${error.message}</p>`;
      }
    });
  });
  