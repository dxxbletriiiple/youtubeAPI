// https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY] HTTP/1.1
// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

// ! channel statistics and more
// https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyBRTWf2kiejB4w0SHCakDVutVGnKb8Bjnw

// ! search
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyBRTWf2kiejB4w0SHCakDVutVGnKb8Bjnw&type=video&part=snippet&max_results%2CcontentDetails%2Cstatistics&=10&q=News

// ! video statistics
//https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=AIzaSyBRTWf2kiejB4w0SHCakDVutVGnKb8Bjnw
/*

 youtube.com/watch?UC7wXt18f2iA3EDXeqAVuKng/hoIl8NZYyFs

*/

// channel logo src https://yt3.ggpht.com/ytc/AKedOLTHZuOu1RwxGkcEsHKE6_WfmeST3JPoWNLxir3alA=s68-c-k-c0x00ffffff-no-rj
// channel url https://www.youtube.com/channel/UC7wXt18f2iA3EDXeqAVuKng?feature=emb_ch_name_ex

//etag "z5KdTdZudGJGI-FyiRUjODimbD0"

// vid-id "hoIl8NZYyFs"
//snippet -channel-id "UC7wXt18f2iA3EDXeqAVuKng"

// https://yt3.ggpht.com/ytc/AKedOLQshPLMIaytOn07OTGO8KgyVFZPVf_RFG0JaEk-TA=s88-c-k-c0x00ffffff-no-rj

// let str = '&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&id=UCj22tfcQrWG7EMEKS0qLeEg&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&id=UCX6OQ3DkcsbYNE6H8uQQuVA&id=UCIPPMRA040LQr5QPyJEbmXA'.split('&id=');
// console.log(str, str.length);

