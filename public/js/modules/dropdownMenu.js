const menuButton = document.querySelector(".dropdown-button");
const shopMenuButton = document.querySelector(".shop-dropdown-button");

const menuItems = document.querySelector(".dropdown-menu-shop");
const menuItems2 = document.querySelector(".dropdown-menu");

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

shopMenuButton.addEventListener('click', () => {
	click(menuItems);
})

const shopMenuButtonSmall = document.querySelector(".shop-dropdown-button-small")
const menuItemsSmall = document.querySelector(".dropdown-menu-shop-small");

shopMenuButtonSmall.addEventListener('click', () => {
	console.log("chau");
	click(menuItemsSmall);
})
