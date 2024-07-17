const guardarContacto = (base, contacto) => {
	base.setItem(contacto.id, JSON.stringify(contacto));

}

const cargarContacto = (base, parentNode) => {
	let claves = Object.keys(base)
	for (clave of claves) {
		let contacto = JSON.parse(base.getItem(clave))
		crearContacto(parentNode, contacto, base)

	}
}

const crearContacto = (parentNode, contacto, base) => {

	let divContacto = document.createElement('div')
	let nombreContacto = document.createElement('h3')
	let correoContacto = document.createElement('p')
	let celularContacto = document.createElement('p')
	let iconoBorrar = document.createElement('span')

	nombreContacto.innerHTML = contacto.nombre
	correoContacto.innerHTML = contacto.correo
	celularContacto.innerHTML = contacto.celular
	iconoBorrar.innerHTML = 'delete'

	divContacto.classList.add('contacto')
	iconoBorrar.classList.add('material-icons', 'icono')

	iconoBorrar.onclick = () => {
		base.removeItem(contacto.id)
		alert('Contacto eliminado con exito')
		window.location.href = '/'
	}

	divContacto.appendChild(nombreContacto)
	divContacto.appendChild(correoContacto)
	divContacto.appendChild(celularContacto)
	divContacto.appendChild(iconoBorrar)

	parentNode.appendChild(divContacto)



}