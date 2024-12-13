document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email.trim() === "" || password.trim() === "") {
        alert("Por favor, completa todos los campos.");
    } else if (!validateEmail(email)) {
        alert("Por favor, ingresa un correo válido.");
    } else {
        // Si todo es válido, se puede enviar el formulario
        this.submit();
    }
});
