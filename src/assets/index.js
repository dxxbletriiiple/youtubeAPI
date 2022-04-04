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
		// getData(input.value);
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
	let vidID = [];
	let searchData;
	async function getData(q) {
		searchData = await fetch(
			url + API_key + '&type=video&part=snippet&max_results=10&q=' + q,
		).then((res) => res.json());

		async function pushID(rs) {
			rs.items.forEach((item) => vidID.push(item.id.videoId));
		}
		await pushID(searchData);
		console.log('data', searchData);
		console.log('id', vidID);
		await getVideoViews(vidID);
	}
	const videosViews = {};

	async function getVideoViews(id) {
		id.forEach(async (item) => {
			const views = fetch(
				`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${item}&key=AIzaSyBRTWf2kiejB4w0SHCakDVutVGnKb8Bjnw`,
			)
				.then((resp) => resp.json())
				.then((resp) => +resp.items[0].statistics.viewCount);
			videosViews[item] = await views;
		});
		console.log(videosViews);
	}
	// title, author, date, views, vidID
	const videoData = {
		videoID: 'aasdasd',
		title: 'title',
		author: 'lol',
		views: 50,
		date: '20.05.2000',
		channelLogo: 'logo',
	};

	async function sortVideo(vid) {
		for (let key in vid) {
		}
	}
	/* async function GetData(q) {
		console.log('fetching');
		const data = async () =>
			fetch(url + API_key + '&type=video&part=snippet&max_results=10&q=' + q);
		data();
		const id = await data.json().items;
		console.log(id);
		const statistics = await fetch(
			`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=AIzaSyBRTWf2kiejB4w0SHCakDVutVGnKb8Bjnw`,
		);
		statistics.json();

		console.log('stat', statistics);
	} */

	/* function getData(q) {
		let videoID = [];
		let data = fetch(url + API_key + '&type=video&part=snippet&max_results=10&q=' + q)
			.then((req) => req.json())
			.then((req) => {
				console.log('req', req);
				req.items.forEach((item) => videoID.push(item.id.videoID));
				console.log('vidid', videoID);
				return req;

				let statistics = fetch(
					`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=NKtdfmpyfVY&key=AIzaSyBRTWf2kiejB4w0SHCakDVutVGnKb8Bjnw`,
				)
					.then((r) => r.json())
					.then((r) => r.items[0].statistics.viewCount);

				console.log(
					'url',
					url + API_key + '&type=video&part=snippet&max_results=10&q=' + q,
				);
				data.items.forEach((vid) => {
					let video = new AppendVideos(
						vid.snippet.title,
						vid.snippet.channelTitle,
						vid.snippet.publishTime,
						statistics,
						vid.id.videoId,
					);
					console.log('vid', vid);
					video.render();
				});
			})
			.catch((req) => console.log(req));
	}*/

	class AppendVideos {
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
			// if (this.parent.innerHTML != '') this.parent.innerHTML = '';
			elem.innerHTML = `
			<div class="mr-3">
				<iframe class="w-290 h-162" src="http://www.youtube.com/embed/${this.vidID}" frameborder="0" allowfullscreen></iframe>
				<div class="flex mt-2.5 w-290 h-72">
					<img class="video_logo w-8 h-8 rounded-full" src="https://yt3.ggpht.com/wblvtoHFXpBoat-oNukycB5auBa45inSwiyghE8gac3MN_ridYgeY1kHRKCkBrb1slgpIlO6Vw=s68-c-k-c0x00ffffff-no-rj" alt="${this.title}"/>
					<div class="video-text ml-3">
						<div class="video_title font-sans text-13 font-bold">${this.title}</div>
						<div class="video_author text-xs text-72">${this.author}</div>
						<div class="vide_info flex">
							<span class="views text-xs text-72">${this.views}&nbsp;</span>
							<span class="video_date text-xs text-72">•&nbsp${this.date}</span>
						</div>
					</div>
				</div>
			</div>`;
			this.parent.append(elem);
		}
	}

	//change color-theme
	/* if (
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
	localStorage.removeItem('theme'); */
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

// channel logo src https://yt3.ggpht.com/ytc/AKedOLTHZuOu1RwxGkcEsHKE6_WfmeST3JPoWNLxir3alA=s68-c-k-c0x00ffffff-no-rj
// channel url https://www.youtube.com/channel/UC7wXt18f2iA3EDXeqAVuKng?feature=emb_ch_name_ex

//etag "z5KdTdZudGJGI-FyiRUjODimbD0"

// vid-id "hoIl8NZYyFs"
//snippet -channel-id "UC7wXt18f2iA3EDXeqAVuKng"

// https://yt3.ggpht.com/ytc/AKedOLQshPLMIaytOn07OTGO8KgyVFZPVf_RFG0JaEk-TA=s88-c-k-c0x00ffffff-no-rj
