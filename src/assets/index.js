('use strict');

document.addEventListener('DOMContentLoaded', () => {
	const API_key = 'AIzaSyBRTWf2kiejB4w0SHCakDVutVGnKb8Bjnw';
	const input = document.querySelector('input'),
		button = document.querySelector('.search_button'),
		videos = document.querySelector('.search__videos');

	button.addEventListener('click', (e) => {
		const url = 'https://www.googleapis.com/youtube/v3/search?key=';
		e.preventDefault();
		fetch(url + API_key + '&type=video&part=snippet&max_results=10&q=' + input.value)
			.then((req) => req.json())
			.then((req) => {
				console.log(req);
				req.items.forEach((vid) => {
					const video = new appendVideos(
						vid.snippet.title,
						vid.snippet.channelTitle,
						vid.snippet.publishTime,
						50,
						vid.id.videoId,
					);
					video.render();
				});
			})
			.catch((req) => console.log(req));
	});

	class appendVideos {
		constructor(title, author, date, views, vidID) {
			this.title = title;
			this.author = author;
			this.date = new Date(date).toLocaleDateString();
			this.vidID = vidID;
			this.views = views;
			this.parent = document.querySelector('.search__videos');
		}
		render() {
			const elem = document.createElement('div');
			elem.innerHTML = `<iframe width="420" height="315" src="http://www.youtube.com/embed/${this.vidID}" frameborder="0" allowfullscreen></iframe>`;

			this.parent.append(elem);
		}
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

/* {
Задание №1
Необходимо разработать приложение, которое использует API YouTube и по запросу получает данные
о роликах.
В приложении должны быть: строка для запроса и кнопка "искать".
После нажатия на кнопку "искать" необходимо:
- получить 10 (максимум) самых новых
видеороликов, которые соответствуют запросу.
- отобразить список из 10 видеороликов (которые получили), список должен быть отсортирован по популярности (количество просмотров) от большего к
меньшему
- каждый элемент списка содержит информацию: название ролика, автор, дата публикации
- при нажатии на названии ролика, открывается проигрыватель (эффект аккордеон)
- над списком должен быть текст: "результат поиска по запросу: {запрос}"
При решении поставленной задачи обязательно использовать Git.
Ответ прислать в виде ссылки на опубликованный результат и ссылки на репозиторий в Git.
Желательно использовать только нативный JS, но можно использовать любые библиотеки, если сможете аргументировать целесообразность их использования.
Для стилевого оформления желательно использовать tailwindcss
Критерии оценки:
1. Выполнение всех пунктов задания (как поняли задачу)
2. Качество кода (как реализовали технически)
3. Эстетика

} */
