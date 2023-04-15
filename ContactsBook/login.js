const boton = document.getElementById('button');
const correo = document.getElementById('correo');
const clave = document.getElementById('clave');
const register = document.querySelector('.button_register')

boton.addEventListener("click", (e) => {
    e.preventDefault();

    const email = correo.value;
    const pass = clave.value;

    vacioLogin(email, pass);
});

function credenciales(email, pass) {

    const usuario1 = ['jhon@gmail.com', '1234']
    const usuario2 = ['bryan@gmail.com', '5678']

    if(email == usuario1[0] & pass == usuario1[1] || email == usuario2[0] & pass == usuario2[1]) {
            
        swal.fire({
        icon: 'success',
        text:'El usuario inicio sesión con exito.',
         showConfirmButton: true,});

        correo.value = "";
        clave.value = "";

        setTimeout(ventana, 3000);
    } else {

        swal.fire({
            icon: 'info',
            text:'Revisa el correo o la clave de nuevo, no estas registrado',
            showConfirmButton: true,});
        }
}

function vacioLogin(email, pass) {
    if(email !== "" & pass !== "") {
        valEmail(email, pass);

    } else {
        swal.fire({
        icon: 'info',
        text:'Completa los campos vacios',
        showConfirmButton: true,
        showClass: {
            popup: 'animate__animated animate__shakeX'
        },

        hideClass:{
            popup: 'animate__animated animate__fadeOut'

            }
        });
    };
};

function valEmail(valor, clave){  
    const email = valor;
    const pass = clave;

    const re=/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/

    if(!re.exec(valor)) {

        swal.fire({
            icon: 'info',
            text:'EL correo no es valido',
            showConfirmButton: true,
            showClass: {
                popup: 'animate__animated animate__shakeX'
            },

            hideClass:{
                popup: 'animate__animated animate__fadeOut'
                }
            });

        return false;

    } else {
       bloqueados(email, pass);

        return true;
    };
};

function bloqueados(email, pass) {
    if(email == "bryancastillo@gmail.com" || email == "cristiancriss83@gmail.com") {
        swal.fire({
            icon: 'warning',
            text:'Este usuario esta bloqueado',
            showConfirmButton: true,
            showClass: {
                popup: 'animate__animated animate__shakeX'
            },
    
            hideClass:{
                popup: 'animate__animated animate__fadeOut'}
            });

    } else {
        credenciales(email, pass)
    }
}

function ventana() {
    window.location.href = "/index.html";
}

register.addEventListener('click', () => {
    window.location.href = "/register.html"
})