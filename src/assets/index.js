'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const API_key = 'AIzaSyBRTWf2kiejB4w0SHCakDVutVGnKb8Bjnw'
	const input = document.querySelector('input'),
		button = document.querySelector('.search_button'),
		videos = document.querySelector('.search__videos');
		
	button.addEventListener('click', (e) => {
		const url = 'https://www.googleapis.com/youtube/v3/search?key=';
		e.preventDefault();
		let data = fetch(
			url + API_key + '&type=video&max_results=10&q=' + input.value,
			)
			.then((req) => req.json())
			.then((req) => {
				console.log(req);
				req.items.forEach((item) => {
					videos.innerHTML += `<iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>`;
				});
			})
			.catch((req) => console.log(req));
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