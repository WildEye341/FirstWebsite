//Show Navbar
//targeting mobilemenu and the first array (0)
const toggleButton = document.getElementsByClassName('mobilemenu')[0]
//targeting navbar-links and the first array (0)
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
//Listen on click on toggle button then activate the navbarlinks list
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})