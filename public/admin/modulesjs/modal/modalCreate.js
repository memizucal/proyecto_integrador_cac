import { getDataAdd } from "./validationCreate.js"
import { clearInput } from "./clearInput.js"
import { imgToBase64 } from "./imgToBase64.js";

//Agarro al boton "Agregar producto"
const addProduct = document.querySelector("#add-product");
//Agarro al section donde entrará el modal
const addModal = document.querySelector("#add-modal");
//Creo un fragmento vacio
const modalFragment = document.createDocumentFragment();
//Creo el articulo que contenerá el modal
const modalCreate = document.createElement("article");
//Esta variable va a servir para convertir el archivo en base 64



//Agrego el HTML del modal al elemento Article
modalCreate.innerHTML = `
<div class="div-create">
	<img class="x-close" id="x-close" src="../multimedia/medios/x.svg" alt="">
	<h2 class="create-tittle">CREAR NUEVO ITEM</h2>
	<form action="" class="create-form">
		<div class="cat-lic">
			<label for="" class="label">Categoría: 
				<select id="category" name="categoria" class="select">
					<option value="0">Seleccionar</option>
					<option value="1">StarWars</option>
					<option value="2">Harry Potter</option>
					<option value="3">Pokemon</option>
				</select></label>
					
			<label for="" class="label">Licencia: 
				<select id="license" name="licencia"  class="select">
					<option value="seleccionar">Seleccionar</option>
					<option value="">Disney</option>
					<option value="">Wizarding World</option>
					<option value="">Pokemon</option>
				</select>
			</label>
					
			</div>
				<div class="productName">
					<label for="" class="label">Nombre del producto: 
						<input id="productName" type="text" class=" input input-productName" placeholder="Kakashi Hatake Shippuden Saga"> 
					</label>
				</div>

			<textarea id="description" class="input input-descripcion" placeholder="Descripción del producto"></textarea>

			<div class="sku-price-stock">
				<label for="" class="label">SKU: <input id="sku" type="text" class="input input-sku" placeholder="SSK111AB001"></label>

				<label for="" class="label">Precio: <input id="price" type="text" class="input input-price" placeholder="$ 0.000,00"></label>
				
				<label for="" class="label">Stock: <input id="stock" type="text" class="input input-stock" placeholder="0"></label>					
			</div>

			<div class="discount-cuotas">
				<label for="" class="label">Descuento: <input id="discount" type="text" class="input input-discount" placeholder="0%"></label>
					
				<label for="" class="label">Cuotas: 
				<select id="quota" name="cuotas" class="select cuotas">
					<option value="seleccionar">Seleccionar</option>	
					<option value="">3 Cuotas sin interés</option>
					<option value="">6 Cuotas sin interés</option>
					<option value="">12 Cuotas sin interés</option>
				</select>
				</label>
					
			</div>
			<span class="add-img">
			Imágenes:
				<label class="label">
					<input type="file" accept="image/*" class="input-img" id="image" multiple="multiple">
				</label>
			</span>
			<div class="buttons">
				<input id="submitAddProduct" type="submit" class="add-product" value="Agregar producto">
				<input id="clearAddProduct" type="submit" class="clear" value="Limpiar">
			</div>

		</form>
</div>
`

const showModal = () => {
	addModal.classList.replace("modal-show-none", "modal-show");
	modalCreate.classList.add("modal-create");
	modalFragment.appendChild(modalCreate);
	addModal.appendChild(modalFragment);
}

//Eventos relacionados con el boton agregar Producto

addProduct.addEventListener('click', showModal);

//Eventos que ocurran dentro del modal

addModal.addEventListener('click', (e) => {
	if (e.target.id === "x-close") {
		addModal.classList.replace("modal-show", "modal-show-none");
	}
	if (e.target.id === "submitAddProduct") {
		console.log("hola")
		e.preventDefault();
		getDataAdd();
	}
	if (e.target.id === "clearAddProduct") {
		console.log("Limpiar")
		e.preventDefault();
		clearInput();
	}
	if(e.target.id === "image"){
		imgToBase64();
	}

})









