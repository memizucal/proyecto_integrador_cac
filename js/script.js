const menuButton = document.querySelector(".dropdown-button");
const shopMenuButton = document.querySelector(".shop-dropdown-button");
const shopMenuButtonSmall = document.querySelector(".shop-dropdown-button-small")

const menuItems = document.querySelector(".dropdown-menu-shop");
const menuItems2 = document.querySelector(".dropdown-menu");
const menuItemsSmall = document.querySelector(".dropdown-menu-shop-small");
let isClicked = true;


function click(openMenu) {
	if (isClickedSidebar == true) {
		openMenu.style.display = "flex";
		isClickedSidebar = false;
	} else {
		openMenu.style.display = "none";
		isClickedSidebar = true;
	}
}

shopMenuButton.addEventListener('click', () => {
	click(menuItems);
})

menuButton.addEventListener('click', () => {
	click(menuItems2);
})

shopMenuButtonSmall.addEventListener('click', () => {
	click(menuItemsSmall);
})

document.addEventListener('DOMContentLoaded', ()=>{
	setTimeout(()=>{
		const whatsappIcon = document.getElementById("whatsapp-div");
		whatsappIcon.style.display = "flex";
		console.log("hola")
	}, 5000)
});

let sidebarDropdownButton = document.querySelector(".sidebar-dropdown-button");
let sidebarDropdownMenu = document.querySelector(".sidebar-dropdown-menu");
let isClickedSidebar = true;

sidebarDropdownButton.addEventListener('click', () => {
	click(sidebarDropdownMenu)
});


// let pages = document.querySelectorAll(".page-element");
// let isActive = true;








