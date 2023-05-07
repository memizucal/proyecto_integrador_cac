let sidebarDropdownButton = document.querySelector(".sidebar-dropdown-button");
let sidebarDropdownMenu = document.querySelector(".sidebar-dropdown-menu");
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

sidebarDropdownButton.addEventListener('click', () => {
	click(sidebarDropdownMenu)
});