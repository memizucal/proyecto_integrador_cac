const menuButton = document.querySelector(".dropdown-button");
const shopMenuButton = document.querySelector(".shop-dropdown-button");
const shopMenuButtonSmall = document.querySelector(".shop-dropdown-button-small")

const menuItems = document.querySelector(".dropdown-menu-shop");
const menuItems2 = document.querySelector(".dropdown-menu");
const menuItemsSmall = document.querySelector(".dropdown-menu-shop-small");
let isClicked = true;

shopMenuButton.addEventListener('click', () =>{

	if(isClicked == true){
		menuItems.style.display = "flex";
		isClicked = false;
	}else{
		menuItems.style.display = "none";
		isClicked = true;
	}
})

menuButton.addEventListener('click', ()=>{
	if(isClicked == true){
		menuItems2.style.display = "flex";
		isClicked = false;
	}else{
		menuItems2.style.display = "none";
		isClicked = true;
	}
})

shopMenuButtonSmall.addEventListener('click', ()=>{
	if(isClicked == true){
		menuItemsSmall.style.display = "flex";
		isClicked = false;
	}else{
		menuItemsSmall.style.display = "none";
		isClicked = true;
	}
})

const sidebarDropdownButton = document.querySelector(".sidebar-dropdown-button");
const sidebarDropdownMenu = document.querySelector(".sidebar-dropdown-menu");
let isClickedSidebar = true;

sidebarDropdownButton.addEventListener('click', ()=>{
	if(isClickedSidebar == true){
		sidebarDropdownMenu.style.display = "flex";
		isClickedSidebar = false;
	}else{
		sidebarDropdownMenu.style.display = "none";
		isClickedSidebar = true;
	}
})


