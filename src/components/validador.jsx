document.getElementById('frm').addEventListener('submit', validarFormulario)

function validarFormulario(event) {
    event.preventDefault()

    limpiarErrores()

    let esValido = true

    let nombre = document.frm.nombre.value;
    let correo = document.frm.email.value;
    let celular = document.frm.celular.value;

    if (nombre.trim() === '') {
        mostrarError('nameError', 'El nombre es obligatorio')
        esValido = false
    }

    if (!validarCorreo(correo)){
        mostrarError('emailError','El correo no es válido')
        esValido = false
    }

    if (!validarCelular(celular)){
        mostrarError('celularError','El número de celular no es válido')
        esValido = false
    }

    if (esValido){
        alert('Contacto agregado correctamente')
        document.frm.reset()
    }
}

function validarCorreo(correo){
    const express = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return express.test(correo)
}

function validarCelular(celular){
    const expresion = /^.+569[0-9]{8}$/
    return expresion.test(celular)
}

function mostrarError(id, mensaje) {
    document.getElementById(id).innerText = mensaje
}

function limpiarErrores() {
    document.getElementById('nameError').innerText = ''
    document.getElementById('emailError').innerText = ''
    document.getElementById('celularError').innerText = ''
}