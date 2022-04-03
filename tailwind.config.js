module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: true,
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
				cc: '#ccc',
				f8: '#f8f8f8',
				72: '#727272',
				63: '#636363',
				d9: '#d9d9d9',
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
