const sendForm = () => {
	const form = document.querySelector('.modal')

	form.addEventListener('submit', () => {
		console.log('submit')
	})
}
sendForm()