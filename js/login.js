document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        function promesa() {

            alert('Cargando...')
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("INICIO DE SESION EXITOSO");

                }, 2000);
            });
        }

        // Validar el correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Ingrese un correo electrónico válido');
            return;
        }

        // Validar la contraseña
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(passwordInput.value)) {
            alert('La contraseña debe tener al menos 8 caracteres, una minúscula, una mayúscula y al menos 2 números.');
            return;
        }

        // Validar usuario y contraseña en la lista
        var usuarios = [
            { usuario: 'usuario1@example.com', contrasena: 'Contrasena12' },
            { usuario: 'usuario2@example.com', contrasena: 'Contrasena23' },
            { usuario: 'usuario3@example.com', contrasena: 'Contrasena34' }
        ];

        const enteredPassword = passwordInput.value;
        const enteredUser = emailInput.value;

        for (let i = 0; i < usuarios.length; i++) {
            if (enteredUser == usuarios[i].usuario && enteredPassword == usuarios[i].contrasena) {
                alert('Usuario y contraseña validos');
                break;
            } else
                alert('Usuario o contraseña incorrectos');

        }

        //promesa
        promesa().then((mensajeExito) => {
            window.location.href = "vista.html";
        }).catch((error) => {
            console.error(error);
        });
    }
    )
});



