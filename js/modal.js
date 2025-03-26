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
