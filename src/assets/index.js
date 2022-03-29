'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const getElement = (elem) => document.querySelector(elem);
	const input = getElement('input'),
		button = getElement('button');

	button.addEventListener('click', (e) => {
		e.preventDefault();
	});

	//change color-theme
	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}

	// Whenever the user explicitly chooses light mode
	localStorage.theme = 'light';

	// Whenever the user explicitly chooses dark mode
	localStorage.theme = 'dark';

	// Whenever the user explicitly chooses to respect the OS preference
	localStorage.removeItem('theme');
});
