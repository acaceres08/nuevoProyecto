import uuid4 from "uuid4"

const nombre = document.querySelector('.nombre')
const correo = document.querySelector('.email')
const celular = document.querySelector('.celular')
const Agregar = document.querySelector('.btn-agregar-contacto')

const listaContactos = document.querySelector('.lista_contactos')

const base = window.localStorage

Agregar.onclick = () => {

    let contacto = {
        id: uuid4(),
        nombre: nombre.value,
        correo: correo.value,
        celular: celular.value
    }

    if (nombre.value === '' || correo.value === '' || celular.value === '') return
    else {
        guardarContacto(base, contacto)
        window.location.href = '/'
    }



}

cargarContacto(base, listaContactos)