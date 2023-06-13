import { validateString } from "./validateString.js";

const getDataAdd = () => {
	let category, license, productName, description, sku, price, stock, discount, quota, image;

	const categoryInput = document.querySelector("#category");
	const licenseInput = document.querySelector("#license");
	const productNameInput = document.querySelector("#productName");
	const descriptionInput = document.querySelector("#description");
	const skuInput = document.querySelector("#sku");
	const priceInput = document.querySelector("#price");
	const stockInput = document.querySelector("#stock");
	const discountInput = document.querySelector("#discount");
	const quotaInput = document.querySelector("#quota");
	const imageInput = document.querySelector("#image");

	const textRegex = /[A-ZÑa-zñ]+/i;
	const skuRegex = /^[0-9a-zA-Z]+$/;
	const numRegex = /^[0-9]+$/;

	category = document.querySelector("#category").options[document.querySelector("#category").selectedIndex].text;
	license = document.querySelector("#license").options[document.querySelector("#license").selectedIndex].text;
	productName = document.querySelector("#productName").value;
	description = document.querySelector("#description").value;
	sku = document.querySelector("#sku").value;
	price = document.querySelector("#price").value;
	stock = document.querySelector("#stock").value;
	discount = document.querySelector("#discount").value;
	quota = document.querySelector("#quota").options[document.querySelector("#quota").selectedIndex].text;
	// image = document.querySelector("#image").value;

	let strValid = true;

	if (!validateString(productName, textRegex)) {
		productNameInput.style.border = "1px solid red";
		strValid = false;
	}
	if (!validateString(description, textRegex)) {
		descriptionInput.style.border = "1px solid red";
		strValid = false;
	}
	if (!validateString(sku, skuRegex)) {
		skuInput.style.border = "1px solid red";
		strValid = false;
	}
	if (!validateString(price, numRegex)) {
		priceInput.style.border = "1px solid red";
		strValid = false;
	}
	if (!validateString(stock, numRegex)) {
		stockInput.style.border = "1px solid red";
		strValid = false;
	}
	if (!validateString(discount, numRegex)) {
		discountInput.style.border = "1px solid red";
		strValid = false;
	}
	if(category == "Seleccionar"){
		categoryInput.style.border = "1px solid red";
		strValid= false;
	}
	if(license == "Seleccionar"){
		licenseInput.style.border = "1px solid red";
		strValid= false;
	}
	if(quota == "Seleccionar"){
		quotaInput.style.border = "1px solid red";
		strValid= false;
	}

	const data = {
        category: category,
        license: license,
        productName: productName,
        description : description,
        sku: sku,
        price: price,
        stock: stock,
        discount: discount,
        quota: quota,
        // image: image
    }

	console.log(data)

    if(!strValid){
		console.log("NO SE PUEDE ENVIAR")
	}else{
        console.log("Se pudo enviar")
    }
}

export { getDataAdd }
