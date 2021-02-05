export const images = {
	default: {
		0: require('./images/theme1/1.svg'),
		1: require('./images/theme1/2.svg'),
		2: require('./images/theme1/3.svg'),
		3: require('./images/theme1/4.svg'),
		4: require('./images/theme1/5.svg'),
		5: require('./images/theme1/6.svg'),
		6: require('./images/theme1/7.svg'),
		7: require('./images/theme1/8.svg'),
		8: require('./images/theme1/9.svg')
	},
	plant: {
		0: require('./images/theme2/1.svg'),
		1: require('./images/theme2/2.svg'),
		2: require('./images/theme2/3.svg'),
		3: require('./images/theme2/4.svg'),
		4: require('./images/theme2/5.svg'),
		5: require('./images/theme2/6.svg'),
		6: require('./images/theme2/7.svg')
	}
};

export const colors = {
	default: [
		['#7AD76C', '#63DE51'],
		['#59CDF3', '#3BC8F6'],
		['#FA7079', '#FB4450'],
		['#FCA35C', '#FE8A2E'],
		['#945EF7', '#7D37FE'],
		['#FF6ACF', '#FE3CC0'],
		['#6F7DFC', '#4E60FF'],
		['#8D83F9', '#6759FD'],
		['#40CCB0', '#25D3B0'],
		['#c4c4c4', '#9e9e9e']
	],
	plant: [
		['#59CDF3', '#3BC8F6'],
		['#FA7079', '#FB4450'],
		['#FCA35C', '#FE8A2E'],
		['#40CCB0', '#25D3B0'],
		['#5F96FB', '#2B75FF'],
		['#8D83F9', '#6759FD'],
		['#7AD76C', '#63DE51'],
		['#c4c4c4', '#9e9e9e']
	]
};

export const letterList = [
	'a', 'b', 'c', 'd', 'e', 'f',
	'g', 'h', 'i', 'j', 'k', 'l',
	'm', 'n', 'o', 'p', 'q', 'r',
	's', 't', 'u', 'v', 'w', 'x',
	'y', 'z'
];

export const getColors = (letter, empStatus, randomColor, theme) => {
	let letterIndex = 0;
	let selectColors = colors[theme] ? colors[theme] : colors['default'];
	let colorSize = selectColors.length - 1;
	if (letter) {
		let index = letterList.findIndex(item => item === letter);
		if (index > -1) {
			letterIndex = index;
		}
	}
	let currentColors = empStatus === 2 ? selectColors[colorSize] : selectColors[letterIndex % colorSize];
	let colorIndex = letterIndex % colorSize;
	if (!randomColor) {
		colorIndex = 0;
		currentColors = selectColors[0];
	}
	return {
		colorIndex: colorIndex,
		currentColors: currentColors
	};
};

