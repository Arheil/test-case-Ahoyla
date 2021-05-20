const input = document.querySelectorAll('.w-input');
const check = document.querySelector('.check');
const clear = document.querySelector('.clear');
const show = document.querySelector('.show');

const showData = () => {
 	input.forEach( i => {
	i.getAttribute("data-text");
	i.value = i.dataset.text;
	i.classList.add('showData');
});
}

const clearData = () => {
	input.forEach( i => i.value = "")
}

const checkData = () => {
	input.forEach( i => {
		i.getAttribute("data-text");
		i.value === i.dataset.text ? i.classList.add('ok') : i.classList.add('error');
	})
}

check.addEventListener('click', checkData);
show.addEventListener('click', showData);
clear.addEventListener('click', clearData);