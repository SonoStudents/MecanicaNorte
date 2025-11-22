// Login simulado - Mecánica del Norte
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Usuarios de prueba
  const users = [
    { user: "admin", pass: "1234" },
    { user: "cliente", pass: "mecanica2025" }
  ];

  const valid = users.find(u => u.user === username && u.pass === password);

  if (valid) {
    localStorage.setItem("loggedUser", username);
    window.location.href = "dashboard.html";
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos.";
    errorMsg.style.color = "red";
  }
});