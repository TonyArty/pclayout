const sendForm = () => {
	const form = document.querySelector('.modal')

	form.addEventListener('submit', (event) => {
		event.preventDefault()
		const text = form.querySelector('input[type=text]')
		const tel = form.querySelector('input[type=tel]')
		const email = form.querySelector('input[type=email]')

		const sendObj = {
			name: text.value,
			phone: tel.value,
			email: email.value
		}

		fetch('https://jsonplaceholder.typicode.com/todos/4')
		.then(response => {
			return response.json()
		})
		.then(data => {
			console.log(data);
		})

	})
}
sendForm()

// 17:36