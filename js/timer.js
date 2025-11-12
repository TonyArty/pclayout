const timer = () => {
	const daysBox = document.querySelector('.timer__days')
	const hoursBox = document.querySelector('.timer__hours')
	const minutesBox = document.querySelector('.timer__minutes')
	const secondsBox = document.querySelector('.timer__seconds')

	let interval

	const numWord = (value, words) => {
		value = Math.abs(value) % 100
		const lastNum = value % 10

		if (value > 10 & value < 20) return words[2]
		if (lastNum > 1 && lastNum < 5) return words[1]
		if (lastNum === 1) return words[0]

		return words[2]
	}

	const updateTimer = () => {
		const date = new Date()
		const dateDeadline = new Date('28 november 2025').getTime()
		const timeRemaining = (dateDeadline - date) / 1000

		const days = Math.floor(timeRemaining / 60 / 60 / 24)
		const hours = Math.floor((timeRemaining / 60 / 60) % 24)
		const minutes = Math.floor((timeRemaining / 60) % 60)
		const seconds = Math.floor(timeRemaining % 60)

		const fDays = days < 10 ? '0' + days : days
		const fHours = hours < 10 ? '0' + hours : hours
		const fMinutes = minutes < 10 ? '0' + minutes : minutes
		const fSeconds = seconds < 10 ? '0' + seconds : seconds
		
		daysBox.textContent = fDays
		hoursBox.textContent = fHours
		minutesBox.textContent = fMinutes
		secondsBox.textContent = fSeconds

		daysBox.nextElementSibling.textContent = numWord(days, ['День', 'Дня', 'Дней'])
		hoursBox.nextElementSibling.textContent = numWord(hours, ['Час', 'Часа', 'Часов'])
		minutesBox.nextElementSibling.textContent = numWord(minutes, ['Минута', 'Минуты', 'Минут'])
		secondsBox.nextElementSibling.textContent = numWord(seconds, ['Cекунда', 'Cекунды', 'Cекунд']) 

		if (timeRemaining <= 0) {
			clearInterval(interval)
			daysBox.textContent = '00'
			hoursBox.textContent = '00'
			minutesBox.textContent = '00'
			secondsBox.textContent = '00'
			daysBox.style = 'color: red;'
			hoursBox.style = 'color: red;'
			minutesBox.style = 'color: red;'
			secondsBox.style = 'color: red;'
		}
	}

	interval = setInterval(updateTimer, 500)
}
timer()