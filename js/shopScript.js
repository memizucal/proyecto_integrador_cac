let sidebarDropdownButton = document.querySelector(".sidebar-dropdown-button");
let sidebarDropdownMenu = document.querySelector(".sidebar-dropdown-menu");
let isClickedSidebar = true;

function click(openMenu) {
	if (isClickedSidebar == true) {
		openMenu.style.display = "flex";
		isClickedSidebar = false;
	} else {
		openMenu.style.display = "none";
		isClickedSidebar = true;
	}
}

sidebarDropdownButton.addEventListener('click', () => {
	click(sidebarDropdownMenu)
});