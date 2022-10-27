
import theme11 from './images/theme1/1.svg';
import theme12 from './images/theme1/2.svg';
import theme13 from './images/theme1/3.svg';
import theme14 from './images/theme1/4.svg';
import theme15 from './images/theme1/5.svg';
import theme16 from './images/theme1/6.svg';
import theme17 from './images/theme1/7.svg';
import theme18 from './images/theme1/8.svg';
import theme19 from './images/theme1/9.svg';

import theme21 from './images/theme2/1.svg';
import theme22 from './images/theme2/2.svg';
import theme23 from './images/theme2/3.svg';
import theme24 from './images/theme2/4.svg';
import theme25 from './images/theme2/5.svg';
import theme26 from './images/theme2/6.svg';
import theme27 from './images/theme2/7.svg';

export const images = {
	default: {
		0: theme11,
		1: theme12,
		2: theme13,
		3: theme14,
		4: theme15,
		5: theme16,
		6: theme17,
		7: theme18,
		8: theme19
	},
	plant: {
		0: theme21,
		1: theme22,
		2: theme23,
		3: theme24,
		4: theme25,
		5: theme26,
		6: theme27
	}
};

export const colors = {
	default: [
		['#6F7DFC', '#4E60FF'],
		['#72C854', '#71C651'],
		['#59CDF3', '#3BC8F6'],
		['#FA7079', '#FB4450'],
		['#FCA35C', '#FE8A2E'],
		['#945EF7', '#7D37FE'],
		['#FF6ACF', '#FE3CC0'],
		['#8D83F9', '#6759FD'],
		['#1FC3A2', '#0DB7A1']

	],
	plant: [
		['#5F96FB', '#2B75FF'],
		['#59CDF3', '#3BC8F6'],
		['#FA7079', '#FB4450'],
		['#FCA35C', '#FE8A2E'],
		['#40CCB0', '#25D3B0'],
		['#8D83F9', '#6759FD'],
		['#72C854', '#71C651']
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

	if (letter) {
		let index = letterList.findIndex(item => item === letter);
		if (index > -1) {
			letterIndex = index;
		}
	}

	let currentColors = empStatus === 2 ? ['#c4c4c4', '#9e9e9e'] : selectColors[letterIndex % selectColors.length];
	let colorIndex = letterIndex % selectColors.length;

	if (!randomColor && empStatus !== 2) {
		colorIndex = 0;
		currentColors = selectColors[0];
	}

	return {
		colorIndex: colorIndex,
		currentColors: currentColors
	};
};

