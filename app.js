// REGISTRO
document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    localStorage.setItem("usuario", user);
    localStorage.setItem("clave", pass);

    document.getElementById("msg").textContent = "Usuario registrado correctamente ✔️";
});

// LOGIN
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let user = document.getElementById("logUser").value;
    let pass = document.getElementById("logPass").value;

    let regUser = localStorage.getItem("usuario");
    let regPass = localStorage.getItem("clave");

    if (user === regUser && pass === regPass) {
        document.getElementById("msg").textContent = `Bienvenido ${regUser}! ✔️`;
    } else {
        document.getElementById("msg").textContent = "Usuario o contraseña incorrectos ❌";
    }
});

