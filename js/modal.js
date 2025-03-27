const modal = () => {
	// popup about PC

	const modalBtn = document.querySelector('.modal__button')
	const modal = document.querySelector('.modal')
	
	modalBtn.addEventListener('click', () => {
		modal.style.display = 'flex'
	})
	
	modal.addEventListener('click', (event) => {
		const modalContent = event.target.closest('.modal__inner')
		if (!modalContent) {
			modal.style.display = 'none'
		}
	})
	
	const modalInner = document.querySelector('.modal__inner');
	modalInner.style = 'position: relative;'
	const closeBtn = document.createElement('div');
	closeBtn.innerHTML = '<a style="position: absolute; top: 20px; right: 20px; font-size: 30px; font-weight: bold; cursor: pointer;">&#x2715;</a>';
	modalInner.append(closeBtn);
	closeBtn.addEventListener('click', () => {
		modal.style.display = 'none'
	})
	
	// popup about Course
	
	// const courseBtn = document.querySelector('.course__button')
	// const modalCourse = document.querySelector('#course')
	
	// courseBtn.addEventListener('click', () => {
	// 	modalCourse.style.display = 'flex'
	// })
	
	// modalCourse.addEventListener('click', (event) => {
	// 	const modalContentCourse = event.target.closest('.modal__inner')
	// 	if (!modalContentCourse) {
	// 		modalCourse.style.display = 'none'
	// 	}
	// })
	
	// const modalInnerCourse = modalCourse.querySelector('.modal__inner');
	// modalInnerCourse.style = 'position: relative;'
	// const closeBtnCourse = document.createElement('div');
	// closeBtnCourse.innerHTML = '<a style="position: absolute; top: 20px; right: 20px; font-size: 30px; font-weight: bold; cursor: pointer;">&#x2715;</a>';
	// modalInnerCourse.append(closeBtnCourse);
	// closeBtnCourse.addEventListener('click', () => {
	// 	modalCourse.style.display = 'none'
	// })

}
modal()