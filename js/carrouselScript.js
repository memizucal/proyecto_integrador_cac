const contenedorGrande = document.querySelector('.contenedorGrande');
const punto = document.querySelectorAll('.punto');

punto.forEach((cadaPunto, i)=>{
	punto[i].addEventListener('click', ()=>{
		let posicion = i;
		let operacion = posicion * -50;

		contenedorGrande.style.transform = `translateX(${operacion}%)`

		punto.forEach((cadaPunto, i)=>{
			punto[i].classList.remove('activo');
		})

		punto[i].classList.add('activo');
	})
})