/* let arr = [
	{
		kind: 'youtube#channel',
		etag: 'x5Huci6NPAmqSjx7_kHxVtijSqY',
		id: 'UCj22tfcQrWG7EMEKS0qLeEg',
		snippet: {
			title: 'CarryMinati',
			description:
				"I am an Indian comedian, gamer, rapper. \n\nCarryisLive :  https://www.youtube.com/channel/UC0IW...\n\nInstagram► https://www.instagram.com/carryminati/\nFacebook ► https://www.facebook.com/CarryDeol/\nTwitter ► https://twitter.com/CarryMinati \nSnapchat► heyAjey\n\nBusiness Related queries: workforcarry@gmail.com \n\nAbout CarryMinati : Youthoob certified member\n\nDISCLAIMER: Please don't go out of your way to  or hate on anyone I talk about in my videos, this channel is to entertain people and I usually focus on joking about what the people are doing in general & not the individual themselves, please don't go spreading hate it's all \nfor laughs. For detailed disclaimer please refer to the below link.\nhttps://bit.ly/3iRKHH8",
			customUrl: 'addicteda1',
			publishedAt: '2014-10-30T11:26:23Z',
			thumbnails: {
				default: {
					url: 'https://yt3.ggpht.com/ytc/AKedOLTYmj1X3VgQCftFxIIxGH5leO14nBVJCctR2r6m1Q=s88-c-k-c0x00ffffff-no-rj',
					width: 88,
					height: 88,
				},
				medium: {
					url: 'https://yt3.ggpht.com/ytc/AKedOLTYmj1X3VgQCftFxIIxGH5leO14nBVJCctR2r6m1Q=s240-c-k-c0x00ffffff-no-rj',
					width: 240,
					height: 240,
				},
				high: {
					url: 'https://yt3.ggpht.com/ytc/AKedOLTYmj1X3VgQCftFxIIxGH5leO14nBVJCctR2r6m1Q=s800-c-k-c0x00ffffff-no-rj',
					width: 800,
					height: 800,
				},
			},
			localized: {
				title: 'CarryMinati',
				description:
					"I am an Indian comedian, gamer, rapper. \n\nCarryisLive :  https://www.youtube.com/channel/UC0IW...\n\nInstagram► https://www.instagram.com/carryminati/\nFacebook ► https://www.facebook.com/CarryDeol/\nTwitter ► https://twitter.com/CarryMinati \nSnapchat► heyAjey\n\nBusiness Related queries: workforcarry@gmail.com \n\nAbout CarryMinati : Youthoob certified member\n\nDISCLAIMER: Please don't go out of your way to  or hate on anyone I talk about in my videos, this channel is to entertain people and I usually focus on joking about what the people are doing in general & not the individual themselves, please don't go spreading hate it's all \nfor laughs. For detailed disclaimer please refer to the below link.\nhttps://bit.ly/3iRKHH8",
			},
			country: 'IN',
		},
	},
	{
		kind: 'youtube#channel',
		etag: 'inrQ3ZkZXfUxcGHyApgXXhR8ZIM',
		id: 'UCX6OQ3DkcsbYNE6H8uQQuVA',
		snippet: {
			title: 'MrBeast',
			description:
				"SUBSCRIBE FOR A COOKIE!\nAccomplishments\n- Raised $20,000,000 To Plant 20,000,000 Trees\n- Given millions to charity\n- Donated over 100 cars lol\n- Gave away a private island\n- Given away over 100 ps4s lol\n- Gave away 1 million dollars in one video \n- Counted to 100k\n- Read the Dictionary\n- Watched Dance Till You're Dead For 10 Hours\n- Read Bee Movie Script\n- Read Longest English Word\n- Watched Paint Dry\n- Ubering Across America\n- Watched It's Every Day Bro For 10 Hours\n- Ran a marathon in the world's largest shoes\n- Adopted every dog in a shelter\nYou get the point haha\n\n\n\n*Do not email me asking for money, I give away money because it makes me happy :)",
			customUrl: 'mrbeast6000',
			publishedAt: '2012-02-20T00:43:50Z',
			thumbnails: {
				default: {
					url: 'https://yt3.ggpht.com/ytc/AKedOLQn-UcDT2oxlNIT3ez7hxQpehCS9DTDYqI72SjbjQ=s88-c-k-c0x00ffffff-no-rj',
					width: 88,
					height: 88,
				},
				medium: {
					url: 'https://yt3.ggpht.com/ytc/AKedOLQn-UcDT2oxlNIT3ez7hxQpehCS9DTDYqI72SjbjQ=s240-c-k-c0x00ffffff-no-rj',
					width: 240,
					height: 240,
				},
				high: {
					url: 'https://yt3.ggpht.com/ytc/AKedOLQn-UcDT2oxlNIT3ez7hxQpehCS9DTDYqI72SjbjQ=s800-c-k-c0x00ffffff-no-rj',
					width: 800,
					height: 800,
				},
			},
			localized: {
				title: 'MrBeast',
				description:
					"SUBSCRIBE FOR A COOKIE!\nAccomplishments\n- Raised $20,000,000 To Plant 20,000,000 Trees\n- Given millions to charity\n- Donated over 100 cars lol\n- Gave away a private island\n- Given away over 100 ps4s lol\n- Gave away 1 million dollars in one video \n- Counted to 100k\n- Read the Dictionary\n- Watched Dance Till You're Dead For 10 Hours\n- Read Bee Movie Script\n- Read Longest English Word\n- Watched Paint Dry\n- Ubering Across America\n- Watched It's Every Day Bro For 10 Hours\n- Ran a marathon in the world's largest shoes\n- Adopted every dog in a shelter\nYou get the point haha\n\n\n\n*Do not email me asking for money, I give away money because it makes me happy :)",
			},
			country: 'US',
		},
	},
	{
		kind: 'youtube#channel',
		etag: 'hvkIO0YYpQvpiXFLybtZnwYt6qA',
		id: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
		snippet: {
			title: 'PewDiePie',
			description: 'I make videos.',
			publishedAt: '2010-04-29T10:54:00Z',
			thumbnails: {
				default: {
					url: 'https://yt3.ggpht.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s88-c-k-c0x00ffffff-no-rj',
					width: 88,
					height: 88,
				},
				medium: {
					url: 'https://yt3.ggpht.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s240-c-k-c0x00ffffff-no-rj',
					width: 240,
					height: 240,
				},
				high: {
					url: 'https://yt3.ggpht.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s800-c-k-c0x00ffffff-no-rj',
					width: 800,
					height: 800,
				},
			},
			localized: {
				title: 'PewDiePie',
				description: 'I make videos.',
			},
			country: 'US',
		},
	},
	{
		kind: 'youtube#channel',
		etag: 'pK84M-MjPMyhAJt3_Kipz0RPz5U',
		id: 'UCIPPMRA040LQr5QPyJEbmXA',
		snippet: {
			title: 'MrBeast Gaming',
			description: 'MrBeast Gaming - SUBSCRIBE OR ELSE',
			publishedAt: '2020-04-07T18:46:13.80072Z',
			thumbnails: {
				default: {
					url: 'https://yt3.ggpht.com/ytc/AKedOLTwxbi8cjRqaNJPqfSW8GAog09ZN0LMKY0uMv_MeQ=s88-c-k-c0x00ffffff-no-rj',
					width: 88,
					height: 88,
				},
				medium: {
					url: 'https://yt3.ggpht.com/ytc/AKedOLTwxbi8cjRqaNJPqfSW8GAog09ZN0LMKY0uMv_MeQ=s240-c-k-c0x00ffffff-no-rj',
					width: 240,
					height: 240,
				},
				high: {
					url: 'https://yt3.ggpht.com/ytc/AKedOLTwxbi8cjRqaNJPqfSW8GAog09ZN0LMKY0uMv_MeQ=s800-c-k-c0x00ffffff-no-rj',
					width: 800,
					height: 800,
				},
			},
			localized: {
				title: 'MrBeast Gaming',
				description: 'MrBeast Gaming - SUBSCRIBE OR ELSE',
			},
			country: 'US',
		},
	},
];
let ids = [
	{
		author: 'PewDiePie',
		channelID: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
		channelLogo:
			'https://yt3.ggpht.com/ytc/AKedOLTwxbi8cjRqaNJPqfSW8GAog09ZN0LMKY0uMv_MeQ=s88-c-k-c0x00ffffff-no-rj',
		date: 'Fri Oct 05 2018',
		thumbnail: 'https://i.ytimg.com/vi/6Dh-RL__uN4/mqdefault.jpg',
		title: 'bitch lasagna',
		videoID: '6Dh-RL__uN4',
		views: '303520811',
	},
	{
		author: 'PewDiePie',
		channelID: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
		channelLogo:
			'https://yt3.ggpht.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s88-c-k-c0x00ffffff-no-rj',
		date: 'Sun Mar 31 2019',
		thumbnail: 'https://i.ytimg.com/vi/PHgc8Q6qTjc/mqdefault.jpg',
		title: 'Congratulations',
		videoID: 'PHgc8Q6qTjc',
		views: '222144361',
	},
	{
		author: 'PewDiePie',
		channelID: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
		channelLogo:
			'https://yt3.ggpht.com/ytc/AKedOLQn-UcDT2oxlNIT3ez7hxQpehCS9DTDYqI72SjbjQ=s88-c-k-c0x00ffffff-no-rj',
		date: 'Sun Dec 18 2016',
		thumbnail: 'https://i.ytimg.com/vi/7Vj5M0qKh8g/mqdefault.jpg',
		title: 'THE RUBY PLAYBUTTON / YouTube 50 Mil Sub Reward Unbox',
		videoID: '7Vj5M0qKh8g',
		views: '89712079',
	},
	{
		author: 'PewDiePie',
		channelID: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
		channelLogo:
			'https://yt3.ggpht.com/ytc/AKedOLTYmj1X3VgQCftFxIIxGH5leO14nBVJCctR2r6m1Q=s88-c-k-c0x00ffffff-no-rj',
		date: 'Tue Sep 10 2019',
		thumbnail: 'https://i.ytimg.com/vi/DYlesHOaPkY/mqdefault.jpg',
		title: 'Unboxing 100 MIL YouTube AWARD!!',
		videoID: 'DYlesHOaPkY',
		views: '70452409',
	},
	{
		author: 'CarryMinati',
		channelID: 'UCj22tfcQrWG7EMEKS0qLeEg',
		date: 'Tue Jan 01 2019',
		thumbnail: 'https://i.ytimg.com/vi/2QBsDH72MoM/mqdefault.jpg',
		title: 'Bye Pewdiepie | Carryminati',
		videoID: '2QBsDH72MoM',
		views: '58104767',
	},
	{
		author: 'PewDiePie',
		channelID: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
		date: 'Fri Jun 21 2019',
		thumbnail: 'https://i.ytimg.com/vi/VGt-BZ-SxGI/mqdefault.jpg',
		title: 'Minecraft Part 1',
		videoID: 'VGt-BZ-SxGI',
		views: '51786276',
	},
	{
		author: 'PewDiePie',
		channelID: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
		date: 'Fri Jul 22 2016',
		thumbnail: 'https://i.ytimg.com/vi/5pEPpNpbnCI/mqdefault.jpg',
		title: 'BROFIST (PewDiePie Song, By Roomie)',
		videoID: '5pEPpNpbnCI',
		views: '46143331',
	},
	{
		author: 'PewDiePie',
		channelID: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw',
		date: 'Sat Jan 27 2018',
		thumbnail: 'https://i.ytimg.com/vi/Vk8UEWHYfEg/mqdefault.jpg',
		title: 'PewDiePie   Hej Monika Remix by Party In Backyard',
		videoID: 'Vk8UEWHYfEg',
		views: '45752520',
	},
	{
		author: 'MrBeast',
		channelID: 'UCX6OQ3DkcsbYNE6H8uQQuVA',
		date: 'Mon Dec 17 2018',
		thumbnail: 'https://i.ytimg.com/vi/QapO3maXd9k/mqdefault.jpg',
		title: 'Donating $10000 To Pewdiepie',
		videoID: 'QapO3maXd9k',
		views: '44437131',
	},
	{
		author: 'MrBeast Gaming',
		channelID: 'UCIPPMRA040LQr5QPyJEbmXA',
		date: 'Sat Oct 31 2020',
		thumbnail: 'https://i.ytimg.com/vi/FafXBaAEowM/mqdefault.jpg',
		title: 'Among Us But PewDiePie Goes 90,000 IQ!',
		videoID: 'FafXBaAEowM',
		views: '44170983',
	},
];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
	arr2.push(arr[i].id);
}
let arr3 = [];
for(let j = 0; i< ids.length; j++) {
	arr3.psuh()
}
console.log(arr2); */
