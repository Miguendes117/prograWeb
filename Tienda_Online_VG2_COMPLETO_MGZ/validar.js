document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registro-form').addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

        let nombre = document.getElementById('nombre');
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        let telefono = document.getElementById('telefono');
        let direccion = document.getElementById('direccion');

        if (nombre === null) {
            console.error("Elemento 'nombre' no encontrado");
            isValid = false;
        } else if (nombre.value.trim() === "") {
            alert("El campo 'Nombre' no puede estar vacío.");
            isValid = false;
        }

        if (email === null) {
            console.error("Elemento 'email' no encontrado");
            isValid = false;
        } else if (email.value.trim() === "") {
            alert("El campo 'Correo' no puede estar vacío.");
            isValid = false;
        } else if (!validateEmail(email.value)) {
            alert("Por favor, ingresa un correo válido.");
            isValid = false;
        }

        if (password === null) {
            console.error("Elemento 'password' no encontrado");
            isValid = false;
        } else if (password.value.trim() === "") {
            alert("El campo 'Contraseña' no puede estar vacío.");
            isValid = false;
        } else if (password.value.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            isValid = false;
        }

        if (telefono === null) {
            console.error("Elemento 'telefono' no encontrado");
            isValid = false;
        } else if (telefono.value.trim() === "") {
            alert("El campo 'Teléfono' no puede estar vacío.");
            isValid = false;
        } else if (!validatePhoneNumber(telefono.value)) {
            alert("Por favor, ingresa un teléfono válido.");
            isValid = false;
        }

        if (direccion === null) {
            console.error("Elemento 'direccion' no encontrado");
            isValid = false;
        } else if (direccion.value.trim() === "") {
            alert("El campo 'Dirección' no puede estar vacío.");
            isValid = false;
        }

        if (isValid) {
            const formData = new FormData(this);

            fetch('register.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                alert("Registro exitoso. La página se recargará.");
                location.reload();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Ocurrió un error durante el registro.');
            });
        }
    });

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    function validatePhoneNumber(phone) {
        const regex = /^[0-9]{10}$/;
        return regex.test(phone);
    }
});


/*

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registro-form').addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

        let nombre = document.getElementById('nombre');
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        let telefono = document.getElementById('telefono');
        let direccion = document.getElementById('direccion');

        // Agregar logs de depuración
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Teléfono:", telefono);
        console.log("Dirección:", direccion);

        if (nombre === null) {
            console.error("Elemento 'nombre' no encontrado");
            isValid = false;
        } else if (nombre.value.trim() === "") {
            alert("El campo 'Nombre' no puede estar vacío.");
            isValid = false;
        }

        if (email === null) {
            console.error("Elemento 'email' no encontrado");
            isValid = false;
        } else if (email.value.trim() === "") {
            alert("El campo 'Correo' no puede estar vacío.");
            isValid = false;
        } else if (!validateEmail(email.value)) {
            alert("Por favor, ingresa un correo válido.");
            isValid = false;
        }

        if (password === null) {
            console.error("Elemento 'password' no encontrado");
            isValid = false;
        } else if (password.value.trim() === "") {
            alert("El campo 'Contraseña' no puede estar vacío.");
            isValid = false;
        } else if (password.value.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            isValid = false;
        }

        if (telefono === null) {
            console.error("Elemento 'telefono' no encontrado");
            isValid = false;
        } else if (telefono.value.trim() === "") {
            alert("El campo 'Teléfono' no puede estar vacío.");
            isValid = false;
        } else if (!validatePhoneNumber(telefono.value)) {
            alert("Por favor, ingresa un teléfono válido.");
            isValid = false;
        }

        if (direccion === null) {
            console.error("Elemento 'direccion' no encontrado");
            isValid = false;
        } else if (direccion.value.trim() === "") {
            alert("El campo 'Dirección' no puede estar vacío.");
            isValid = false;
        }

        if (isValid) {
            this.submit();
        }
    });

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    function validatePhoneNumber(phone) {
        const regex = /^[0-9]{10}$/;
        return regex.test(phone);
    }
});

*/


/*
document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
    
    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let telefono = document.getElementById('telefono');
    let direccion = document.getElementById('direccion');

    // Agregar logs de depuración
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Teléfono:", telefono);
    console.log("Dirección:", direccion);
    
    if (nombre === null) {
        console.error("Elemento 'nombre' no encontrado");
        isValid = false;
    } else if (nombre.value.trim() === "") {
        alert("El campo 'Nombre' no puede estar vacío.");
        isValid = false;
    }

    if (email === null) {
        console.error("Elemento 'email' no encontrado");
        isValid = false;
    } else if (email.value.trim() === "") {
        alert("El campo 'Correo' no puede estar vacío.");
        isValid = false;
    } else if (!validateEmail(email.value)) {
        alert("Por favor, ingresa un correo válido.");
        isValid = false;
    }

    if (password === null) {
        console.error("Elemento 'password' no encontrado");
        isValid = false;
    } else if (password.value.trim() === "") {
        alert("El campo 'Contraseña' no puede estar vacío.");
        isValid = false;
    } else if (password.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        isValid = false;
    }

    if (telefono === null) {
        console.error("Elemento 'telefono' no encontrado");
        isValid = false;
    } else if (telefono.value.trim() === "") {
        alert("El campo 'Teléfono' no puede estar vacío.");
        isValid = false;
    } else if (!validatePhoneNumber(telefono.value)) {
        alert("Por favor, ingresa un teléfono válido.");
        isValid = false;
    }

    if (direccion === null) {
        console.error("Elemento 'direccion' no encontrado");
        isValid = false;
    } else if (direccion.value.trim() === "") {
        alert("El campo 'Dirección' no puede estar vacío.");
        isValid = false;
    }

    if (isValid) {
        this.submit();
    }
});

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validatePhoneNumber(phone) {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
}


*/






