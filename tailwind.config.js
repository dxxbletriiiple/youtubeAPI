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
				480: '480px',
			},
			height: {
				27: '27px',
			},
			colors: {
				cc: '#ccc',
				f8: '#f8f8f8',
			},
		},
		fontFamily: {
			sans: ['Roboto', 'Arial'],
		},
	},
	plugins: [],
};
