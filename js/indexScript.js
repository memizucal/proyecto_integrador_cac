const menuButton = document.querySelector(".dropdown-button");
const shopMenuButton = document.querySelector(".shop-dropdown-button");
const shopMenuButtonSmall = document.querySelector(".shop-dropdown-button-small")

const menuItems = document.querySelector(".dropdown-menu-shop");
const menuItems2 = document.querySelector(".dropdown-menu");
const menuItemsSmall = document.querySelector(".dropdown-menu-shop-small");
let isClicked = true;


function click(openMenu) {
	if (isClicked == true) {
		openMenu.style.display = "flex";
		isClicked = false;
	} else {
		openMenu.style.display = "none";
		isClicked = true;
	}
}


menuButton.addEventListener('click', () => {
	click(menuItems2);
})

shopMenuButtonSmall.addEventListener('click', () => {
	click(menuItemsSmall);
})

shopMenuButton.addEventListener('click', () => {
	click(menuItems);
})

document.addEventListener('DOMContentLoaded', ()=>{
	setTimeout(()=>{
		const whatsappIcon = document.getElementById("whatsapp-div");
		whatsappIcon.style.display = "flex";
		console.log("hola")
	}, 5000)
});






// let pages = document.querySelectorAll(".page-element");
// let isActive = true;



// function sumar(){
//     let num = document.getElementById('num').value;
    
//     if(num == ''){
//         num ="0";
        
//     }
    
//     let sumar = parseInt(num) +1;
//     document.getElementById('num').value = sumar;
// }



