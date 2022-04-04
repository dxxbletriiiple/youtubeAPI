module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		extend: {
			width: {
				111: '1px',
				1.8: '18px',
				11: '11px',
				13: '54px',
				27: '27px',
				152: '152px',
				185: '185px',
				224: '224px',
				290: '290px',
				480: '480px',
			},
			height: {
				26: '26px',
				27: '27px',
				50: '50px',
				72: '72px',
				162: '162px',
			},
			colors: {
				18: '#181818',
				30: '#303030',
				72: '#727272',
				63: '#636363',
				'1a': '#ffffff1a',
				cc: '#ccc',
				d9: '#d9d9d9',
				f8: '#f8f8f8',
			},
			fontSize: {
				13: ['13px', '18px'],
			},
			margin: {
				42: '42px',
				185: '185px',
				224: '224px',
			},
			inset: {
				'60px': '60px',
				x: '-100%',
			},
		},
		fontFamily: {
			sans: ['Roboto', 'Arial'],
		},
	},
};
