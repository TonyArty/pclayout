const navBar = document.querySelector('.header__nav')
const navLinks = navBar.querySelectorAll('a')

navLinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault()
		const section = document.querySelector(link.getAttribute('href'))

		if (section) {
			section.scrollIntoView({
				block: 'center',
				behavior: 'smooth'
			})
		}
	})
})