
const clearInput = () =>{
	console.log("clear");
	
	let campos = document.querySelectorAll("input[type='text'], input[type='password']")
		let categoryInput = document.querySelector("#category");
		let licenseInput = document.querySelector("#license");	
		let descriptionInput = document.querySelector("#description");
		let quotaInput = document.querySelector("#quota");
		let imageInput = document.querySelector("#image");
	
	campos.forEach(campo => {
		if(campo.value != "") campo.value = ""
	})

	if(descriptionInput.value != "") descriptionInput.value = "";

}



export {clearInput}