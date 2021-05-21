const input = document.querySelectorAll('.w-input');
const check = document.querySelector('.check');
const clear = document.querySelector('.clear');
const show = document.querySelector('.show');
const playButton = document.querySelector('.PlayPause3054584993__button');
const range = document.querySelector('.ProgressBar1832067963__range');

let audio = new Audio('https://music.wixstatic.com/mp3/20b4ac_4de89c3d61f1449f865ba3eb8e14c8b9.mp3');

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

playButton.addEventListener('click', () => {
	audio.paused ? audio.play() : audio.pause();
});
audio.addEventListener('timeupdate', () => {
	let p = audio.currentTime / audio.duration;

	range.value = p * 100;
})
