'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const url = 'https://www.googleapis.com/youtube/v3/search?key=';
	const API_key = 'AIzaSyBRTWf2kiejB4w0SHCakDVutVGnKb8Bjnw';
	const input = document.querySelector('.search_input');
	const button = document.querySelector('.search_button');
	const suggestion = document.querySelectorAll('.suggestions_btn');
	const hamburger = document.querySelector('.hamburger');
	const sideBar = document.querySelector('aside');
	const container = document.querySelector('.container');

	hamburger.addEventListener('click', () => {
		sideBar.classList.toggle('left-0');
		sideBar.classList.toggle('left-x');
	});
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
			// document.querySelector('.video_block').innerHTML = '';
			getData(item.innerHTML);
		});
	});

	const videoData = [];
	// prettier-ignore
	async function getData(q) {
		let searchData = await fetch(url + API_key + '&type=video&part=snippet&max_results=10&q=' + q,)
			.then((res) => res.json());

		async function pushID(rs) {
			await rs.items.forEach((item) =>
				videoData.push({
					videoID: item.id.videoId,
					channelID: item.snippet.channelId,
					author: item.snippet.channelTitle,
					title: item.snippet.title,
					date: new Date(item.snippet.publishedAt).toDateString(),
				}),
			);
			console.log('pushid', videoData);
		}
		async function getVideoViews(id) {
			await id.forEach(async (item) => {
				await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${item.videoID}&key=AIzaSyBRTWf2kiejB4w0SHCakDVutVGnKb8Bjnw`,)
					.then((resp) => resp.json())
					.then((resp) => item.views = resp.items[0].statistics.viewCount);
				});
			console.log('getviews', videoData);
			await renderVideos(videoData);
		}
		async function getChannelLogo(id) {
			await id.forEach((item) => {
				fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.channelID}&key=AIzaSyBRTWf2kiejB4w0SHCakDVutVGnKb8Bjnw`)
					.then((resp) => resp.json())
					.then((resp) => item.channelLogo = resp.items[0].snippet.thumbnails.default.url);
			});
			console.log('channellogo', videoData);
		}
		async function renderVideos(arr) {
			let newArr = await arr;
			console.log('rendervid', newArr);
			await newArr.forEach((item) => {
				const render = new AppendVideos(item);
				render.render();
			});
		}
		await pushID(searchData);
		await getVideoViews(videoData);
		await getChannelLogo(videoData);
	}
	/*
	async function sortVideo(vid) {
		for (let key in vid) {
		}
	} */

	class AppendVideos {
		constructor(obj) {
			this.author = obj.author;
			this.logo = obj.channelLogo;
			this.date = obj.date;
			this.title = obj.title;
			this.vidID = obj.vidID;
			this.views = obj.views;
			this.parent = document.querySelector('.video_block');
		}
		render() {
			const elem = document.createElement('div');
			// if (this.parent.innerHTML != '') this.parent.innerHTML = '';
			elem.innerHTML = `
			<div class="mr-3 mb-3">
				<iframe class="w-290 h-162" src="http://www.youtube.com/embed/${this.vidID}" frameborder="0" allowfullscreen></iframe>
				<div class="flex mt-2.5 w-290 h-72">
					<img class="video_logo w-8 h-8 rounded-full" src=${this.logo} alt="${this.author}"/>
					<div class="video-text ml-3">
						<div class="video_title font-sans text-13 font-bold dark:text-white">${this.title}</div>
						<div class="video_author text-xs text-72 dark:text-white">${this.author}</div>
						<div class="vide_info flex">
							<span class="views text-xs text-72 dark:text-white">${this.views}&nbsp;</span>
							<span class="video_date text-xs text-72 dark:text-white">•&nbsp;${this.date}</span>
						</div>
					</div>
				</div>
			</div>`;
			this.parent.append(elem);
		}
	}

	localStorage.setItem('theme', 'dark');

	/* 	const changeTheme = document.querySelector('.theme');
	changeTheme.addEventListener('click', (e) => {
		e.preventDefault();
	});
	function setTheme(theme) {
		if ()
	}
	function getSavedTheme() {
		return localStorage.getItem('theme');
	}
	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	} */
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
