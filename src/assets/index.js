'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const input = document.querySelector('input'),
		button = document.querySelector('.search_button'),
		videos = document.querySelector('.search__videos');

	button.addEventListener('click', (e) => {
		const API_key = 'AIzaSyBXPbiAW_4jkqVFiE-hnHJkuRoy9X6HABk'; //API Youtube V3
		const url = 'https://www.googleapis.com/youtube/v3/search?key=';
		e.preventDefault();
		let data = fetch(
			url + API_key + '&type=video&metrics=views&max_results=10&q=' + input.value,
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

	{
		// https://www.googleapis.com/youtube/v3/search?key=AIzaSyBXPbiAW_4jkqVFiE-hnHJkuRoy9X6HABk&type=video&part=snippet&maxResults=&q=pewdiepie
		const form = document.querySelector('.form-control');
		const btn = document.querySelector('.btn');
		const vid = document.querySelector('#videos');
		function getData(info) {
			// get("https://www.googleapis.com/youtube/v3/search?key=" + key
			// + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,
			let data =
				'https://www.googleapis.com/youtube/v3/search?key=' +
				API_key +
				'&type=video&part=snippet&metrics=views&max_results=10&q=' +
				info;
			fetch(data)
				.then((req) => req.json())
				.then((req) => {
					let sortedArr =
						(req.items.vid.innerHTML = `<iframe width="420" height="315" src="http://www.youtube.com/embed/${req.items[0].id.videoId}" frameborder="0" allowfullscreen></iframe>`);

					// });
					console.log(req.items);
				});
		}
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			getData(form.value);
		});
	}

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
