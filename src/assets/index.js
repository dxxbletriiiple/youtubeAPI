'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const url = 'https://www.googleapis.com/youtube/v3/search?key=';
	const API_key = 'AIzaSyBRTWf2kiejB4w0SHCakDVutVGnKb8Bjnw';
	const input = document.querySelector('.search_input'),
		button = document.querySelector('.search_button'),
		suggestion = document.querySelectorAll('.suggestions_btn');

	button.addEventListener('click', (e) => {
		e.preventDefault();
		getData(input.value);
	});

	suggestion.forEach((item) => {
		item.addEventListener('click', (e) => {
			// ! need to do classlist
			item.classList.add('active-dark');
			if (!e.target.classList.contains('active_dark')) {
				suggestion.forEach((i) => i.classList.remove('acive-dark'));
			}
			// ! need to fix
			document.querySelector('.video_block').innerHTML = '';
			getData(item.innerHTML);
		});
	});
	function getData(q) {
		fetch(url + API_key + '&type=video&part=snippet&max_results=10&q=' + q)
			.then((req) => req.json())
			.then((req) => {
				/* let x = fetch(
					`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${x}&key=AIzaSyBRTWf2kiejB4w0SHCakDVutVGnKb8Bjnw`,
				)
					.then((r) => r.json())
					.then((r) => r.items[0].statistics.viewCount);
				*/
				console.log(url + API_key + '&type=video&part=snippet&max_results=10&q=' + q);
				console.log(req);
				req.items.forEach((vid) => {
					const video = new appendVideos(
						vid.snippet.title,
						vid.snippet.channelTitle,
						vid.snippet.publishTime,
						0,
						vid.id.videoId,
					);
					video.render();
				});
			})
			.catch((req) => console.log(req));
	}

	function getViews(id) {
		return fetch(
			`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=AIzaSyBRTWf2kiejB4w0SHCakDVutVGnKb8Bjnw`,
		)
			.then((r) => r.json())
			.then((r) => r.items[0].statistics.viewCount);
	}
	class appendVideos {
		constructor(title, author, date, views, vidID) {
			this.title = title;
			this.author = author;
			this.date = new Date(date).toLocaleDateString();
			this.vidID = vidID;
			this.views = views;
			this.parent = document.querySelector('.video_block');
		}
		render() {
			const elem = document.createElement('div');
			if (this.parent.innerHTML != '') this.parent.innerHTML = '';
			elem.innerHTML = `
				<iframe class="w-290 h-162" src="http://www.youtube.com/embed/${this.vidID}" frameborder="0" allowfullscreen></iframe>
				<div class="video-text w-290 h-72 mt-2.5 ml-42">
						<div class="video_title font-sans text-13 font-bold">${this.title}</div>
						<div class="video_author text-xs text-72 mt-1.5">${this.author}</div>
						<span class="views text-xs text-72">${this.views}</span>
						<span class="video_date text-xs text-72">• ${this.date}</span>
				</div>
				`;
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

const hamburger = document.querySelector('.hamburger');
const sideBar = document.querySelector('aside');
const container = document.querySelector('.container');

hamburger.addEventListener('click', () => {
	sideBar.classList.toggle('left-0');
	sideBar.classList.toggle('left-x');
});

/* const targetEl = document.getElementById('tooltip-dark');

// set the element that trigger the tooltip using hover or click
const triggerEl = document.getElementById('tooltipButton');

// options with default values
const options = {
	placement: 'bottom',
	triggerType: 'hover',
	onHide: () => {
		console.log('tooltip is shown');
	},
	onShow: () => {
		console.log('tooltip is hidden');
	},
};

const tooltip = new Tooltip(targetEl, triggerEl, options);

tooltip.show();

// hide the tooltip
tooltip.hide();
 */
