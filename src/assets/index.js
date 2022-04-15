'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const url = 'https://www.googleapis.com/youtube/v3/search?key=';
	const API_key = 'AIzaSyBRTWf2kiejB4w0SHCakDVutVGnKb8Bjnw';
	const input = document.querySelector('.search_input');
	const button = document.querySelector('.search_button');
	const suggestion = document.querySelectorAll('.suggestions_btn');
	const hamburger = document.querySelector('.hamburger');
	const sideBar = document.querySelector('aside');
	const videoBlock = document.querySelector('.video_block');
	const container = document.querySelector('.container');
	document.addEventListener('keydown', (e) => {
		if (e.code == 'Slash') input.focus();
	});

	hamburger.addEventListener('click', () => {
		sideBar.classList.toggle('left-0');
		sideBar.classList.toggle('left-x');
	});
	button.addEventListener('click', (e) => {
		e.preventDefault();
		getData(input.value);
	});
	let fetchdata;
	suggestion.forEach((item) => {
		item.addEventListener('click', (e) => {
			// ! need to do classlist
			item.classList.add('active-dark');
			if (!e.target.classList.contains('active_dark')) {
				suggestion.forEach((i) => i.classList.remove('acive-dark'));
			}
			// ! need to fix
			// document.querySelector('.video_block').innerHTML = '';
			fetchdata = getData(item.innerHTML);
		});
	});
	// getData('kanye');
	const videoData = [];
	let statId = '';
	let channelStat = '';
	async function getData(q) {
		return fetch(
			url + API_key + '&type=video&part=snippet&max_results=10&order=viewCount&q=' + q,
		)
			.then((res) => res.json())
			.then((res) => pushID(res))
			.then((stat) => getVideoViews(stat))
			.then((ch) => getChannelLogo(ch))
			.then((obj) => {
				console.log(obj);
				renderData(obj);
			});
	}

	function pushID(rs) {
		rs.items.forEach((item) => {
			videoData.push({
				videoID: item.id.videoId,
				channelID: item.snippet.channelId,
				author: item.snippet.channelTitle,
				title: item.snippet.title,
				date: new Date(item.snippet.publishedAt).toDateString(),
				thumbnail: `https://i.ytimg.com/vi/${item.id.videoId}/mqdefault.jpg`,
			});
			statId += '&id=' + item.id.videoId;
			channelStat += '&id=' + item.snippet.channelId;
		});
		return statId;
	}
	function getVideoViews(id) {
		fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics${id}&key=${API_key}`)
			.then((resp) => resp.json())
			.then((resp) => {
				// this.bind(resp);
				for (let i = 0; i < resp.items.length; i++) {
					videoData[i].views = resp.items[i].statistics.viewCount;
				}
			});
		return channelStat;
	}
	function getChannelLogo(id) {
		fetch(
			`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&${id}&key=${API_key}`,
		)
			.then((resp) => resp.json())
			.then((resp) => {
				// this.bind(resp);
				for (let i = 0; i < resp.items.length; i++)
					videoData[i].channelLogo = resp.items[i].snippet.thumbnails.default.url;
			});
		return videoData;
	}
	function renderData(arr) {
		arr.forEach((item) => {
			let x = new AppendVideos(item);
			x.render();
		});
	}
	class AppendVideos {
		constructor(obj) {
			this.author = obj.author;
			this.logo = obj.channelLogo;
			this.date = obj.date;
			this.title = obj.title;
			this.videoID = obj.videoID;
			this.views = obj.views;
			this.parent = videoBlock;
		}
		render() {
			const elem = document.createElement('div');
			// if (this.parent.innerHTML != '') this.parent.innerHTML = '';
			elem.innerHTML = `
			<div class="mr-3 w-290 h-244">
				<div class="relative cursor-pointer w-290 h-162 before:content-[''] before:absolute before:bg-21 before:opacity-80 before:w-68 before:h-12 before:inset-2/4 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-xl after:content-[''] after:absolute after:inset-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-t-transparent after:border-t-10 after:border-b-transparent after:border-b-10 after:border-l-l18 after:border-l-white hover:before:bg-rr">
					<img class="w-full h-full" src="https://i.ytimg.com/vi/${this.videoID}/mqdefault.jpg" alt="katy perry"/>
				</div>
				<div class="flex mt-2.5 w-290 h-72">
					<img class="video_logo w-8 h-8 rounded-full" src="${this.channelLogo}" alt="${this.author}"/>
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
