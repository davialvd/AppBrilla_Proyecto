document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que recargue la página

  const email = document.getElementById('user').value;
  const password = document.getElementById('password').value;

  // Simulación de validación simple
  if (email && password) {
      // Aquí normalmente iría la verificación con la base de datos
      window.location.href = "/modulos"; // Redirección a la vista de módulos
  } else {
      const errorElement = document.querySelector('.error');
      errorElement.textContent = "Por favor ingrese sus credenciales.";
      errorElement.classList.remove("escondido");
  }
});
