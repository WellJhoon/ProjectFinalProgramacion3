const button = document.getElementById('button_register');
const correo = document.getElementById('correo');
const clave = document.getElementById('clave');


button.addEventListener('click', (e) => {
    e.preventDefault()
    
    console.log(valores())

    ventana()
    
});

function valores() {
    const valor1 = correo.value;
    const valor2 = clave.value;

    const lista = [valor1, valor2]

    return lista
}

function ventana() {
    window.location.href = "/login.html";
}


