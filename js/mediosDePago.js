const paymentMethods = document.querySelector('.payment-methods');
let mediosDePago = document.querySelector('.modal-medios');
let xClose = document.querySelector('.x-close');


paymentMethods.addEventListener('click', ()=>{
	paymentMethods.classList.add('activo');
	mediosDePago.style.display = "flex";
	paymentMethods.classList.remove('activo');
})

xClose.addEventListener('click', ()=>{
	mediosDePago.style.display = "none";
	
})